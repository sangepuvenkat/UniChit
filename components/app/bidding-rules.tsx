import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle, AlertTriangle, Info, DollarSign } from "lucide-react"

export function BiddingRules() {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="h-4 w-4" />
            How Bidding Works
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
              <div className="text-sm">
                <strong>Lowest bid wins</strong> - The member with the lowest bid receives the goal amount
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
              <div className="text-sm">
                <strong>One bid per round</strong> - You can only place one bid per round, so choose wisely
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
              <div className="text-sm">
                <strong>Monthly contributions</strong> - All members pay monthly regardless of winning
              </div>
            </div>

            <div className="flex items-start gap-3">
              <DollarSign className="h-4 w-4 text-blue-600 mt-0.5" />
              <div className="text-sm">
                <strong>Winner pays bid + contribution</strong> - If you win, you pay your bid amount plus monthly
                contribution
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Alert>
        <AlertTriangle className="h-4 w-4" />
        <AlertDescription>
          <strong>Important:</strong> Make sure you can afford your bid amount plus the monthly contribution. Missing
          payments may result in removal from the plan.
        </AlertDescription>
      </Alert>

      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Example Calculation</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Your bid:</span>
            <span>₹3,800</span>
          </div>
          <div className="flex justify-between">
            <span>Monthly contribution:</span>
            <span>₹4,000</span>
          </div>
          <div className="flex justify-between font-medium border-t pt-2">
            <span>Total if you win:</span>
            <span>₹7,800</span>
          </div>
          <div className="text-xs text-muted-foreground mt-2">
            You receive ₹80,000 (goal amount) and pay ₹7,800 this month
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
