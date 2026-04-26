import { HistoryFilter } from "@/components/app/history-filter"
import { HistoryTable } from "@/components/app/history-table"
import { HistoryStats } from "@/components/app/history-stats"
import { ExportHistory } from "@/components/app/export-history"

export default function HistoryPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-balance">Transaction History</h1>
          <p className="text-muted-foreground">View all your payments, bids, and completed goals</p>
        </div>
        <ExportHistory />
      </div>

      <HistoryStats />
      <HistoryFilter />
      <HistoryTable />
    </div>
  )
}
