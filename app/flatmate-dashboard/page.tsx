"use client"

import { useState } from "react"
import { Navbar } from "@/components/Navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

// Mock data for potential flatmates
const mockFlatmates = [
  {
    id: 1,
    name: "Alice Johnson",
    department: "Computer Science",
    year: "Junior",
    budget: 800,
    location: "Downtown",
    interests: ["Quiet", "Studious"],
    compatibility: 85,
  },
  {
    id: 2,
    name: "Bob Smith",
    department: "Mechanical Engineering",
    year: "Sophomore",
    budget: 700,
    location: "University District",
    interests: ["Social", "Active"],
    compatibility: 72,
  },
  {
    id: 3,
    name: "Charlie Brown",
    department: "Business",
    year: "Senior",
    budget: 900,
    location: "Suburbs",
    interests: ["Night Owl", "Pet-friendly"],
    compatibility: 68,
  },
]

export default function FlatmateDashboardPage() {
  const [flatmates, setFlatmates] = useState(mockFlatmates)

  const handleConnect = (id: number) => {
    // Here you would typically send a connection request to your backend
    console.log(`Connecting with flatmate ${id}`)
    // Update UI to show connection request sent
    setFlatmates(flatmates.map((flatmate) => (flatmate.id === id ? { ...flatmate, connectionSent: true } : flatmate)))
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-3xl font-bold mb-6">Flatmate Matches</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {flatmates.map((flatmate) => (
              <Card key={flatmate.id}>
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src={`/placeholder.svg?${flatmate.id}`} alt={flatmate.name} />
                      <AvatarFallback>
                        {flatmate.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle>{flatmate.name}</CardTitle>
                      <CardDescription>
                        {flatmate.department}, {flatmate.year}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-2">Budget: ${flatmate.budget}/month</p>
                  <p className="mb-2">Location: {flatmate.location}</p>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {flatmate.interests.map((interest, index) => (
                      <Badge key={index} variant="secondary">
                        {interest}
                      </Badge>
                    ))}
                  </div>
                  <p className="font-semibold text-green-600">{flatmate.compatibility}% Match</p>
                </CardContent>
                <CardFooter>
                  <Button onClick={() => handleConnect(flatmate.id)} disabled={flatmate.connectionSent}>
                    {flatmate.connectionSent ? "Request Sent" : "Connect"}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

