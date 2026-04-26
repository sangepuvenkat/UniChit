import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, DollarSign, Trophy } from "lucide-react"

const activities = [
  {
    id: "1",
    type: "payment",
    title: "Monthly contribution",
    description: "MacBook Pro M3 plan",
    amount: "₹6,000",
    time: "2 hours ago",
    status: "completed",
    icon: DollarSign,
  },
  {
    id: "2",
    type: "bid",
    title: "Bid placed",
    description: "iPhone 15 Pro plan",
    amount: "₹4,200",
    time: "1 day ago",
    status: "pending",
    icon: Clock,
  },
  {
    id: "3",
    type: "win",
    title: "Bid won!",
    description: "Engineering Books Set",
    amount: "₹15,000",
    time: "3 days ago",
    status: "completed",
    icon: Trophy,
  },
  {
    id: "4",
    type: "payment",
    title: "Monthly contribution",
    description: "iPhone 15 Pro plan",
    amount: "₹4,000",
    time: "1 week ago",
    status: "completed",
    icon: CheckCircle,
  },
]

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
              <activity.icon className="h-4 w-4 text-primary" />
            </div>
            <div className="flex-1 space-y-1">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">{activity.title}</p>
                <Badge variant={activity.status === "completed" ? "default" : "secondary"} className="text-xs">
                  {activity.status}
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground">{activity.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-primary">{activity.amount}</span>
                <span className="text-xs text-muted-foreground">{activity.time}</span>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
