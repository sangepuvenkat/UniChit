import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Laptop, Users, Calendar, IndianRupee, Clock, Target } from "lucide-react"

interface PlanDetailsProps {
  planId: string
}

export function PlanDetails({ planId }: PlanDetailsProps) {
  // Mock data - in real app, fetch from Firebase based on planId
  const plan = {
    id: planId,
    title: "iPhone 15 Pro",
    description: "Latest iPhone with advanced camera system and titanium design",
    goalType: "phone",
    amount: 80000,
    monthlyContribution: 4000,
    durationMonths: 20,
    totalMembers: 20,
    currentMembers: 15,
    currentRound: 5,
    roundsCompleted: 4,
    imageUrl: "/iphone-15-pro-hands.png",
    status: "bidding",
    roundEndDate: "2024-01-20T23:59:59",
    nextPaymentDate: "2024-01-25",
  }

  const memberProgress = (plan.currentMembers / plan.totalMembers) * 100
  const roundProgress = (plan.roundsCompleted / plan.durationMonths) * 100
  const timeRemaining = new Date(plan.roundEndDate).getTime() - new Date().getTime()
  const hoursRemaining = Math.floor(timeRemaining / (1000 * 60 * 60))

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Laptop className="h-5 w-5 text-primary" />
            {plan.title}
          </CardTitle>
          <Badge variant="default">Round {plan.currentRound}</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="aspect-video relative overflow-hidden rounded-lg">
          <img src={plan.imageUrl || "/placeholder.svg"} alt={plan.title} className="w-full h-full object-cover" />
        </div>

        <p className="text-muted-foreground text-pretty">{plan.description}</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-3 bg-muted rounded-lg">
            <IndianRupee className="h-4 w-4 mx-auto mb-1 text-primary" />
            <div className="text-lg font-bold">₹{plan.amount.toLocaleString()}</div>
            <div className="text-xs text-muted-foreground">Goal Amount</div>
          </div>

          <div className="text-center p-3 bg-muted rounded-lg">
            <Calendar className="h-4 w-4 mx-auto mb-1 text-primary" />
            <div className="text-lg font-bold">{plan.durationMonths}</div>
            <div className="text-xs text-muted-foreground">Months</div>
          </div>

          <div className="text-center p-3 bg-muted rounded-lg">
            <Users className="h-4 w-4 mx-auto mb-1 text-primary" />
            <div className="text-lg font-bold">
              {plan.currentMembers}/{plan.totalMembers}
            </div>
            <div className="text-xs text-muted-foreground">Members</div>
          </div>

          <div className="text-center p-3 bg-muted rounded-lg">
            <Clock className="h-4 w-4 mx-auto mb-1 text-primary" />
            <div className="text-lg font-bold">{hoursRemaining}h</div>
            <div className="text-xs text-muted-foreground">Remaining</div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="flex items-center gap-1">
                <Target className="h-3 w-3" />
                Plan Progress
              </span>
              <span>
                {plan.roundsCompleted}/{plan.durationMonths} rounds
              </span>
            </div>
            <Progress value={roundProgress} className="h-2" />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="flex items-center gap-1">
                <Users className="h-3 w-3" />
                Member Capacity
              </span>
              <span>
                {plan.currentMembers}/{plan.totalMembers} joined
              </span>
            </div>
            <Progress value={memberProgress} className="h-2" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-muted rounded-lg">
          <div>
            <div className="text-sm text-muted-foreground">Monthly Contribution</div>
            <div className="text-lg font-bold">₹{plan.monthlyContribution.toLocaleString()}</div>
          </div>
          <div>
            <div className="text-sm text-muted-foreground">Next Payment Due</div>
            <div className="text-lg font-bold">{new Date(plan.nextPaymentDate).toLocaleDateString()}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
