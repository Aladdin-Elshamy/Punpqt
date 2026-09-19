import { Card, CardContent } from "#/components/ui/card";
import MessageAddIcon from "../icons/MessageAddIcon";

export default function AdditionalNotes({ notes }: { notes: string }) {
    return (
        <Card className="gap-0 rounded-2xl border-border/70 py-0 font-atyp shadow-none">
            <CardContent className="p-4">
                <div className="flex items-center gap-3">
                    <span className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <MessageAddIcon className="size-5" aria-hidden="true" />
                    </span>
                    <h2 className="text-lg font-bold">Additional Notes</h2>
                </div>
                <p className="mt-5 border-s-5 border-primary rounded-s-[5px] rounded-e-sm px-4 h-24 flex items-center bg-[#E7F1F2] text-sm">
                    “{notes}”
                </p>
            </CardContent>
        </Card>
    )
}