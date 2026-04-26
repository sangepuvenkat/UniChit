import { LandingHero } from "@/components/landing-hero"
import { FeatureCards } from "@/components/feature-cards"
import { HowItWorks } from "@/components/how-it-works"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <LandingHero />
      <FeatureCards />
      <HowItWorks />
      <Footer />
    </div>
  )
}
