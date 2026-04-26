import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Users, Crown } from "lucide-react"

interface PlanMembersProps {
  planId: string
}

export function PlanMembers({ planId }: PlanMembersProps) {
  // Mock data - in real app, fetch from Firebase
  const members = [
    {
      id: "1",
      name: "Alice Johnson",
      email: "alice@college.edu",
      avatar: "/placeholder.svg",
      isLeader: true,
      joinedDate: "2023-12-01",
    },
    {
      id: "2",
      name: "Bob Smith",
      email: "bob@college.edu",
      avatar: "/placeholder.svg",
      isLeader: false,
      joinedDate: "2023-12-02",
    },
    {
      id: "3",
      name: "Carol Davis",
      email: "carol@college.edu",
      avatar: "/placeholder.svg",
      isLeader: false,
      joinedDate: "2023-12-03",
    },
    {
      id: "4",
      name: "David Wilson",
      email: "david@college.edu",
      avatar: "/placeholder.svg",
      isLeader: false,
      joinedDate: "2023-12-04",
    },
    {
      id: "5",
      name: "Eva Brown",
      email: "eva@college.edu",
      avatar: "/placeholder.svg",
      isLeader: false,
      joinedDate: "2023-12-05",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Users className="h-4 w-4" />
          Plan Members ({members.length}/20)
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {members.map((member) => (
          <div key={member.id} className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50">
            <Avatar className="h-8 w-8">
              <AvatarImage src={member.avatar || "/placeholder.svg"} />
              <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <p className="text-sm font-medium truncate">{member.name}</p>
                {member.isLeader && (
                  <Badge variant="secondary" className="text-xs">
                    <Crown className="h-2 w-2 mr-1" />
                    Leader
                  </Badge>
                )}
              </div>
              <p className="text-xs text-muted-foreground">Joined {new Date(member.joinedDate).toLocaleDateString()}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
