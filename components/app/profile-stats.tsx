"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { useAuth } from "@/lib/auth-context"
import { Trophy, Target, DollarSign, Calendar, Crown } from "lucide-react"

export function ProfileStats() {
  const { user } = useAuth()

  const stats = [
    {
      label: "Goals Completed",
      value: user?.completedGoals || 0,
      icon: Trophy,
      color: "text-yellow-600",
    },
    {
      label: "Active Plans",
      value: 3,
      icon: Target,
      color: "text-blue-600",
    },
    {
      label: "Total Saved",
      value: "₹45,000",
      icon: DollarSign,
      color: "text-green-600",
    },
    {
      label: "Member Since",
      value: "Dec 2023",
      icon: Calendar,
      color: "text-purple-600",
    },
  ]

  const leaderProgress = ((user?.completedGoals || 0) / 2) * 100

  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Stats</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-3 bg-muted rounded-lg">
              <stat.icon className={`h-4 w-4 mx-auto mb-1 ${stat.color}`} />
              <div className="font-bold">{stat.value}</div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Leader Status */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Leader Status</span>
            {user?.leader ? (
              <Badge variant="default" className="flex items-center gap-1">
                <Crown className="h-3 w-3" />
                Leader
              </Badge>
            ) : (
              <Badge variant="outline">Student</Badge>
            )}
          </div>

          {!user?.leader && (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Progress to Leader</span>
                <span>{user?.completedGoals || 0}/2 goals</span>
              </div>
              <Progress value={leaderProgress} className="h-2" />
              <p className="text-xs text-muted-foreground">
                Complete 2 goals to unlock leader privileges and earn commissions
              </p>
            </div>
          )}
        </div>

        {/* Verification Status */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">College Verification</span>
            <Badge variant={user?.collegeVerified ? "default" : "secondary"}>
              {user?.collegeVerified ? "Verified" : "Pending"}
            </Badge>
          </div>
          {!user?.collegeVerified && (
            <p className="text-xs text-muted-foreground">Upload your college ID to get verified</p>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
