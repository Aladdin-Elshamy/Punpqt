import { Download, Eye } from 'lucide-react'
import DesignFileRow from '#/common/components/DesignFileRow'
import { Button, buttonVariants } from '#/components/ui/button'

export type UploadedDesignFile = {
  id: string
  name: string
  format: string
  size: string
  uploadedAt: string
  uploadedDateLabel: string
  previewUrl?: string
  downloadUrl?: string
}

export default function UploadedFileRow({
  file,
}: {
  file: UploadedDesignFile
}) {
  return (
    <DesignFileRow
      name={file.name}
      variant="detailed"
      metadata={
        <>
          <span className="font-medium text-primary">{file.format}</span>
          <span>{file.size}</span>
          <span>
            Uploaded{' '}
            <time dateTime={file.uploadedAt}>{file.uploadedDateLabel}</time>
          </span>
        </>
      }
      actions={
        <>
          {file.previewUrl ? (
            <a
              href={file.previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ variant: 'outline', size: 'lg' })}
              aria-label={`Preview ${file.name}`}
            >
              <Eye aria-hidden="true" /> Preview
            </a>
          ) : (
            <Button
              type="button"
              variant="outline"
              size="lg"
              disabled
              aria-label={`Preview unavailable for ${file.name}`}
            >
              <Eye aria-hidden="true" /> Preview
            </Button>
          )}
          {file.downloadUrl ? (
            <a
              href={file.downloadUrl}
              download={file.name}
              className={buttonVariants({ size: 'lg' })}
              aria-label={`Download ${file.name}`}
            >
              <Download aria-hidden="true" /> Download
            </a>
          ) : (
            <Button
              type="button"
              size="lg"
              disabled
              aria-label={`Download unavailable for ${file.name}`}
            >
              <Download aria-hidden="true" /> Download
            </Button>
          )}
        </>
      }
    />
  )
}
