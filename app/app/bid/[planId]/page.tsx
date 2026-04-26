import { BidPanel } from "@/components/app/bid-panel"
import { PlanDetails } from "@/components/app/plan-details"
import { BiddingRules } from "@/components/app/bidding-rules"

interface BidPageProps {
  params: {
    planId: string
  }
}

export default function BidPage({ params }: BidPageProps) {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-balance">Place Your Bid</h1>
        <p className="text-muted-foreground">
          Submit your bid for this round. Remember, only one bid per user per round!
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <PlanDetails planId={params.planId} />
          <BidPanel planId={params.planId} />
        </div>
        <div>
          <BiddingRules />
        </div>
      </div>
    </div>
  )
}
