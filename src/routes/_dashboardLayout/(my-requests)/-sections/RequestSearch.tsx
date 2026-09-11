import { Button } from '#/components/ui/button'
import { Input } from '#/components/ui/input'
import { cn } from '#/lib/utils'
import { Search } from 'lucide-react'
import { useState } from 'react'
import RequestSearchSelect from '../-components/RequestSearchSelect'



export default function RequestSearch({ hideFilters, filters }: { hideFilters?: boolean, filters: string[] }) {
  const [selectedFilter, setSelectedFilter] = useState(0)
  return (
    <section className="rounded-2xl relative z-10 bg-primary/33 p-3 font-atyp sm:p-4">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-stretch">
        <div className="relative flex-1 max-w-xl">
          <Search
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 inset-s-3 size-4 -translate-y-1/2 text-muted-foreground"
          />
          <Input
            aria-label="Search requests"
            placeholder="Search requests by title, ID, or category..."
            className="h-10 border-0 bg-background ps-9 shadow-none rounded-xl"
          />
          <Button className="h-10 px-2.5 text-xs absolute top-1/2 inset-e-0 -translate-y-1/2 active:-translate-y-[calc(50%-1px)]! rounded-xl ">Search</Button>
        </div>
        <div className="grid grid-cols-2 gap-3 lg:ml-auto lg:flex">
          <RequestSearchSelect type="sort" />
          {!hideFilters && <RequestSearchSelect type="filter" />}
        </div>
      </div>
      <div className="mt-5 flex flex-wrap gap-3">
        {filters.map((filter, index) => (
          <Button
            key={filter}
            variant={'secondary'}
            className={cn("h-7 rounded-full px-3 text-xs font-medium", index === selectedFilter ? "text-primary bg-[#E8F4F4] border-[#E8F4F4]" : "text-muted-foreground")}
            onClick={() => setSelectedFilter(index)}
          >
            {filter}
          </Button>
        ))}
      </div>
    </section>
  )
}
