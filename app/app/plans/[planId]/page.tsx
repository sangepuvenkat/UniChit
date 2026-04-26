import { PlanDetails } from "@/components/app/plan-details"
import { PlanMembers } from "@/components/app/plan-members"
import { PlanHistory } from "@/components/app/plan-history"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

interface PlanDetailPageProps {
  params: {
    planId: string
  }
}

export default function PlanDetailPage({ params }: PlanDetailPageProps) {
  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/app/plans" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Plans
          </Link>
        </Button>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <PlanDetails planId={params.planId} />
        </div>
        <div className="space-y-6">
          <PlanMembers planId={params.planId} />
          <PlanHistory planId={params.planId} />
        </div>
      </div>
    </div>
  )
}
