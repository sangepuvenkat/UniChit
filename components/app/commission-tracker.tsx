import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { DollarSign, TrendingUp, ArrowUpRight } from "lucide-react"

const commissions = [
  {
    id: "1",
    source: "Tech Enthusiasts Group",
    amount: 2100,
    date: "2024-01-15",
    status: "paid",
    type: "monthly",
  },
  {
    id: "2",
    source: "Medical Students Fund",
    amount: 1800,
    date: "2024-01-15",
    status: "paid",
    type: "monthly",
  },
  {
    id: "3",
    source: "Engineering Essentials",
    amount: 1200,
    date: "2024-01-10",
    status: "pending",
    type: "bonus",
  },
  {
    id: "4",
    source: "Tech Enthusiasts Group",
    amount: 2000,
    date: "2023-12-15",
    status: "paid",
    type: "monthly",
  },
]

export function CommissionTracker() {
  const totalEarned = commissions.filter((c) => c.status === "paid").reduce((sum, c) => sum + c.amount, 0)
  const pendingAmount = commissions.filter((c) => c.status === "pending").reduce((sum, c) => sum + c.amount, 0)
  const thisMonthEarned = commissions
    .filter((c) => c.status === "paid" && new Date(c.date).getMonth() === new Date().getMonth())
    .reduce((sum, c) => sum + c.amount, 0)

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <DollarSign className="h-4 w-4" />
          Commission Tracker
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Summary Stats */}
        <div className="grid grid-cols-2 gap-3">
          <div className="text-center p-3 bg-green-50 dark:bg-green-950 rounded-lg">
            <div className="text-lg font-bold text-green-600">₹{totalEarned.toLocaleString()}</div>
            <div className="text-xs text-green-600">Total Earned</div>
          </div>
          <div className="text-center p-3 bg-yellow-50 dark:bg-yellow-950 rounded-lg">
            <div className="text-lg font-bold text-yellow-600">₹{pendingAmount.toLocaleString()}</div>
            <div className="text-xs text-yellow-600">Pending</div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span>This Month Progress</span>
            <span className="flex items-center gap-1 text-green-600">
              <ArrowUpRight className="h-3 w-3" />₹{thisMonthEarned.toLocaleString()}
            </span>
          </div>
          <Progress value={(thisMonthEarned / 5000) * 100} className="h-2" />
          <p className="text-xs text-muted-foreground">Goal: ₹5,000/month</p>
        </div>

        {/* Recent Commissions */}
        <div className="space-y-3">
          <h4 className="font-medium text-sm">Recent Commissions</h4>
          {commissions.slice(0, 4).map((commission) => (
            <div key={commission.id} className="flex items-center justify-between p-2 bg-muted rounded-lg">
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{commission.source}</p>
                <div className="flex items-center gap-2">
                  <Badge variant={commission.status === "paid" ? "default" : "secondary"} className="text-xs">
                    {commission.status}
                  </Badge>
                  <span className="text-xs text-muted-foreground capitalize">{commission.type}</span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium">₹{commission.amount.toLocaleString()}</p>
                <p className="text-xs text-muted-foreground">{new Date(commission.date).toLocaleDateString()}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Commission Split Info */}
        <div className="p-3 bg-muted rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Commission Split</span>
            <TrendingUp className="h-4 w-4 text-primary" />
          </div>
          <div className="space-y-1">
            <div className="flex justify-between text-sm">
              <span>Your share:</span>
              <span className="font-medium">70%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Platform fee:</span>
              <span>30%</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
