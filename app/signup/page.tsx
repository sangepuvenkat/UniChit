import { SignupForm } from "@/components/auth/signup-form"
import { AuthLayout } from "@/components/auth/auth-layout"

export default function SignupPage() {
  return (
    <AuthLayout
      title="Join Uni Chit"
      subtitle="Create your account and start saving toward your goals with fellow students."
    >
      <SignupForm />
    </AuthLayout>
  )
}
