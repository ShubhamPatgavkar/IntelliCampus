"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Navbar } from "@/components/Navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface Event {
  id: number
  title: string
  date: string
  description: string
  maxGroupSize: number
}

export default function ManageEventsPage() {
  const [events, setEvents] = useState<Event[]>([])

  useEffect(() => {
    const userEvents = JSON.parse(localStorage.getItem("userEvents") || "[]")
    setEvents(userEvents)
  }, [])

  const deleteEvent = (id: number) => {
    const updatedEvents = events.filter((event) => event.id !== id)
    setEvents(updatedEvents)
    localStorage.setItem("userEvents", JSON.stringify(updatedEvents))
  }

  return (
    <div>
      <Navbar />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-3xl font-bold mb-6">Manage Your Events</h1>
          {events.length === 0 ? (
            <p>You haven't created any events yet.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event) => (
                <Card key={event.id}>
                  <CardHeader>
                    <CardTitle>{event.title}</CardTitle>
                    <CardDescription>Date: {event.date}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500">{event.description}</p>
                    <p className="mt-2 text-sm">Max Group Size: {event.maxGroupSize}</p>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" asChild>
                      <Link href={`/events/${event.id}`}>View Details</Link>
                    </Button>
                    <Button variant="destructive" onClick={() => deleteEvent(event.id)}>
                      Delete
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
          <div className="mt-6">
            <Button asChild>
              <Link href="/events/create">Create New Event</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}

