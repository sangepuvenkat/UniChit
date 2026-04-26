import { Card, CardContent } from "@/components/ui/card"
import { UserPlus, Target, DollarSign, Trophy } from "lucide-react"

const steps = [
  {
    icon: UserPlus,
    step: "1",
    title: "Join & Verify",
    description: "Sign up with your college email and verify your student status for secure access.",
  },
  {
    icon: Target,
    step: "2",
    title: "Choose Your Goal",
    description: "Select from popular goals like laptops, phones, books, or create your own custom goal.",
  },
  {
    icon: DollarSign,
    step: "3",
    title: "Bid & Save",
    description: "Place monthly bids and contribute to the pool. One bid per round keeps it fair for everyone.",
  },
  {
    icon: Trophy,
    step: "4",
    title: "Win & Achieve",
    description: "Lowest bidder wins the round and gets their goal funded. Complete 2+ goals to become a leader!",
  },
]

export function HowItWorks() {
  return (
    <section className="py-16 md:py-24 px-4 bg-muted/30">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Simple, transparent, and designed for students. Start your savings journey in just 4 easy steps.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card key={index} className="relative">
              <CardContent className="p-6 text-center">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mt-4">
                  <step.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground text-pretty">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
