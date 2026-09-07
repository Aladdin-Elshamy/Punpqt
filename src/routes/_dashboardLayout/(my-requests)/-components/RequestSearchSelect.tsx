import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function RequestSearchSelect({type = "sort"}) {
  return (
    <Select defaultValue={type === "sort" ? "popular" : "today"}>
            <SelectTrigger
              aria-label={type === "sort" ? "Sort requests" : "Filter requests by date"}
              className="data-[size=default]:h-full w-full border-0 bg-background text-sm font-medium lg:w-36"
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent className={"*:text-xs!"}>
              {type === "sort" ? (
                <>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="recent">Most Recent</SelectItem>
                  <SelectItem value="oldest">Oldest First</SelectItem>
                </>
              ) : (
                <>
                  <SelectItem value="today">Today</SelectItem>
                  <SelectItem value="week">This week</SelectItem>
                  <SelectItem value="month">This month</SelectItem>
                </>
              )}
            </SelectContent>
          </Select>
  )
}