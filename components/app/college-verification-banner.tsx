"use client"

import { useState } from "react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { X, AlertTriangle, Upload } from "lucide-react"
import { useAuth } from "@/lib/auth-context"

export function CollegeVerificationBanner() {
  const [dismissed, setDismissed] = useState(false)
  const { user } = useAuth()

  if (dismissed || user?.collegeVerified) {
    return null
  }

  return (
    <Alert className="border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-950">
      <AlertTriangle className="h-4 w-4 text-amber-600 dark:text-amber-400" />
      <AlertDescription className="flex items-center justify-between">
        <div className="flex-1">
          <strong>College verification required</strong>
          <p className="text-sm mt-1">
            Please upload your college ID to verify your student status and unlock all features.
          </p>
        </div>
        <div className="flex items-center gap-2 ml-4">
          <Button size="sm" className="bg-amber-600 hover:bg-amber-700">
            <Upload className="h-3 w-3 mr-1" />
            Verify Now
          </Button>
          <Button variant="ghost" size="sm" onClick={() => setDismissed(true)}>
            <X className="h-3 w-3" />
          </Button>
        </div>
      </AlertDescription>
    </Alert>
  )
}
