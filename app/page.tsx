import { Navbar } from "@/components/Navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-4xl font-bold mb-6">Welcome to StudentHub</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>HackathonHub</CardTitle>
                <CardDescription>Explore and join exciting hackathons</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Discover hackathons, form teams, and showcase your skills.</p>
                <Button asChild>
                  <Link href="/hackathon">Explore Hackathons</Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Find Flatmate</CardTitle>
                <CardDescription>Find your perfect flatmate match</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Set your preferences and connect with potential flatmates.</p>
                <Button asChild>
                  <Link href="/find-flatmate">Start Searching</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

