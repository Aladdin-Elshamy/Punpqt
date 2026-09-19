import { FileText } from 'lucide-react'
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface DesignFileRowProps {
  name: string
  metadata?: ReactNode
  actions?: ReactNode
  variant?: 'compact' | 'detailed'
}

export default function DesignFileRow({
  name,
  metadata,
  actions,
  variant = 'compact',
}: DesignFileRowProps) {
  const compact = variant === 'compact'
  return (
    <li
      className={cn(
        'flex min-w-0 rounded-xl',
        compact
          ? 'items-center gap-3 border bg-[#F4F4F6] p-3 font-semibold'
          : 'flex-col gap-4 bg-[#F5F5F7] px-5 py-4 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:px-6',
      )}
    >
      <div
        className={cn('flex min-w-0 items-center gap-3', compact && 'flex-1')}
      >
        <FileText
          className="size-6 shrink-0 text-primary"
          strokeWidth={compact ? 2 : 1.3}
          aria-hidden="true"
        />
        <div className={cn('min-w-0', compact && 'flex-1')}>
          <p
            className={
              compact
                ? 'truncate text-sm'
                : 'text-xs font-semibold wrap-anywhere'
            }
            title={name}
          >
            {name}
          </p>
          {!compact && metadata != null && (
            <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-muted-foreground">
              {metadata}
            </div>
          )}
        </div>
      </div>
      {compact && metadata != null && (
        <div className="shrink-0 text-xs text-muted-foreground">{metadata}</div>
      )}
      {actions != null && (
        <div className="flex shrink-0 flex-wrap gap-2">{actions}</div>
      )}
    </li>
  )
}
