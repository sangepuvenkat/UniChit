import { Card, CardContent } from "@/components/ui/card"
import { Bot, Target, Users, Shield } from "lucide-react"

const features = [
  {
    icon: Target,
    title: "Goal-Based Saving",
    description: "Set specific goals like laptops, phones, or books and save systematically with fellow students.",
  },
  {
    icon: Bot,
    title: "AI Digital Leader",
    description: "Get personalized guidance and reminders from our intelligent bot to stay on track.",
  },
  {
    icon: Users,
    title: "Trusted Community",
    description: "Join verified student groups from your college for secure and transparent savings.",
  },
  {
    icon: Shield,
    title: "Secure & Verified",
    description: "College verification, secure payments, and transparent bidding ensure your money is safe.",
  },
]

export function FeatureCards() {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">Why Choose Uni Chit?</h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Built specifically for students, by students. Experience the future of collaborative saving.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground text-pretty">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
