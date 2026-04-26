import { ProfileForm } from "@/components/app/profile-form"
import { ProfileStats } from "@/components/app/profile-stats"
import { DocumentVerification } from "@/components/app/document-verification"
import { AccountSettings } from "@/components/app/account-settings"

export default function ProfilePage() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-balance">Profile & Settings</h1>
        <p className="text-muted-foreground">Manage your account information and preferences</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <ProfileForm />
          <DocumentVerification />
        </div>
        <div className="space-y-6">
          <ProfileStats />
          <AccountSettings />
        </div>
      </div>
    </div>
  )
}
