"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useAuth } from "@/lib/auth-context"
import { Crown, CheckCircle, Clock, Trophy, Target } from "lucide-react"

export function LeaderApplication() {
  const { user } = useAuth()
  const [applicationSubmitted, setApplicationSubmitted] = useState(false)

  const completedGoals = user?.completedGoals || 0
  const requiredGoals = 2
  const progress = (completedGoals / requiredGoals) * 100
  const isEligible = completedGoals >= requiredGoals

  const handleApply = () => {
    setApplicationSubmitted(true)
    // TODO: Submit application to Firebase
  }

  if (applicationSubmitted) {
    return (
      <div className="max-w-2xl mx-auto space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-yellow-600" />
              Application Submitted
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Alert>
              <CheckCircle className="h-4 w-4" />
              <AlertDescription>
                Your leader application has been submitted successfully! We'll review your application and notify you
                within 2-3 business days.
              </AlertDescription>
            </Alert>

            <div className="space-y-2">
              <h4 className="font-medium">What happens next?</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Our team will review your completed goals and payment history</li>
                <li>• We'll verify your college status and account standing</li>
                <li>• You'll receive an email notification with the decision</li>
                <li>• If approved, leader features will be unlocked immediately</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Crown className="h-5 w-5 text-primary" />
            Become a Leader
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <Crown className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Unlock Leader Privileges</h3>
              <p className="text-muted-foreground">
                Create and manage groups, earn commissions, and help fellow students achieve their goals.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-1">
                  <Trophy className="h-3 w-3" />
                  Goals Completed
                </span>
                <span>
                  {completedGoals}/{requiredGoals}
                </span>
              </div>
              <Progress value={progress} className="h-2" />
              {!isEligible && (
                <p className="text-xs text-muted-foreground">
                  Complete {requiredGoals - completedGoals} more goal{requiredGoals - completedGoals > 1 ? "s" : ""} to
                  become eligible
                </p>
              )}
            </div>

            {isEligible ? (
              <Alert>
                <CheckCircle className="h-4 w-4" />
                <AlertDescription>
                  Congratulations! You're eligible to become a leader. Apply now to unlock leader features.
                </AlertDescription>
              </Alert>
            ) : (
              <Alert>
                <Target className="h-4 w-4" />
                <AlertDescription>
                  Keep saving and completing goals! You need to successfully complete at least 2 goals to become a
                  leader.
                </AlertDescription>
              </Alert>
            )}
          </div>

          <div className="space-y-4">
            <h4 className="font-medium">Leader Benefits:</h4>
            <div className="grid gap-3">
              <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <Crown className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-sm">Create & Manage Groups</p>
                  <p className="text-xs text-muted-foreground">Start your own savings groups</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                  <span className="text-green-600 dark:text-green-400 text-xs font-bold">70%</span>
                </div>
                <div>
                  <p className="font-medium text-sm">Commission Earnings</p>
                  <p className="text-xs text-muted-foreground">Earn 70% of group commissions</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                  <Target className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="font-medium text-sm">Priority Support</p>
                  <p className="text-xs text-muted-foreground">Dedicated leader support channel</p>
                </div>
              </div>
            </div>
          </div>

          <Button onClick={handleApply} disabled={!isEligible} className="w-full" size="lg">
            {isEligible ? "Apply to Become Leader" : "Complete More Goals First"}
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
