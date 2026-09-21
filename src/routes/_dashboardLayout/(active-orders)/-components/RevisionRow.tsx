import { Eye } from "lucide-react"

export default function RevisionRow({
    version,
    details,
    current = false,
}: {
    version: string
    details: string
    current?: boolean
}) {
    return (
        <div className="flex items-center gap-3">
            <span
                className={`flex size-9 items-center justify-center rounded-xl ${current ? 'bg-primary text-white' : 'bg-[#F4F4F6] text-muted-foreground'}`}
            >
                <Eye className="size-3.5" />
            </span>
            <div>
                <p className="text-sm font-bold">{version}</p>
                <p className="text-xs text-muted-foreground">{details}</p>
            </div>
        </div>
    )
}