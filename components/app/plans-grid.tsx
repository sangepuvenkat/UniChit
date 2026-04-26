import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Laptop, Smartphone, BookOpen, Users, Calendar, IndianRupee } from "lucide-react"
import Link from "next/link"

const plans = [
  {
    id: "1",
    title: "MacBook Pro M3",
    description: "Latest MacBook Pro with M3 chip for programming and design work",
    goalType: "laptop",
    amount: 120000,
    monthlyContribution: 6000,
    durationMonths: 20,
    totalMembers: 20,
    currentMembers: 18,
    imageUrl: "/macbook-pro-m3.jpg",
    status: "active",
    nextBidDate: "2024-01-15",
    icon: Laptop,
  },
  {
    id: "2",
    title: "iPhone 15 Pro",
    description: "Latest iPhone with advanced camera system and titanium design",
    goalType: "phone",
    amount: 80000,
    monthlyContribution: 4000,
    durationMonths: 20,
    totalMembers: 20,
    currentMembers: 15,
    imageUrl: "/iphone-15-pro-hands.png",
    status: "bidding",
    nextBidDate: "2024-01-20",
    icon: Smartphone,
  },
  {
    id: "3",
    title: "Engineering Textbooks",
    description: "Complete set of engineering textbooks for semester",
    goalType: "books",
    amount: 15000,
    monthlyContribution: 1500,
    durationMonths: 10,
    totalMembers: 10,
    currentMembers: 8,
    imageUrl: "/engineering-textbooks.jpg",
    status: "active",
    nextBidDate: "2024-01-25",
    icon: BookOpen,
  },
  {
    id: "4",
    title: "Gaming Laptop",
    description: "High-performance gaming laptop for gaming and development",
    goalType: "laptop",
    amount: 90000,
    monthlyContribution: 4500,
    durationMonths: 20,
    totalMembers: 20,
    currentMembers: 20,
    imageUrl: "/gaming-laptop.png",
    status: "full",
    nextBidDate: "2024-01-18",
    icon: Laptop,
  },
  {
    id: "5",
    title: "iPad Pro",
    description: "iPad Pro for digital art and note-taking",
    goalType: "other",
    amount: 60000,
    monthlyContribution: 3000,
    durationMonths: 20,
    totalMembers: 20,
    currentMembers: 12,
    imageUrl: "/ipad-pro.png",
    status: "active",
    nextBidDate: "2024-01-22",
    icon: Smartphone,
  },
  {
    id: "6",
    title: "Medical Books Set",
    description: "Essential medical textbooks for MBBS students",
    goalType: "books",
    amount: 25000,
    monthlyContribution: 2500,
    durationMonths: 10,
    totalMembers: 10,
    currentMembers: 6,
    imageUrl: "/medical-textbooks.jpg",
    status: "active",
    nextBidDate: "2024-01-28",
    icon: BookOpen,
  },
]

export function PlansGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {plans.map((plan) => {
        const memberProgress = (plan.currentMembers / plan.totalMembers) * 100
        const Icon = plan.icon

        return (
          <Card key={plan.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-video relative overflow-hidden">
              <img src={plan.imageUrl || "/placeholder.svg"} alt={plan.title} className="w-full h-full object-cover" />
              <div className="absolute top-2 right-2">
                <Badge
                  variant={plan.status === "bidding" ? "default" : plan.status === "full" ? "secondary" : "outline"}
                >
                  {plan.status === "bidding" ? "Bidding Open" : plan.status === "full" ? "Full" : "Active"}
                </Badge>
              </div>
            </div>

            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <Icon className="h-4 w-4 text-primary" />
                <h3 className="font-semibold text-lg">{plan.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground text-pretty">{plan.description}</p>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <IndianRupee className="h-3 w-3 text-muted-foreground" />
                  <span className="font-medium">₹{plan.amount.toLocaleString()}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3 text-muted-foreground" />
                  <span>{plan.durationMonths} months</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    Members
                  </span>
                  <span>
                    {plan.currentMembers}/{plan.totalMembers}
                  </span>
                </div>
                <Progress value={memberProgress} className="h-2" />
              </div>

              <div className="text-sm text-muted-foreground">Monthly: ₹{plan.monthlyContribution.toLocaleString()}</div>

              {plan.status !== "full" && (
                <div className="text-xs text-muted-foreground">
                  Next bid: {new Date(plan.nextBidDate).toLocaleDateString()}
                </div>
              )}

              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1 bg-transparent" asChild>
                  <Link href={`/app/plans/${plan.id}`}>View Details</Link>
                </Button>
                {plan.status === "bidding" ? (
                  <Button size="sm" className="flex-1" asChild>
                    <Link href={`/app/bid/${plan.id}`}>Place Bid</Link>
                  </Button>
                ) : plan.status === "active" ? (
                  <Button size="sm" className="flex-1" asChild>
                    <Link href={`/app/plans/${plan.id}/join`}>Join Plan</Link>
                  </Button>
                ) : (
                  <Button size="sm" disabled className="flex-1">
                    Full
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
