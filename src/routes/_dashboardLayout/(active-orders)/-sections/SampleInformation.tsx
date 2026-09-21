import { Card, CardContent, CardHeader, CardTitle } from "#/components/ui/card";
import { Separator } from "#/components/ui/separator";
import RevisionRow from "../-components/RevisionRow";

export default function SampleInformation() {
    return (
        <Card className="rounded-2xl border-black/5 bg-white py-5 shadow-sm">
            <CardHeader className="px-5">
                <CardTitle className="text-base font-semibold">
                    Sample Information
                </CardTitle>
            </CardHeader>
            <CardContent className="px-5">
                <dl className="grid grid-cols-[auto_1fr] gap-x-8 gap-y-3 text-xs sm:text-sm">
                    <dt className="text-muted-foreground">Printer</dt>
                    <dd className="font-semibold">PrintPro Solutions</dd>
                    <dt className="text-muted-foreground">Uploaded</dt>
                    <dd className="font-semibold">Jul 28, 2026</dd>
                </dl>
                <Separator className="my-4" />
                <div className="flex items-center justify-between gap-3">
                    <h2 className="text-base font-semibold">Version History</h2>
                    <span className="text-[10px] text-muted-foreground">
                        Free Revisions Remaining 2 of 3
                    </span>
                </div>
                <div className="mt-4 space-y-3">
                    <RevisionRow version="Revision 1" details="Jun 1, 2026  2 pages" />
                    <RevisionRow
                        version="Revision 2"
                        details="Jun 2, 2026  1 page"
                        current
                    />
                </div>
            </CardContent>
        </Card>
    )
}