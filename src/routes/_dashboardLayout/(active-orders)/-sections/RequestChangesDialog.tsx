import { useState } from 'react'
import { Button } from '#/components/ui/button'
import { Textarea } from '#/components/ui/textarea'
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '#/components/ui/dialog'
import DesignFilePicker from '#/common/components/DesignFilePicker'
import JourneyStepHint from '../-components/JourneyStepHint'
import { Badge } from '#/components/ui/badge'

export default function RequestChangesDialog({ onSend }: { onSend: () => void }) {
  const [description, setDescription] = useState('')
  const [files, setFiles] = useState<Array<File>>([])

  return (
    <DialogContent className="max-h-[92vh] overflow-y-auto rounded-2xl bg-white px-5 py-7 text-black ring-0 sm:max-w-2xl sm:px-10 sm:py-9">
      <DialogHeader className="gap-2">
        <DialogTitle className="font-atyp text-2xl font-semibold sm:text-[30px]">
          Request Changes
        </DialogTitle>
        <DialogDescription className="text-base leading-6 text-muted-foreground">
          Tell the printer what needs to be changed in this sample before
          production begins.
        </DialogDescription>
      </DialogHeader>
      <div className="mt-6 space-y-5">
        <div>
          <div className="mb-2 flex items-center justify-between">
            <label
              htmlFor="change-description"
              className="text-sm font-semibold"
            >
              Description of Changes
            </label>
            <span className="text-xs text-muted-foreground">
              {description.length} / 500
            </span>
          </div>
          <Textarea
            id="change-description"
            value={description}
            maxLength={500}
            onChange={(event) => setDescription(event.target.value)}
            placeholder="Describe the required changes..."
            className="min-h-28 resize-none rounded-xl bg-[#F7F7F8] p-4"
          />
        </div>
        <DesignFilePicker
          files={files}
          onFilesChange={(selected) => {
            setFiles(selected)
          }}
        />

        <JourneyStepHint tone='attention' title='Free Revisions Remaining' description='After the first 3 revisions, additional revision charges may apply.' supplementaryText={<Badge className='bg-primary text-white'>2 of 3</Badge>} />
      </div>
      <div className="mt-7 grid gap-3 sm:grid-cols-2">
        <DialogClose
          disabled={!description.trim()}
          render={<Button onClick={() => {
            onSend()
            setDescription("")
          }} className="h-12 rounded-xl text-white" />}
        >
          Send Revision Request
        </DialogClose>
        <DialogClose
          render={
            <Button
              variant="outline"
              className="h-12 rounded-xl border-primary text-primary hover:text-white hover:bg-primary hover:border-0"
            />
          }
        >
          Cancel
        </DialogClose>
      </div>
    </DialogContent>
  )
}
