import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, DollarSign, TrendingUp, Crown } from "lucide-react"

const stats = [
  {
    title: "Total Groups",
    value: "3",
    change: "+1 this month",
    icon: Crown,
    color: "text-primary",
  },
  {
    title: "Group Members",
    value: "45",
    change: "+8 new members",
    icon: Users,
    color: "text-blue-600",
  },
  {
    title: "Commission Earned",
    value: "₹12,450",
    change: "+₹2,100 this month",
    icon: DollarSign,
    color: "text-green-600",
  },
  {
    title: "Success Rate",
    value: "94%",
    change: "Above average",
    icon: TrendingUp,
    color: "text-purple-600",
  },
]

export function LeaderStats() {
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
