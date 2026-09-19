import { useId } from 'react'
import UploadedFileRow from '../-components/UploadedFileRow'
import type { UploadedDesignFile } from '../-components/UploadedFileRow'
import { Card, CardContent, CardHeader } from '#/components/ui/card'

export default function UploadedFiles({
  files,
}: {
  files: Array<UploadedDesignFile>
}) {
  const headingId = useId()
  const unavailable = files.some(
    (file) => !file.previewUrl || !file.downloadUrl,
  )

  return (
    <section aria-labelledby={headingId}>
      <Card className="gap-6 rounded-3xl py-6 shadow-sm ring-black/5 sm:pt-9">
        <CardHeader className="flex flex-row items-center justify-between gap-4 px-6 sm:px-9">
          <h2 id={headingId} className="text-lg font-semibold">
            Uploaded Files
          </h2>
          <span className="shrink-0 text-sm text-muted-foreground">
            {files.length} {files.length === 1 ? 'file' : 'files'}
          </span>
        </CardHeader>
        <CardContent className="px-5 sm:px-6">
          {files.length > 0 ? (
            <ul className="space-y-4">
              {files.map((file) => (
                <UploadedFileRow key={file.id} file={file} />
              ))}
            </ul>
          ) : (
            <p className="text-sm text-muted-foreground">
              No files have been uploaded yet.
            </p>
          )}
          {unavailable && (
            <p className="mt-4 text-xs text-muted-foreground">
              Preview and download are unavailable for files without a connected
              file URL.
            </p>
          )}
        </CardContent>
      </Card>
    </section>
  )
}
