"use client"

import { CardContent } from "@/components/ui/card"

import { CardTitle } from "@/components/ui/card"

import { CardHeader } from "@/components/ui/card"

import { Card } from "@/components/ui/card"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, Filter, X } from "lucide-react"
import { format } from "date-fns"

export function HistoryFilter() {
  const [dateRange, setDateRange] = useState<{ from?: Date; to?: Date }>({})
  const [type, setType] = useState<string>("all")
  const [status, setStatus] = useState<string>("all")
  const [searchQuery, setSearchQuery] = useState("")

  const clearFilters = () => {
    setDateRange({})
    setType("all")
    setStatus("all")
    setSearchQuery("")
  }

  const hasActiveFilters = dateRange.from || type !== "all" || status !== "all" || searchQuery

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Filter className="h-4 w-4" />
          Filters
          {hasActiveFilters && (
            <Button variant="ghost" size="sm" onClick={clearFilters} className="ml-auto">
              <X className="h-3 w-3 mr-1" />
              Clear
            </Button>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Search</label>
            <Input
              placeholder="Search transactions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Type</label>
            <Select value={type} onValueChange={setType}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="payment">Payments</SelectItem>
                <SelectItem value="bid">Bids</SelectItem>
                <SelectItem value="win">Wins</SelectItem>
                <SelectItem value="refund">Refunds</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Status</label>
            <Select value={status} onValueChange={setStatus}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="failed">Failed</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Date Range</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-full justify-start text-left font-normal bg-transparent">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {dateRange.from ? (
                    dateRange.to ? (
                      <>
                        {format(dateRange.from, "LLL dd")} - {format(dateRange.to, "LLL dd")}
                      </>
                    ) : (
                      format(dateRange.from, "LLL dd, y")
                    )
                  ) : (
                    "Pick a date range"
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  initialFocus
                  mode="range"
                  defaultMonth={dateRange.from}
                  selected={dateRange}
                  onSelect={setDateRange}
                  numberOfMonths={2}
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>

        {hasActiveFilters && (
          <div className="flex flex-wrap gap-2 mt-4">
            {searchQuery && (
              <Badge variant="secondary">
                Search: {searchQuery}
                <X className="h-3 w-3 ml-1 cursor-pointer" onClick={() => setSearchQuery("")} />
              </Badge>
            )}
            {type !== "all" && (
              <Badge variant="secondary">
                Type: {type}
                <X className="h-3 w-3 ml-1 cursor-pointer" onClick={() => setType("all")} />
              </Badge>
            )}
            {status !== "all" && (
              <Badge variant="secondary">
                Status: {status}
                <X className="h-3 w-3 ml-1 cursor-pointer" onClick={() => setStatus("all")} />
              </Badge>
            )}
            {dateRange.from && (
              <Badge variant="secondary">
                Date: {format(dateRange.from, "MMM dd")}
                {dateRange.to && ` - ${format(dateRange.to, "MMM dd")}`}
                <X className="h-3 w-3 ml-1 cursor-pointer" onClick={() => setDateRange({})} />
              </Badge>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
