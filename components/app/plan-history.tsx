import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { History, Trophy, DollarSign, Users } from "lucide-react"

interface PlanHistoryProps {
  planId: string
}

export function PlanHistory({ planId }: PlanHistoryProps) {
  // Mock data - in real app, fetch from Firebase
  const history = [
    {
      id: "1",
      type: "round_completed",
      title: "Round 4 Completed",
      description: "Bob Smith won with bid of ₹3,750",
      date: "2024-01-10",
      icon: Trophy,
    },
    {
      id: "2",
      type: "payment",
      title: "Monthly Contributions",
      description: "All members paid ₹4,000",
      date: "2024-01-05",
      icon: DollarSign,
    },
    {
      id: "3",
      type: "member_joined",
      title: "New Member",
      description: "Eva Brown joined the plan",
      date: "2024-01-03",
      icon: Users,
    },
    {
      id: "4",
      type: "round_completed",
      title: "Round 3 Completed",
      description: "Carol Davis won with bid of ₹3,600",
      date: "2023-12-15",
      icon: Trophy,
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <History className="h-4 w-4" />
          Recent Activity
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {history.map((item) => (
          <div key={item.id} className="flex items-start gap-3">
            <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
              <item.icon className="h-4 w-4 text-primary" />
            </div>
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium">{item.title}</p>
              <p className="text-xs text-muted-foreground">{item.description}</p>
              <p className="text-xs text-muted-foreground">{new Date(item.date).toLocaleDateString()}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
