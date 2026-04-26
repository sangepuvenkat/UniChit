"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Plus, Loader2, Info } from "lucide-react"

export function CreateGroupForm() {
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    maxMembers: "20",
    minContribution: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Mock API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setLoading(false)
    // Reset form
    setFormData({
      title: "",
      description: "",
      category: "",
      maxMembers: "20",
      minContribution: "",
    })
    // TODO: Show success message
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          Create New Group
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Group Name</Label>
            <Input
              id="title"
              name="title"
              placeholder="e.g., Tech Enthusiasts Group"
              value={formData.title}
              onChange={handleInputChange}
              required
              disabled={loading}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              name="description"
              placeholder="Describe what this group is for..."
              value={formData.description}
              onChange={handleInputChange}
              required
              disabled={loading}
              className="min-h-[80px]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <Select value={formData.category} onValueChange={(value) => setFormData({ ...formData, category: value })}>
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="laptop">Laptops</SelectItem>
                <SelectItem value="phone">Phones</SelectItem>
                <SelectItem value="books">Books</SelectItem>
                <SelectItem value="mixed">Mixed Goals</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="maxMembers">Max Members</Label>
              <Select
                value={formData.maxMembers}
                onValueChange={(value) => setFormData({ ...formData, maxMembers: value })}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="10">10 members</SelectItem>
                  <SelectItem value="15">15 members</SelectItem>
                  <SelectItem value="20">20 members</SelectItem>
                  <SelectItem value="25">25 members</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="minContribution">Min. Contribution</Label>
              <Input
                id="minContribution"
                name="minContribution"
                type="number"
                placeholder="₹1000"
                value={formData.minContribution}
                onChange={handleInputChange}
                required
                disabled={loading}
              />
            </div>
          </div>

          <Alert>
            <Info className="h-4 w-4" />
            <AlertDescription>
              As a leader, you'll earn 70% of group commissions. The platform keeps 30% for maintenance and support.
            </AlertDescription>
          </Alert>

          <Button type="submit" disabled={loading} className="w-full">
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {loading ? "Creating Group..." : "Create Group"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
