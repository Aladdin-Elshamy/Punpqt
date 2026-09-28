import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

type TransactionsPaginationProps = {
  currentPage?: number
  totalPages?: number
  startCount?: number
  endCount?: number
  totalCount?: number
  onPageChange?: (page: number) => void
}

export default function TransactionsPagination({
  currentPage = 1,
  totalPages = 2,
  startCount = 1,
  endCount = 8,
  totalCount = 12,
  onPageChange,
}: TransactionsPaginationProps) {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-5 py-4 border-t border-gray-100 bg-white">
      <p className="text-xs text-muted-foreground">
        Showing{' '}
        <span className="font-bold text-foreground">
          {startCount}-{endCount}
        </span>{' '}
        of <span className="font-bold text-foreground">{totalCount}</span>{' '}
        transactions
      </p>

      <div className="flex items-center gap-1.5">
        {/* Previous */}
        <Button
          type="button"
          variant="outline"
          size="icon"
          disabled={currentPage <= 1}
          className="size-8 rounded-lg border-gray-200 text-muted-foreground hover:text-foreground disabled:opacity-40"
          onClick={() => onPageChange?.(currentPage - 1)}
          aria-label="Previous page"
        >
          <ChevronLeft className="size-4" />
        </Button>

        {/* Page 1 */}
        <Button
          type="button"
          size="icon"
          className={`size-8 rounded-lg text-xs font-semibold! ${
            currentPage === 1
              ? 'bg-[#0d7377] text-white hover:bg-[#0b5f63]'
              : 'text-muted-foreground hover:bg-gray-100 bg-white'
          }`}
          onClick={() => onPageChange?.(1)}
        >
          1
        </Button>

        {/* Page 2 */}
        {totalPages >= 2 && (
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className={`size-8 rounded-lg text-xs font-semibold! ${
              currentPage === 2
                ? 'bg-[#0d7377] text-white hover:text-white hover:bg-[#0b5f63]'
                : 'text-muted-foreground hover:bg-gray-100 bg-white'
            }`}
            onClick={() => onPageChange?.(2)}
          >
            2
          </Button>
        )}

        {/* Next */}
        <Button
          type="button"
          variant="outline"
          size="icon"
          disabled={currentPage >= totalPages}
          className="size-8 rounded-lg border-gray-200 text-muted-foreground hover:text-foreground disabled:opacity-40"
          onClick={() => onPageChange?.(currentPage + 1)}
          aria-label="Next page"
        >
          <ChevronRight className="size-4" />
        </Button>
      </div>
    </div>
  )
}
