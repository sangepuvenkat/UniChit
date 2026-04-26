import { PlansGrid } from "@/components/app/plans-grid"
import { PlansFilter } from "@/components/app/plans-filter"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import Link from "next/link"

export default function PlansPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-balance">Savings Plans</h1>
          <p className="text-muted-foreground">Choose a goal and start saving with fellow students</p>
        </div>
        <Button asChild>
          <Link href="/app/plans/create">
            <Plus className="h-4 w-4 mr-2" />
            Create Plan
          </Link>
        </Button>
      </div>

      <PlansFilter />
      <PlansGrid />
    </div>
  )
}
