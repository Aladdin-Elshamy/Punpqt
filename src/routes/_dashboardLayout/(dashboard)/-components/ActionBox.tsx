import { Badge } from "#/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "#/components/ui/card"
import type { ReactNode } from "react"

export default function ActionBox({ title, value, description, action }: { title: string, value: string, description: string, action: ReactNode }) {
    return (
        <Card className="relative z-10 py-8 px-6 font-atyp">
            <CardHeader className="flex flex-row justify-between items-center">
                <CardTitle className="font-bold text-xl">{title}</CardTitle>
                <Badge>{value}</Badge>
            </CardHeader>
            <CardContent className="h-full">
                <p className="text-muted-foreground font-semibold">{description}</p>
                {action}
            </CardContent>
        </Card>
    )
}