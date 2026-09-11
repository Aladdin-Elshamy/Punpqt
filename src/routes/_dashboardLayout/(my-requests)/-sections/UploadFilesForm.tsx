import { useRef, useState } from 'react'
import { FileText, Upload, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { cn } from '@/lib/utils'
import UploadSuccessDialog from '../-components/UploadSuccessDialog'

const extensions = [
  'pdf',
  'ai',
  'eps',
  'psd',
  'png',
  'jpg',
  'jpeg',
  'tif',
  'tiff',
]
const fileKey = (file: File) => `${file.name}-${file.size}-${file.lastModified}`
function fileSize(bytes: number) {
  return bytes < 1024 * 1024
    ? `${(bytes / 1024).toFixed(1)} KB`
    : `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

export default function UploadFilesForm() {
  const input = useRef<HTMLInputElement>(null)
  const [files, setFiles] = useState<Array<File>>([])
  const [errors, setErrors] = useState<Array<string>>([])
  const [dragging, setDragging] = useState(false)
  const [notes, setNotes] = useState('')

  function addFiles(incoming: Array<File>) {
    const invalid = incoming.filter(
      (file) =>
        !extensions.includes(file.name.split('.').pop()?.toLowerCase() ?? '') ||
        file.size === 0,
    )
    setErrors(
      invalid.map(
        (file) =>
          `${file.name}: choose a non-empty file in a supported format.`,
      ),
    )
    setFiles((previous) => {
      const unique = new Map(previous.map((file) => [fileKey(file), file]))
      incoming
        .filter((file) => !invalid.includes(file))
        .forEach((file) => unique.set(fileKey(file), file))
      return Array.from(unique.values())
    })
  }

  return (
    <section
      className="min-w-0 rounded-3xl border bg-card relative z-10 p-6 sm:p-8"
      aria-labelledby="design-files-heading"
    >
      <div
        className={cn(
          'my-6 flex flex-col items-center gap-3 rounded-2xl border-2 border-dashed px-4 py-10 text-center transition-colors',
          dragging && 'border-primary bg-primary/15',
        )}
        onDragOver={(event) => {
          event.preventDefault()
          setDragging(true)
        }}
        onDragLeave={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget as Node | null))
            setDragging(false)
        }}
        onDrop={(event) => {
          event.preventDefault()
          setDragging(false)
          addFiles(Array.from(event.dataTransfer.files))
        }}
      >
        <div className='flex flex-col items-center gap-2'>
          <span className='size-11 bg-[#E7F1F2] rounded-2xl p-2 flex items-center justify-center mx-auto' aria-hidden="true">
            <Upload className="text-primary size-5" />
          </span>
          <div className='flex items-center gap-1 text-sm'>

            <p className="font-semibold">Drop files here or</p>
            <Button
              type="button"
              variant="ghost"
              className={'border-0 p-0 text-primary text-base font-semibold'}
              onClick={() => input.current?.click()}
            >
              browse
            </Button>
          </div>
        </div>
        <input
          ref={input}
          type="file"
          multiple
          accept={extensions.map((extension) => `.${extension}`).join(',')}
          className="sr-only"
          tabIndex={-1}
          aria-label="Choose design files"
          onChange={(event) => {
            addFiles(Array.from(event.target.files ?? []))
            event.target.value = ''
          }}
        />
        <p className="text-xs text-muted-foreground font-semibold">
          PDF, AI, EPS, PSD, PNG, JPG, TIFF · 300 DPI minimum · CMYK preferred
        </p>
      </div>
      {errors.length > 0 && (
        <ul role="alert" className="mb-4 space-y-1 text-sm text-destructive">
          {errors.map((error, index) => (
            <li key={`${error}-${index}`}>{error}</li>
          ))}
        </ul>
      )}
      <ul className="space-y-3 mb-4">
        {files.map((file) => (
          <li
            key={fileKey(file)}
            className="flex items-center font-semibold bg-[#F4F4F6] gap-3 rounded-xl border p-3"
          >
            <FileText
              className=" shrink-0 text-primary"
              aria-hidden="true"
            />
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm" title={file.name}>
                {file.name}
              </p>
            </div>
            <p className="text-xs text-muted-foreground">
              {fileSize(file.size)}
            </p>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              aria-label={`Remove ${file.name}`}
              onClick={() =>
                setFiles((previous) =>
                  previous.filter((item) => fileKey(item) !== fileKey(file)),
                )
              }
            >
              <X aria-hidden="true" />
            </Button>
          </li>
        ))}
      </ul>

      <label htmlFor="printer-notes" className="font-medium">
        Notes for the Printer{' '}
        <span className="text-sm font-normal text-muted-foreground">
          (Optional)
        </span>
      </label>
      <Textarea
        id="printer-notes"
        value={notes}
        onChange={(event) => setNotes(event.target.value)}
        placeholder="Bleed settings, special instructions, color references…"
        className="mt-3 mb-4 min-h-28 rounded-xl bg-[#F4F4F6] resize-none"
      />
      <Dialog>
        <DialogTrigger
          disabled={files.length === 0}
          render={
            <Button
              disabled={files.length === 0}
              className="h-12 w-full rounded-xl"
            />
          }
        >
          Upload Files &amp; Continue
        </DialogTrigger>
        <UploadSuccessDialog />
      </Dialog>
    </section>
  )
}
