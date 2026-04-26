import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { TrendingUp, Target, DollarSign, Users } from "lucide-react"

const stats = [
  {
    title: "Total Savings",
    value: "₹12,450",
    change: "+₹2,100 this month",
    icon: DollarSign,
    progress: 65,
  },
  {
    title: "Active Goals",
    value: "3",
    change: "2 goals completed",
    icon: Target,
    progress: 75,
  },
  {
    title: "Bids Placed",
    value: "8",
    change: "2 bids remaining",
    icon: TrendingUp,
    progress: 80,
  },
  {
    title: "Group Members",
    value: "24",
    change: "In 3 active groups",
    icon: Users,
    progress: 90,
  },
]

export function DashboardStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground mb-2">{stat.change}</p>
            <Progress value={stat.progress} className="h-1" />
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
