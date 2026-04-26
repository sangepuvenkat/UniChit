"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { useAuth } from "@/lib/auth-context"
import { Bot, Send, Loader2, User, Lightbulb, Target, DollarSign, Calendar } from "lucide-react"

interface Message {
  id: string
  from: "user" | "bot"
  text: string
  timestamp: Date
  suggestions?: string[]
}

const quickActions = [
  { icon: Target, label: "My Goals", action: "show_goals" },
  { icon: DollarSign, label: "Payment Due", action: "payment_due" },
  { icon: Calendar, label: "Bid Deadlines", action: "bid_deadlines" },
  { icon: Lightbulb, label: "Savings Tips", action: "savings_tips" },
]

export function ChatInterface() {
  const { user } = useAuth()
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      from: "bot",
      text: `Hello ${user?.name || "there"}! 👋 I'm your AI Digital Leader, here to help you achieve your savings goals. What would you like to know about your plans?`,
      timestamp: new Date(),
      suggestions: ["Show my active plans", "When is my next payment due?", "How can I save more effectively?"],
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const generateBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase()

    // Rule-based responses - in real app, this would call an AI API
    if (lowerMessage.includes("goal") || lowerMessage.includes("plan")) {
      return "You currently have 3 active plans: MacBook Pro M3 (₹78,000 saved), iPhone 15 Pro (₹32,000 saved), and Engineering Books (₹12,000 saved). Your MacBook plan is closest to completion! Would you like details on any specific plan?"
    }

    if (lowerMessage.includes("payment") || lowerMessage.includes("due")) {
      return "Your next payments are due on January 25th: ₹6,000 for MacBook Pro M3, ₹4,000 for iPhone 15 Pro, and ₹1,500 for Engineering Books. That's a total of ₹11,500. Would you like me to set a reminder?"
    }

    if (lowerMessage.includes("bid") || lowerMessage.includes("deadline")) {
      return "You have bidding opportunities coming up! iPhone 15 Pro bidding closes in 3 days (Jan 20th). The current lowest bid is ₹4,100. Would you like help strategizing your bid?"
    }

    if (lowerMessage.includes("save") || lowerMessage.includes("tip")) {
      return "Here are some personalized savings tips: 1) Set up automatic transfers on payday, 2) Use the 50/30/20 rule for budgeting, 3) Consider increasing your bid amounts gradually as you get closer to graduation. Would you like more detailed advice on any of these?"
    }

    if (lowerMessage.includes("leader") || lowerMessage.includes("commission")) {
      return `You've completed ${user?.completedGoals || 0} goals so far. Complete ${2 - (user?.completedGoals || 0)} more to become eligible for leader status and start earning commissions! Leaders earn 70% of group fees. Want to know more about the leader program?`
    }

    if (lowerMessage.includes("help") || lowerMessage.includes("how")) {
      return "I can help you with: checking your savings progress, upcoming payments and deadlines, bidding strategies, savings tips, leader program info, and general questions about Uni Chit. What specific area would you like help with?"
    }

    // Default response
    return "I understand you're asking about your savings journey. Let me help you with that! You can ask me about your active plans, payment schedules, bidding strategies, or general savings advice. What would you like to know more about?"
  }

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      from: "user",
      text: text.trim(),
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate AI thinking time
    await new Promise((resolve) => setTimeout(resolve, 1000 + Math.random() * 2000))

    const botResponse: Message = {
      id: (Date.now() + 1).toString(),
      from: "bot",
      text: generateBotResponse(text),
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, botResponse])
    setIsTyping(false)
  }

  const handleQuickAction = (action: string) => {
    const actionMessages: Record<string, string> = {
      show_goals: "Show me my active savings goals",
      payment_due: "When are my next payments due?",
      bid_deadlines: "What are my upcoming bid deadlines?",
      savings_tips: "Give me some savings tips",
    }

    const message = actionMessages[action]
    if (message) {
      handleSendMessage(message)
    }
  }

  const handleSuggestionClick = (suggestion: string) => {
    handleSendMessage(suggestion)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleSendMessage(inputValue)
  }

  return (
    <div className="flex flex-col h-full">
      {/* Quick Actions */}
      <div className="flex flex-wrap gap-2 mb-4">
        {quickActions.map((action, index) => (
          <Button
            key={index}
            variant="outline"
            size="sm"
            onClick={() => handleQuickAction(action.action)}
            className="flex items-center gap-2 bg-transparent"
          >
            <action.icon className="h-3 w-3" />
            {action.label}
          </Button>
        ))}
      </div>

      {/* Messages */}
      <Card className="flex-1 flex flex-col">
        <CardContent className="flex-1 p-4 overflow-y-auto space-y-4">
          {messages.map((message) => (
            <div key={message.id} className={`flex gap-3 ${message.from === "user" ? "justify-end" : ""}`}>
              {message.from === "bot" && (
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-primary/10">
                    <Bot className="h-4 w-4 text-primary" />
                  </AvatarFallback>
                </Avatar>
              )}

              <div className={`max-w-[80%] ${message.from === "user" ? "order-first" : ""}`}>
                <div
                  className={`p-3 rounded-lg ${
                    message.from === "user"
                      ? "bg-primary text-primary-foreground ml-auto"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>

                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs text-muted-foreground">
                    {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </span>
                  {message.from === "bot" && (
                    <Badge variant="outline" className="text-xs">
                      AI
                    </Badge>
                  )}
                </div>

                {/* Suggestions */}
                {message.suggestions && (
                  <div className="flex flex-wrap gap-1 mt-2">
                    {message.suggestions.map((suggestion, index) => (
                      <Button
                        key={index}
                        variant="ghost"
                        size="sm"
                        onClick={() => handleSuggestionClick(suggestion)}
                        className="text-xs h-6 px-2 bg-muted/50 hover:bg-muted"
                      >
                        {suggestion}
                      </Button>
                    ))}
                  </div>
                )}
              </div>

              {message.from === "user" && (
                <Avatar className="h-8 w-8">
                  <AvatarImage src={user?.profilePic || "/placeholder.svg"} />
                  <AvatarFallback>
                    <User className="h-4 w-4" />
                  </AvatarFallback>
                </Avatar>
              )}
            </div>
          ))}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex gap-3">
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-primary/10">
                  <Bot className="h-4 w-4 text-primary" />
                </AvatarFallback>
              </Avatar>
              <div className="bg-muted p-3 rounded-lg">
                <div className="flex items-center gap-1">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" />
                    <div
                      className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    />
                    <div
                      className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    />
                  </div>
                  <span className="text-xs text-muted-foreground ml-2">AI is thinking...</span>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </CardContent>

        {/* Input */}
        <div className="border-t p-4">
          <form onSubmit={handleSubmit} className="flex gap-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask me about your savings goals..."
              disabled={isTyping}
              className="flex-1"
            />
            <Button type="submit" disabled={isTyping || !inputValue.trim()}>
              {isTyping ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
            </Button>
          </form>
          <p className="text-xs text-muted-foreground mt-2">
            💡 Try asking: "Show my goals", "Payment reminders", "Bidding tips", or "How to save more"
          </p>
        </div>
      </Card>
    </div>
  )
}
