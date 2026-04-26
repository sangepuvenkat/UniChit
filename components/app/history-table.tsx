import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DollarSign, Trophy, TrendingUp, RefreshCw, Eye, ChevronLeft, ChevronRight } from "lucide-react"

const transactions = [
  {
    id: "1",
    type: "payment",
    description: "Monthly contribution - MacBook Pro M3",
    amount: "₹6,000",
    status: "completed",
    date: "2024-01-15",
    planId: "plan-1",
    icon: DollarSign,
  },
  {
    id: "2",
    type: "bid",
    description: "Bid placed - iPhone 15 Pro",
    amount: "₹4,200",
    status: "pending",
    date: "2024-01-14",
    planId: "plan-2",
    icon: TrendingUp,
  },
  {
    id: "3",
    type: "win",
    description: "Bid won - Engineering Books Set",
    amount: "₹15,000",
    status: "completed",
    date: "2024-01-10",
    planId: "plan-3",
    icon: Trophy,
  },
  {
    id: "4",
    type: "payment",
    description: "Monthly contribution - iPhone 15 Pro",
    amount: "₹4,000",
    status: "completed",
    date: "2024-01-05",
    planId: "plan-2",
    icon: DollarSign,
  },
  {
    id: "5",
    type: "payment",
    description: "Monthly contribution - MacBook Pro M3",
    amount: "₹6,000",
    status: "completed",
    date: "2023-12-15",
    planId: "plan-1",
    icon: DollarSign,
  },
  {
    id: "6",
    type: "bid",
    description: "Bid placed - MacBook Pro M3",
    amount: "₹5,800",
    status: "failed",
    date: "2023-12-10",
    planId: "plan-1",
    icon: TrendingUp,
  },
  {
    id: "7",
    type: "refund",
    description: "Refund - Cancelled plan",
    amount: "₹2,000",
    status: "completed",
    date: "2023-12-05",
    planId: "plan-4",
    icon: RefreshCw,
  },
]

export function HistoryTable() {
  const getStatusVariant = (status: string) => {
    switch (status) {
      case "completed":
        return "default"
      case "pending":
        return "secondary"
      case "failed":
        return "destructive"
      default:
        return "outline"
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "payment":
        return "text-blue-600"
      case "bid":
        return "text-purple-600"
      case "win":
        return "text-yellow-600"
      case "refund":
        return "text-green-600"
      default:
        return "text-gray-600"
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Transaction History</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Type</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="w-[100px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <transaction.icon className={`h-4 w-4 ${getTypeColor(transaction.type)}`} />
                      <span className="capitalize">{transaction.type}</span>
                    </div>
                  </TableCell>
                  <TableCell className="font-medium">{transaction.description}</TableCell>
                  <TableCell>{transaction.amount}</TableCell>
                  <TableCell>
                    <Badge variant={getStatusVariant(transaction.status)}>{transaction.status}</Badge>
                  </TableCell>
                  <TableCell>{new Date(transaction.date).toLocaleDateString()}</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">
                      <Eye className="h-3 w-3" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-4">
          <p className="text-sm text-muted-foreground">Showing 1-7 of 7 transactions</p>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" disabled>
              <ChevronLeft className="h-4 w-4" />
              Previous
            </Button>
            <Button variant="outline" size="sm" disabled>
              Next
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
