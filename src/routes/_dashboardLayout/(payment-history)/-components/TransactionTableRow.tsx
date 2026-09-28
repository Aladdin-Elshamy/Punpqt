import TransactionTypeBadge from './TransactionTypeBadge'
import TransactionStatusBadge from './TransactionStatusBadge'
import type { Transaction } from '../-data/transactions'

type TransactionTableRowProps = {
  transaction: Transaction
}

export default function TransactionTableRow({
  transaction,
}: TransactionTableRowProps) {
  function getAmountColor(type: Transaction['type']) {
    switch (type) {
      case 'payment':
        return 'text-rose-600'
      case 'top-up':
        return 'text-[#0d7377]'
      case 'escrow':
        return 'text-amber-500'
      default:
        return 'text-foreground'
    }
  }

  return (
    <tr className="border-b border-gray-100 transition-colors hover:bg-gray-50/60 last:border-b-0">
      {/* 1. Transaction ID */}
      <td className="px-5 py-4 font-bold text-xs sm:text-sm text-foreground whitespace-nowrap">
        {transaction.id}
      </td>

      {/* 2. Type */}
      <td className="px-5 py-4 whitespace-nowrap">
        <TransactionTypeBadge type={transaction.type} />
      </td>

      {/* 3. Description */}
      <td className="px-5 py-4">
        <p className="text-xs sm:text-sm text-foreground">
          {transaction.title}
        </p>
        <p className="text-xs text-muted-foreground mt-0.5">
          {transaction.subtitle}
          {transaction.orderId && (
            <>
              {' '}
              <span className="font-semibold text-[#0d7377] hover:underline cursor-pointer">
                {transaction.orderId}
              </span>
            </>
          )}
        </p>
      </td>

      {/* 4. Date & Time */}
      <td className="px-5 py-4 whitespace-nowrap">
        <p className="text-xs sm:text-sm text-foreground">
          {transaction.date}
        </p>
        <p className="text-xs text-muted-foreground mt-0.5">
          {transaction.time}
        </p>
      </td>

      {/* 5. Method */}
      <td className="px-5 py-4 text-xs sm:text-sm text-muted-foreground whitespace-nowrap">
        {transaction.method}
      </td>

      {/* 6. Amount */}
      <td
        className={`px-5 py-4 font-bold text-xs sm:text-sm whitespace-nowrap ${getAmountColor(
          transaction.type,
        )}`}
      >
        {transaction.amount}
      </td>

      {/* 7. Status */}
      <td className="px-5 py-4 whitespace-nowrap">
        <TransactionStatusBadge status={transaction.status} />
      </td>
    </tr>
  )
}
