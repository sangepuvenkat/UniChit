import { ChatInterface } from "@/components/app/chat-interface"
import { ChatSidebar } from "@/components/app/chat-sidebar"
import { Bot } from "lucide-react"

export default function ChatPage() {
  return (
    <div className="h-[calc(100vh-8rem)] flex gap-6">
      <div className="hidden md:block w-80">
        <ChatSidebar />
      </div>
      <div className="flex-1 flex flex-col">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
            <Bot className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h1 className="text-xl font-bold">AI Digital Leader</h1>
            <p className="text-sm text-muted-foreground">Your personal savings assistant</p>
          </div>
        </div>
        <ChatInterface />
      </div>
    </div>
  )
}
