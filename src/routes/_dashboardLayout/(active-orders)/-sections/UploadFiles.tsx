import DesignFilePicker from "#/common/components/DesignFilePicker"
import { Button } from "#/components/ui/button"
import { useId, useState } from "react"

export default function UploadFiles() {
    const headingId = useId()
    const [files, setFiles] = useState<Array<File>>([])
    const [pickerKey, setPickerKey] = useState(0)
    const [uploadNotice, setUploadNotice] = useState(false)

    function cancel() {
        setFiles([])
        setPickerKey((previous) => previous + 1)
        setUploadNotice(false)
    }
    return (
        <section
            aria-labelledby={headingId}
            className="min-w-0 rounded-3xl border bg-card px-6 py-8 shadow-sm sm:py-10"
        >
            <h2 id={headingId} className="text-lg font-semibold">
                Upload Revised Files
            </h2>
            <DesignFilePicker
                key={pickerKey}
                files={files}
                onFilesChange={(selected) => {
                    setFiles(selected)
                    setUploadNotice(false)
                }}
            />
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-5">
                <Button
                    type="button"
                    disabled={files.length === 0}
                    onClick={() => setUploadNotice(true)}
                    className="h-11 rounded-2xl text-base sm:w-60"
                >
                    Upload Files
                </Button>
                <Button
                    type="button"
                    variant="outline"
                    onClick={cancel}
                    className="h-11 rounded-2xl border-primary text-base text-primary hover:text-primary sm:w-45"
                >
                    Cancel
                </Button>
            </div>
            {uploadNotice && (
                <p role="status" className="mt-4 text-sm text-muted-foreground">
                    File uploading is not connected yet. Your selected files have not
                    been uploaded.
                </p>
            )}
        </section>
    )
}