"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useAuth } from "@/lib/auth-context"
import { Bell, Shield, Trash2, AlertTriangle } from "lucide-react"

export function AccountSettings() {
  const { logout } = useAuth()
  const [settings, setSettings] = useState({
    emailNotifications: true,
    pushNotifications: true,
    bidReminders: true,
    paymentReminders: true,
    marketingEmails: false,
  })

  const handleSettingChange = (key: string, value: boolean) => {
    setSettings({ ...settings, [key]: value })
    // TODO: Save to Firebase
  }

  const handleDeleteAccount = () => {
    // TODO: Show confirmation dialog
    console.log("Delete account requested")
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Account Settings</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Notifications */}
        <div className="space-y-4">
          <h4 className="font-medium flex items-center gap-2">
            <Bell className="h-4 w-4" />
            Notifications
          </h4>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-sm">Email Notifications</Label>
                <p className="text-xs text-muted-foreground">Receive updates via email</p>
              </div>
              <Switch
                checked={settings.emailNotifications}
                onCheckedChange={(checked) => handleSettingChange("emailNotifications", checked)}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-sm">Push Notifications</Label>
                <p className="text-xs text-muted-foreground">Browser notifications</p>
              </div>
              <Switch
                checked={settings.pushNotifications}
                onCheckedChange={(checked) => handleSettingChange("pushNotifications", checked)}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-sm">Bid Reminders</Label>
                <p className="text-xs text-muted-foreground">Remind me before bidding ends</p>
              </div>
              <Switch
                checked={settings.bidReminders}
                onCheckedChange={(checked) => handleSettingChange("bidReminders", checked)}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-sm">Payment Reminders</Label>
                <p className="text-xs text-muted-foreground">Remind me of upcoming payments</p>
              </div>
              <Switch
                checked={settings.paymentReminders}
                onCheckedChange={(checked) => handleSettingChange("paymentReminders", checked)}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-sm">Marketing Emails</Label>
                <p className="text-xs text-muted-foreground">New features and updates</p>
              </div>
              <Switch
                checked={settings.marketingEmails}
                onCheckedChange={(checked) => handleSettingChange("marketingEmails", checked)}
              />
            </div>
          </div>
        </div>

        {/* Security */}
        <div className="space-y-4">
          <h4 className="font-medium flex items-center gap-2">
            <Shield className="h-4 w-4" />
            Security
          </h4>

          <Button variant="outline" className="w-full justify-start bg-transparent">
            Change Password
          </Button>

          <Button variant="outline" className="w-full justify-start bg-transparent">
            Two-Factor Authentication
          </Button>
        </div>

        {/* Danger Zone */}
        <div className="space-y-4">
          <h4 className="font-medium text-destructive flex items-center gap-2">
            <AlertTriangle className="h-4 w-4" />
            Danger Zone
          </h4>

          <Alert>
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              Deleting your account will remove all your data and cannot be undone. Make sure to complete any active
              plans first.
            </AlertDescription>
          </Alert>

          <Button variant="destructive" onClick={handleDeleteAccount} className="w-full">
            <Trash2 className="h-4 w-4 mr-2" />
            Delete Account
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
