import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Laptop, Smartphone, BookOpen, Calendar } from "lucide-react"
import Link from "next/link"

const plans = [
  {
    id: "1",
    title: "MacBook Pro M3",
    goalType: "laptop",
    amount: 120000,
    saved: 78000,
    monthlyContribution: 6000,
    nextBidDate: "2024-01-15",
    members: 20,
    status: "active",
    icon: Laptop,
  },
  {
    id: "2",
    title: "iPhone 15 Pro",
    goalType: "phone",
    amount: 80000,
    saved: 32000,
    monthlyContribution: 4000,
    nextBidDate: "2024-01-20",
    members: 20,
    status: "bidding",
    icon: Smartphone,
  },
  {
    id: "3",
    title: "Engineering Books Set",
    goalType: "books",
    amount: 15000,
    saved: 12000,
    monthlyContribution: 1500,
    nextBidDate: "2024-01-25",
    members: 10,
    status: "active",
    icon: BookOpen,
  },
]

export function ActivePlans() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Active Plans</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {plans.map((plan) => {
          const progress = (plan.saved / plan.amount) * 100
          const Icon = plan.icon

          return (
            <div key={plan.id} className="flex items-center space-x-4 p-4 border rounded-lg">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Icon className="h-5 w-5 text-primary" />
              </div>

              <div className="flex-1 space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">{plan.title}</h3>
                  <Badge variant={plan.status === "bidding" ? "default" : "secondary"}>
                    {plan.status === "bidding" ? "Bidding Open" : "Active"}
                  </Badge>
                </div>

                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>
                    ₹{plan.saved.toLocaleString()} / ₹{plan.amount.toLocaleString()}
                  </span>
                  <span>{plan.members} members</span>
                </div>

                <Progress value={progress} className="h-2" />

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    Next bid: {new Date(plan.nextBidDate).toLocaleDateString()}
                  </div>
                  <Button size="sm" variant={plan.status === "bidding" ? "default" : "outline"} asChild>
                    <Link href={`/app/bid/${plan.id}`}>{plan.status === "bidding" ? "Place Bid" : "View Details"}</Link>
                  </Button>
                </div>
              </div>
            </div>
          )
        })}

        <Button variant="outline" className="w-full bg-transparent" asChild>
          <Link href="/app/plans">View All Plans</Link>
        </Button>
      </CardContent>
    </Card>
  )
}
