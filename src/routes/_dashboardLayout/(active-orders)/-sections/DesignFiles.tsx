import JourneyStepHint from '../-components/JourneyStepHint'
import PrinterFeedback from './PrinterFeedback'
import UploadedFiles from './UploadedFiles'
import UploadFiles from './UploadFiles'
import type { UploadedDesignFile } from '../-components/UploadedFileRow'

// Screenshot sample data until order file metadata is supplied by the API.
const sampleFiles: Array<UploadedDesignFile> = [1, 2, 3].map((id) => ({
  id: `sample-design-${id}`,
  name: 'design-file.pdf',
  format: 'PDF',
  size: '24 MB',
  uploadedAt: '2026-08-02',
  uploadedDateLabel: '2 Aug 2026',
}))

const revisionIssues = ['Add 3 mm bleed.', 'Convert all fonts to outlines.']
const printerNotes =
  'Please update the highlighted issues and upload the revised files. Production will begin once the files pass the quality review.'

export default function DesignFiles() {
  return (
    <div className="relative z-10 space-y-6 font-atyp sm:space-y-8">
      <JourneyStepHint
        title="Changes Requested"
        description="The printer reviewed your files and requested revisions before production can begin."
        tone="attention"
      />
      <UploadedFiles files={sampleFiles} />
      <PrinterFeedback issues={revisionIssues} notes={printerNotes} />
      <UploadFiles />
    </div>
  )
}
