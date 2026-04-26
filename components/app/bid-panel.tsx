"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Loader2, AlertTriangle, CheckCircle, Clock } from "lucide-react"

interface BidPanelProps {
  planId: string
}

export function BidPanel({ planId }: BidPanelProps) {
  const [bidAmount, setBidAmount] = useState([4000])
  const [loading, setLoading] = useState(false)
  const [bidPlaced, setBidPlaced] = useState(false)

  // Mock data - in real app, fetch from Firebase
  const planData = {
    monthlyContribution: 4000,
    minBid: 3500,
    maxBid: 4000,
    currentRound: 5,
    roundEndDate: "2024-01-20T23:59:59",
    userHasBid: false,
  }

  const handleBidSubmit = async () => {
    setLoading(true)

    // Mock API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setBidPlaced(true)
    setLoading(false)
  }

  const timeRemaining = new Date(planData.roundEndDate).getTime() - new Date().getTime()
  const hoursRemaining = Math.floor(timeRemaining / (1000 * 60 * 60))

  if (bidPlaced || planData.userHasBid) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-green-600" />
            Bid Placed Successfully
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg border border-green-200 dark:border-green-800">
            <p className="text-green-800 dark:text-green-200">
              Your bid of ₹{bidAmount[0].toLocaleString()} has been placed for Round {planData.currentRound}.
            </p>
            <p className="text-sm text-green-600 dark:text-green-400 mt-1">
              Results will be announced after the bidding period ends.
            </p>
          </div>

          <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
            <span className="text-sm font-medium">Round Status</span>
            <Badge variant="outline" className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {hoursRemaining}h remaining
            </Badge>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Place Your Bid - Round {planData.currentRound}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <Alert>
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>
            <strong>One bid per round:</strong> You can only place one bid per round. Choose carefully! Bidding ends in{" "}
            {hoursRemaining} hours.
          </AlertDescription>
        </Alert>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Bid Amount (₹)</Label>
            <div className="space-y-4">
              <Slider
                value={bidAmount}
                onValueChange={setBidAmount}
                max={planData.maxBid}
                min={planData.minBid}
                step={50}
                className="w-full"
              />
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>Min: ₹{planData.minBid.toLocaleString()}</span>
                <span>Max: ₹{planData.maxBid.toLocaleString()}</span>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="bidInput">Or enter exact amount</Label>
            <Input
              id="bidInput"
              type="number"
              value={bidAmount[0]}
              onChange={(e) => setBidAmount([Number.parseInt(e.target.value) || planData.minBid])}
              min={planData.minBid}
              max={planData.maxBid}
              step={50}
            />
          </div>

          <div className="p-4 bg-muted rounded-lg space-y-2">
            <div className="flex justify-between text-sm">
              <span>Your bid amount:</span>
              <span className="font-medium">₹{bidAmount[0].toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Monthly contribution:</span>
              <span>₹{planData.monthlyContribution.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-sm font-medium border-t pt-2">
              <span>Total if you win:</span>
              <span className="text-primary">₹{(bidAmount[0] + planData.monthlyContribution).toLocaleString()}</span>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="font-medium">Bidding Strategy Tips:</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Lower bids have higher chances of winning</li>
              <li>• Consider your current financial situation</li>
              <li>• Remember: you'll pay monthly contributions regardless</li>
            </ul>
          </div>
        </div>

        <Button onClick={handleBidSubmit} disabled={loading} className="w-full" size="lg">
          {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {loading ? "Placing Bid..." : `Place Bid - ₹${bidAmount[0].toLocaleString()}`}
        </Button>
      </CardContent>
    </Card>
  )
}
