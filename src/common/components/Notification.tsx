import { Bell } from "lucide-react";

export default function Notification() {
    return (
        <div className="relative w-fit">
            <Bell className="size-5 text-muted-foreground" />
            <span className="absolute -top-1 -end-1 size-2 bg-primary rounded-full" />
        </div>
    )
}