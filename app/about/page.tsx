import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, ArrowLeft, Target, Users, Shield, Bot } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="flex items-center justify-between p-4 md:p-6 border-b">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </Button>
        <div className="flex items-center gap-2">
          <GraduationCap className="h-6 w-6 text-primary" />
          <span className="text-lg font-bold">Uni Chit</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 py-12 md:py-16">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-balance mb-4">About Uni Chit</h1>
            <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
              Empowering students to achieve their financial goals through collaborative saving and smart technology.
            </p>
          </div>

          <div className="grid gap-8 mb-12">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-muted-foreground text-pretty leading-relaxed">
                  We believe every student deserves access to the tools and resources they need to succeed. Uni Chit
                  combines the traditional concept of chit funds with modern technology to create a secure, transparent,
                  and student-friendly platform for collaborative saving. Whether you're saving for a laptop, phone,
                  books, or any other goal, we're here to help you achieve it together with your peers.
                </p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Target className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">Goal-Oriented</h3>
                  </div>
                  <p className="text-muted-foreground text-pretty">
                    Every saving plan is designed around specific goals that matter to students - from essential study
                    materials to the latest technology.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">Community-Driven</h3>
                  </div>
                  <p className="text-muted-foreground text-pretty">
                    Connect with verified students from your college and beyond. Build trust and achieve goals together
                    in a supportive community.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Shield className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">Secure & Transparent</h3>
                  </div>
                  <p className="text-muted-foreground text-pretty">
                    College verification, secure payment processing, and transparent bidding ensure your money and data
                    are always protected.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Bot className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">AI-Powered</h3>
                  </div>
                  <p className="text-muted-foreground text-pretty">
                    Our digital leader provides personalized guidance, reminders, and insights to help you stay on track
                    with your savings goals.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Start Saving?</h2>
            <p className="text-muted-foreground mb-6">
              Join thousands of students who are already achieving their goals with Uni Chit.
            </p>
            <Button size="lg" asChild>
              <Link href="/signup">Get Started Today</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
