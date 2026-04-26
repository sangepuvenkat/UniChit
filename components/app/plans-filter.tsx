"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Laptop, Smartphone, BookOpen, MoreHorizontal } from "lucide-react"

const categories = [
  { id: "all", label: "All Plans", icon: MoreHorizontal },
  { id: "laptop", label: "Laptops", icon: Laptop },
  { id: "phone", label: "Phones", icon: Smartphone },
  { id: "books", label: "Books", icon: BookOpen },
  { id: "other", label: "Other", icon: MoreHorizontal },
]

export function PlansFilter() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search plans..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>

      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={activeCategory === category.id ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveCategory(category.id)}
            className="flex items-center gap-2"
          >
            <category.icon className="h-3 w-3" />
            {category.label}
          </Button>
        ))}
      </div>
    </div>
  )
}
