"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Download, Loader2 } from "lucide-react"

export function ExportHistory() {
  const [exporting, setExporting] = useState(false)

  const handleExport = async () => {
    setExporting(true)

    // Mock export process
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Generate CSV data
    const csvData = [
      ["Date", "Type", "Description", "Amount", "Status"],
      ["2024-01-15", "Payment", "Monthly contribution - MacBook Pro M3", "₹6,000", "Completed"],
      ["2024-01-14", "Bid", "Bid placed - iPhone 15 Pro", "₹4,200", "Pending"],
      ["2024-01-10", "Win", "Bid won - Engineering Books Set", "₹15,000", "Completed"],
      // Add more data...
    ]

    const csvContent = csvData.map((row) => row.join(",")).join("\n")
    const blob = new Blob([csvContent], { type: "text/csv" })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `uni-chit-history-${new Date().toISOString().split("T")[0]}.csv`
    a.click()
    window.URL.revokeObjectURL(url)

    setExporting(false)
  }

  return (
    <Button onClick={handleExport} disabled={exporting} variant="outline">
      {exporting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Download className="mr-2 h-4 w-4" />}
      {exporting ? "Exporting..." : "Export CSV"}
    </Button>
  )
}
