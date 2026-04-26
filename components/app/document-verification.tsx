"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useAuth } from "@/lib/auth-context"
import { FileText, CheckCircle, Clock, AlertTriangle, Loader2 } from "lucide-react"

export function DocumentVerification() {
  const { user } = useAuth()
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [uploading, setUploading] = useState(false)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setSelectedFile(file)
    }
  }

  const handleUpload = async () => {
    if (!selectedFile) return

    setUploading(true)

    // Mock upload process
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setUploading(false)
    setSelectedFile(null)
    // TODO: Update user verification status
  }

  const getStatusIcon = () => {
    if (user?.collegeVerified) return <CheckCircle className="h-4 w-4 text-green-600" />
    if (user?.docUrl) return <Clock className="h-4 w-4 text-yellow-600" />
    return <AlertTriangle className="h-4 w-4 text-red-600" />
  }

  const getStatusText = () => {
    if (user?.collegeVerified) return "Verified"
    if (user?.docUrl) return "Under Review"
    return "Not Submitted"
  }

  const getStatusVariant = () => {
    if (user?.collegeVerified) return "default"
    if (user?.docUrl) return "secondary"
    return "destructive"
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          College Verification
          <Badge variant={getStatusVariant()} className="flex items-center gap-1">
            {getStatusIcon()}
            {getStatusText()}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {user?.collegeVerified ? (
          <Alert>
            <CheckCircle className="h-4 w-4" />
            <AlertDescription>
              Your college verification is complete! You now have access to all platform features.
            </AlertDescription>
          </Alert>
        ) : user?.docUrl ? (
          <Alert>
            <Clock className="h-4 w-4" />
            <AlertDescription>
              Your document is under review. We'll notify you once verification is complete (usually within 24-48
              hours).
            </AlertDescription>
          </Alert>
        ) : (
          <Alert>
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              Please upload your college ID or student card to verify your student status and unlock all features.
            </AlertDescription>
          </Alert>
        )}

        {!user?.collegeVerified && (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="collegeDoc">Upload College ID/Student Card</Label>
              <div className="flex items-center gap-2">
                <Input
                  id="collegeDoc"
                  type="file"
                  accept="image/*,.pdf"
                  onChange={handleFileChange}
                  disabled={uploading}
                  className="file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-primary file:text-primary-foreground hover:file:bg-primary/90"
                />
                {selectedFile && (
                  <Button onClick={handleUpload} disabled={uploading} size="sm">
                    {uploading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    {uploading ? "Uploading..." : "Upload"}
                  </Button>
                )}
              </div>
              {selectedFile && (
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <FileText className="h-4 w-4" />
                  Selected: {selectedFile.name}
                </div>
              )}
            </div>

            <div className="text-sm text-muted-foreground space-y-1">
              <p>Accepted formats: JPG, PNG, PDF (max 5MB)</p>
              <p>Make sure your document clearly shows:</p>
              <ul className="list-disc list-inside ml-2 space-y-1">
                <li>Your full name</li>
                <li>College/University name</li>
                <li>Student ID number</li>
                <li>Valid dates</li>
              </ul>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
