export interface User {
  uid: string
  email: string
  name: string
  phone: string
  college: string
  createdAt: Date
  completedGoals: number
  leader: boolean
  leaderGroups: string[]
  collegeVerified: boolean
  docUrl?: string
  profilePic?: string
}

export interface Plan {
  id: string
  title: string
  goalType: "laptop" | "phone" | "books" | "other"
  amount: number
  durationMonths: number
  monthlyContribution: number
  totalMembers: number
  description: string
  imageUrl: string
  activeRounds: string[]
}

export interface Round {
  id: string
  planId: string
  roundNumber: number
  startDate: Date
  endDate: Date
  members: string[]
  bids: Bid[]
  winnerUid?: string
  paid: boolean
}

export interface Bid {
  uid: string
  bidAmount: number
  timestamp: Date
}

export interface Payment {
  id: string
  userId: string
  amount: number
  roundId: string
  planId: string
  status: "pending" | "success" | "failed"
  method: string
  createdAt: Date
}

export interface Group {
  id: string
  ownerUid: string
  title: string
  members: string[]
  commissionSplit: {
    owner: number
    app: number
  }
  createdAt: Date
}

export interface ChatMessage {
  id: string
  from: "user" | "bot"
  text: string
  timestamp: Date
}
