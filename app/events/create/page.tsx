"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Navbar } from "@/components/Navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function CreateEventPage() {
  const router = useRouter()
  const [eventData, setEventData] = useState({
    title: "",
    date: "",
    description: "",
    maxGroupSize: 4,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setEventData({ ...eventData, [name]: value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log("Event data to be sent:", eventData)
    // Simulate adding the event to a list of user's events
    const userEvents = JSON.parse(localStorage.getItem("userEvents") || "[]")
    userEvents.push({ ...eventData, id: Date.now() })
    localStorage.setItem("userEvents", JSON.stringify(userEvents))
    // Reset form after submission
    setEventData({ title: "", date: "", description: "", maxGroupSize: 4 })
    alert("Event created successfully!")
    // Redirect to the manage events page
    router.push("/events/manage")
  }

  return (
    <div>
      <Navbar />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-3xl font-bold mb-6">Create New Event</h1>
          <Card>
            <CardHeader>
              <CardTitle>Event Details</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Event Title</Label>
                  <Input id="title" name="title" value={eventData.title} onChange={handleInputChange} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="date">Event Date</Label>
                  <Input
                    id="date"
                    name="date"
                    type="date"
                    value={eventData.date}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Event Description</Label>
                  <Textarea
                    id="description"
                    name="description"
                    value={eventData.description}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="maxGroupSize">Maximum Group Size</Label>
                  <Input
                    id="maxGroupSize"
                    name="maxGroupSize"
                    type="number"
                    min={2}
                    value={eventData.maxGroupSize}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <Button type="submit">Create Event</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

