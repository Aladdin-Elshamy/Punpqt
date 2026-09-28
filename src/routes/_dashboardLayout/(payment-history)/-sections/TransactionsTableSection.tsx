import { useState } from 'react'
import { Card } from '@/components/ui/card'
import TransactionTableRow from '../-components/TransactionTableRow'
import TransactionsPagination from '../-components/TransactionsPagination'
import { initialTransactions } from '../-data/transactions'
import type { Transaction } from '../-data/transactions'

type TransactionsTableSectionProps = {
  transactions?: Array<Transaction>
}

export default function TransactionsTableSection({
  transactions = initialTransactions,
}: TransactionsTableSectionProps) {
  const [currentPage, setCurrentPage] = useState(1)

  return (
    <Card className="rounded-2xl border border-black/6 ring-0 bg-white shadow-none overflow-hidden gap-0 py-0">
      <div className="overflow-x-auto">
        <table className="w-full min-w-190 border-collapse text-start">
          <thead>
            <tr className="border-b border-gray-100 text-xs font-medium text-muted-foreground bg-[#f4f4f6] [&>th]:text-start">
              <th className="px-5 py-4 font-medium">Transaction</th>
              <th className="px-5 py-4 font-medium">Type</th>
              <th className="px-5 py-4 font-medium">Description</th>
              <th className="px-5 py-4 font-medium">Date</th>
              <th className="px-5 py-4 font-medium">Method</th>
              <th className="px-5 py-4 font-medium">Amount</th>
              <th className="px-5 py-4 font-medium">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {transactions.map((transaction) => (
              <TransactionTableRow
                key={transaction.id}
                transaction={transaction}
              />
            ))}
          </tbody>
        </table>
      </div>

      <TransactionsPagination
        currentPage={currentPage}
        totalPages={2}
        startCount={1}
        endCount={transactions.length}
        totalCount={12}
        onPageChange={setCurrentPage}
      />
    </Card>
  )
}
