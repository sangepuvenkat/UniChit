import { DashboardStats } from "@/components/app/dashboard-stats"
import { ActivePlans } from "@/components/app/active-plans"
import { RecentActivity } from "@/components/app/recent-activity"
import { QuickActions } from "@/components/app/quick-actions"
import { CollegeVerificationBanner } from "@/components/app/college-verification-banner"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-balance">Welcome back!</h1>
        <p className="text-muted-foreground">Here's what's happening with your savings goals.</p>
      </div>

      <CollegeVerificationBanner />

      <DashboardStats />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <ActivePlans />
        </div>
        <div className="space-y-6">
          <QuickActions />
          <RecentActivity />
        </div>
      </div>
    </div>
  )
}
