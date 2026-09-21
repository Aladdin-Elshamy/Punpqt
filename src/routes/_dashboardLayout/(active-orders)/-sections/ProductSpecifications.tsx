import { Card, CardContent, CardHeader, CardTitle } from "#/components/ui/card";

export default function ProductSpecifications({specifications}: {specifications: string[][]}) {
    return (
        <Card className="rounded-2xl border-black/5 bg-white py-5 shadow-sm">
            <CardHeader className="px-5">
                <CardTitle className="text-base font-semibold">
                    Product Specifications
                </CardTitle>
            </CardHeader>
            <CardContent className="px-5">
                <dl className="grid grid-cols-[auto_1fr] gap-x-8 gap-y-3 text-xs sm:text-sm">
                    {specifications.map(([label, value]) => (
                        <div key={label} className="contents">
                            <dt className="text-muted-foreground">{label}</dt>
                            <dd className="font-semibold">{value}</dd>
                        </div>
                    ))}
                </dl>
            </CardContent>
        </Card>
    )
}