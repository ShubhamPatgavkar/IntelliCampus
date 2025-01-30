import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Navbar } from "@/components/Navbar"

// Mock data for events (replace with actual data fetching in the future)
const events = [
  { id: 1, title: "AI Hackathon", organizer: "CS Club", date: "2023-06-15" },
  { id: 2, title: "Web3 Challenge", organizer: "Blockchain Society", date: "2023-07-01" },
  { id: 3, title: "Mobile App Contest", organizer: "App Developers Club", date: "2023-07-20" },
]

export default function EventsPage() {
  return (
    <div>
      <Navbar />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-3xl font-bold mb-6">Upcoming Hackathons</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <Card key={event.id}>
                <CardHeader>
                  <CardTitle>{event.title}</CardTitle>
                  <CardDescription>{event.organizer}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Date: {event.date}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href={`/events/${event.id}`}>View Details</Link>
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

