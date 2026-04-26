import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Target, Plus, MessageSquare, History } from "lucide-react"
import Link from "next/link"

const actions = [
  {
    title: "Browse Plans",
    description: "Find new goals to save for",
    icon: Target,
    href: "/app/plans",
    variant: "default" as const,
  },
  {
    title: "Create Goal",
    description: "Start a custom savings plan",
    icon: Plus,
    href: "/app/plans/create",
    variant: "outline" as const,
  },
  {
    title: "Chat with AI",
    description: "Get savings advice",
    icon: MessageSquare,
    href: "/app/chat",
    variant: "outline" as const,
  },
  {
    title: "View History",
    description: "Check past transactions",
    icon: History,
    href: "/app/history",
    variant: "outline" as const,
  },
]

export function QuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {actions.map((action, index) => (
          <Button key={index} variant={action.variant} className="w-full justify-start h-auto p-4" asChild>
            <Link href={action.href}>
              <div className="flex items-center gap-3">
                <action.icon className="h-4 w-4" />
                <div className="text-left">
                  <div className="font-medium">{action.title}</div>
                  <div className="text-xs opacity-70">{action.description}</div>
                </div>
              </div>
            </Link>
          </Button>
        ))}
      </CardContent>
    </Card>
  )
}
