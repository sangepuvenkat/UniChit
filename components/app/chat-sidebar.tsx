"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Bot, MessageSquare, Plus, Clock, Target, TrendingUp, AlertCircle } from "lucide-react"

const chatHistory = [
  {
    id: "1",
    title: "Payment Reminders",
    lastMessage: "Your next payment is due on Jan 25th",
    timestamp: "2 hours ago",
    unread: false,
  },
  {
    id: "2",
    title: "Bidding Strategy",
    lastMessage: "Consider bidding ₹4,100 for iPhone plan",
    timestamp: "1 day ago",
    unread: true,
  },
  {
    id: "3",
    title: "Savings Tips",
    lastMessage: "Here are 5 ways to boost your savings",
    timestamp: "3 days ago",
    unread: false,
  },
]

const quickInsights = [
  {
    icon: Target,
    title: "Goals Progress",
    value: "65%",
    description: "Average completion",
    color: "text-blue-600",
  },
  {
    icon: Clock,
    title: "Next Payment",
    value: "5 days",
    description: "₹11,500 due",
    color: "text-orange-600",
  },
  {
    icon: TrendingUp,
    title: "Savings Rate",
    value: "+12%",
    description: "vs last month",
    color: "text-green-600",
  },
]

export function ChatSidebar() {
  const [activeChat, setActiveChat] = useState("1")

  return (
    <div className="space-y-4">
      {/* AI Assistant Info */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-base">
            <Bot className="h-4 w-4 text-primary" />
            AI Digital Leader
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full" />
            <span className="text-sm text-muted-foreground">Online & Ready</span>
          </div>
          <p className="text-xs text-muted-foreground">
            I'm here to help with your savings goals, payment reminders, bidding strategies, and financial advice.
          </p>
        </CardContent>
      </Card>

      {/* Quick Insights */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Quick Insights</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {quickInsights.map((insight, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center">
                <insight.icon className={`h-4 w-4 ${insight.color}`} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-sm">{insight.value}</span>
                  <span className="text-xs text-muted-foreground">{insight.title}</span>
                </div>
                <p className="text-xs text-muted-foreground">{insight.description}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Chat History */}
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-base">Recent Chats</CardTitle>
            <Button variant="ghost" size="sm">
              <Plus className="h-3 w-3" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-2">
          {chatHistory.map((chat) => (
            <div
              key={chat.id}
              className={`p-2 rounded-lg cursor-pointer transition-colors ${
                activeChat === chat.id ? "bg-primary/10" : "hover:bg-muted/50"
              }`}
              onClick={() => setActiveChat(chat.id)}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium truncate">{chat.title}</span>
                {chat.unread && <div className="w-2 h-2 bg-primary rounded-full" />}
              </div>
              <p className="text-xs text-muted-foreground truncate">{chat.lastMessage}</p>
              <p className="text-xs text-muted-foreground mt-1">{chat.timestamp}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* AI Capabilities */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">What I Can Help With</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="space-y-2 text-xs">
            <div className="flex items-center gap-2">
              <Target className="h-3 w-3 text-primary" />
              <span>Track savings goals & progress</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-3 w-3 text-primary" />
              <span>Payment & bid reminders</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-3 w-3 text-primary" />
              <span>Personalized savings tips</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageSquare className="h-3 w-3 text-primary" />
              <span>Answer questions about plans</span>
            </div>
            <div className="flex items-center gap-2">
              <AlertCircle className="h-3 w-3 text-primary" />
              <span>Financial guidance & support</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* API Integration Note */}
      <Card className="border-dashed">
        <CardContent className="p-4">
          <div className="text-center space-y-2">
            <Bot className="h-6 w-6 mx-auto text-muted-foreground" />
            <p className="text-xs text-muted-foreground">
              <strong>Developer Note:</strong> Connect to ChatGPT/OpenAI API in Cloud Functions for advanced AI
              responses.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
