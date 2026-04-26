import { LeaderStats } from "@/components/app/leader-stats"
import { GroupManagement } from "@/components/app/group-management"
import { CommissionTracker } from "@/components/app/commission-tracker"
import { CreateGroupForm } from "@/components/app/create-group-form"
import { LeaderApplication } from "@/components/app/leader-application"
import { Crown } from "lucide-react"

export default function LeaderPage() {
  // In a real app, this would be handled by the layout with proper auth checks
  const mockUser = { leader: true, completedGoals: 3 } // Mock leader user

  if (!mockUser.leader) {
    return <LeaderApplication />
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Crown className="h-6 w-6 text-primary" />
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-balance">Leader Dashboard</h1>
          <p className="text-muted-foreground">Manage your groups and track commission earnings</p>
        </div>
      </div>

      <LeaderStats />

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <GroupManagement />
        </div>
        <div className="space-y-6">
          <CreateGroupForm />
          <CommissionTracker />
        </div>
      </div>
    </div>
  )
}
