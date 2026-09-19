import { useState } from 'react'
import DesignFilePicker from '@/common/components/DesignFilePicker'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import UploadSuccessDialog from '../-components/UploadSuccessDialog'

export default function UploadFilesForm() {
  const [files, setFiles] = useState<Array<File>>([])
  const [notes, setNotes] = useState('')

  return (
    <section
      className="min-w-0 rounded-3xl border bg-card relative z-10 p-6 sm:p-8"
      aria-labelledby="design-files-heading"
    >
      <DesignFilePicker files={files} onFilesChange={setFiles} />

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
