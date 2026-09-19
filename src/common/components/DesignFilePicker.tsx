import { useRef, useState } from 'react'
import { Upload, X } from 'lucide-react'
import DesignFileRow from './DesignFileRow'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

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

interface DesignFilePickerProps {
  files: Array<File>
  onFilesChange: (files: Array<File>) => void
}

export default function DesignFilePicker({
  files,
  onFilesChange,
}: DesignFilePickerProps) {
  const input = useRef<HTMLInputElement>(null)
  const [errors, setErrors] = useState<Array<string>>([])
  const [dragging, setDragging] = useState(false)

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
    const unique = new Map(files.map((file) => [fileKey(file), file]))
    incoming
      .filter((file) => !invalid.includes(file))
      .forEach((file) => unique.set(fileKey(file), file))
    onFilesChange(Array.from(unique.values()))
  }

  return (
    <div>
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
        <div className="flex flex-col items-center gap-2">
          <span
            className="size-11 bg-[#E7F1F2] rounded-2xl p-2 flex items-center justify-center mx-auto"
            aria-hidden="true"
          >
            <Upload className="text-primary size-5" />
          </span>
          <div className="flex items-center gap-1 text-sm">
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
          <DesignFileRow
            key={fileKey(file)}
            name={file.name}
            metadata={fileSize(file.size)}
            actions={
              <Button
                type="button"
                variant="ghost"
                size="icon"
                aria-label={`Remove ${file.name}`}
                onClick={() =>
                  onFilesChange(
                    files.filter((item) => fileKey(item) !== fileKey(file)),
                  )
                }
              >
                <X aria-hidden="true" />
              </Button>
            }
          />
        ))}
      </ul>
    </div>
  )
}
