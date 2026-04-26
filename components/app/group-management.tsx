import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Users, Settings, Eye, MoreHorizontal, Calendar } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const groups = [
  {
    id: "1",
    title: "Tech Enthusiasts Group",
    description: "For students saving for laptops and tech gadgets",
    members: 18,
    maxMembers: 20,
    totalSavings: 240000,
    commission: 8500,
    status: "active",
    createdDate: "2023-12-01",
    recentMembers: [
      { name: "Alice", avatar: "/placeholder.svg" },
      { name: "Bob", avatar: "/placeholder.svg" },
      { name: "Carol", avatar: "/placeholder.svg" },
    ],
  },
  {
    id: "2",
    title: "Medical Students Fund",
    description: "Saving for medical books and equipment",
    members: 12,
    maxMembers: 15,
    totalSavings: 180000,
    commission: 6200,
    status: "active",
    createdDate: "2024-01-05",
    recentMembers: [
      { name: "David", avatar: "/placeholder.svg" },
      { name: "Eva", avatar: "/placeholder.svg" },
      { name: "Frank", avatar: "/placeholder.svg" },
    ],
  },
  {
    id: "3",
    title: "Engineering Essentials",
    description: "Books, calculators, and study materials",
    members: 15,
    maxMembers: 15,
    totalSavings: 150000,
    commission: 4800,
    status: "full",
    createdDate: "2023-11-15",
    recentMembers: [
      { name: "Grace", avatar: "/placeholder.svg" },
      { name: "Henry", avatar: "/placeholder.svg" },
      { name: "Ivy", avatar: "/placeholder.svg" },
    ],
  },
]

export function GroupManagement() {
  const getStatusVariant = (status: string) => {
    switch (status) {
      case "active":
        return "default"
      case "full":
        return "secondary"
      case "paused":
        return "outline"
      default:
        return "outline"
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Groups</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {groups.map((group) => {
          const memberProgress = (group.members / group.maxMembers) * 100

          return (
            <div key={group.id} className="border rounded-lg p-4 space-y-4">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold">{group.title}</h3>
                    <Badge variant={getStatusVariant(group.status)}>{group.status}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground text-pretty">{group.description}</p>
                </div>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <Eye className="h-4 w-4 mr-2" />
                      View Details
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Settings className="h-4 w-4 mr-2" />
                      Manage Group
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Users className="h-4 w-4 mr-2" />
                      Member List
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      Members
                    </span>
                    <span>
                      {group.members}/{group.maxMembers}
                    </span>
                  </div>
                  <Progress value={memberProgress} className="h-2" />
                </div>

                <div className="text-center">
                  <div className="text-lg font-bold">₹{group.totalSavings.toLocaleString()}</div>
                  <div className="text-xs text-muted-foreground">Total Savings</div>
                </div>

                <div className="text-center">
                  <div className="text-lg font-bold text-green-600">₹{group.commission.toLocaleString()}</div>
                  <div className="text-xs text-muted-foreground">Your Commission</div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {group.recentMembers.map((member, index) => (
                      <Avatar key={index} className="h-6 w-6 border-2 border-background">
                        <AvatarImage src={member.avatar || "/placeholder.svg"} />
                        <AvatarFallback className="text-xs">{member.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">Recent members</span>
                </div>

                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  Created {new Date(group.createdDate).toLocaleDateString()}
                </div>
              </div>
            </div>
          )
        })}
      </CardContent>
    </Card>
  )
}
