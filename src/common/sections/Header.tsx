import { Button } from "#/components/ui/button";
import { Plus } from "lucide-react";
import type { ReactNode } from "react";

export default function Header({
  title,
  description,
  newRequest,
  qoutesState
}: {
  title: string
  description: string
  newRequest?: boolean
  qoutesState?: ReactNode
}) {
  return (
    <div className="font-atyp flex items-center justify-between gap-4">
      <div>
        <div className="flex items-center flex-wrap gap-3">
          <p className="text-3xl font-bold tracking-tight! trim">{title}</p>
          {qoutesState}
        </div>
        <p className="text-muted-foreground text-sm font-medium mt-4">{description}</p>
      </div>
      {newRequest && <Button className="mt-4 h-12 px-6"><Plus /> New Request</Button>}
    </div>
  )
}
