import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign, TrendingUp, Trophy, Calendar } from "lucide-react"

const stats = [
  {
    title: "Total Paid",
    value: "₹48,500",
    change: "+₹6,000 this month",
    icon: DollarSign,
    color: "text-green-600",
  },
  {
    title: "Successful Bids",
    value: "2",
    change: "Last win: 15 days ago",
    icon: Trophy,
    color: "text-yellow-600",
  },
  {
    title: "Total Bids",
    value: "12",
    change: "8 active bids",
    icon: TrendingUp,
    color: "text-blue-600",
  },
  {
    title: "Member Since",
    value: "Dec 2023",
    change: "2 months active",
    icon: Calendar,
    color: "text-purple-600",
  },
]

export function HistoryStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <stat.icon className={`h-4 w-4 ${stat.color}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground">{stat.change}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
