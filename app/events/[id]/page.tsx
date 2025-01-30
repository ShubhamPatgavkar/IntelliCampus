"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Navbar } from "@/components/Navbar"

// Mock data for the event (replace with actual data fetching in the future)
const event = {
  id: 1,
  title: "AI Hackathon",
  organizer: "CS Club",
  date: "2023-06-15",
  description: "Join us for an exciting AI Hackathon where you can showcase your skills and creativity!",
  maxGroupSize: 4, // Maximum number of members per group
}

// Mock data for groups (replace with actual data fetching in the future)
const initialGroups = [
  { id: 1, name: "AI Wizards", members: ["Alice", "Bob"], maxSize: 3 },
  { id: 2, name: "Neural Ninjas", members: ["Charlie", "David"], maxSize: 4 },
]

export default function EventDetailsPage() {
  const { id } = useParams()
  const [groups, setGroups] = useState(initialGroups)
  const [newGroupName, setNewGroupName] = useState("")
  const [newGroupSize, setNewGroupSize] = useState(event.maxGroupSize)

  const createGroup = () => {
    if (newGroupName.trim()) {
      const newGroup = {
        id: groups.length + 1,
        name: newGroupName,
        members: ["You"], // Add the current user as the first member
        maxSize: newGroupSize,
      }
      setGroups([...groups, newGroup])
      setNewGroupName("")
      setNewGroupSize(event.maxGroupSize)
    }
  }

  const joinGroup = (groupId: number) => {
    setGroups(groups.map((group) => (group.id === groupId ? { ...group, members: [...group.members, "You"] } : group)))
  }

  return (
    <div>
      <Navbar />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-3xl font-bold mb-6">{event.title}</h1>
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>{event.title}</CardTitle>
              <CardDescription>{event.organizer}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Date: {event.date}</p>
              <p className="mt-2">{event.description}</p>
              <p className="mt-2">Maximum group size: {event.maxGroupSize}</p>
            </CardContent>
          </Card>

          <h2 className="text-2xl font-bold mb-4">Groups</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {groups.map((group) => (
              <Card key={group.id}>
                <CardHeader>
                  <CardTitle>{group.name}</CardTitle>
                  <CardDescription>
                    Members: {group.members.join(", ")}
                    <br />
                    {group.members.length} / {group.maxSize} members
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  {group.members.length < group.maxSize && !group.members.includes("You") && (
                    <Button onClick={() => joinGroup(group.id)}>Join Group</Button>
                  )}
                  {group.members.length >= group.maxSize && <span className="text-red-500">Group is full</span>}
                  {group.members.includes("You") && <span className="text-green-500">You're a member</span>}
                </CardFooter>
              </Card>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Create a New Group</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="groupName">Group Name</Label>
                  <Input
                    id="groupName"
                    placeholder="Enter group name"
                    value={newGroupName}
                    onChange={(e) => setNewGroupName(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="groupSize">Group Size (including you)</Label>
                  <Input
                    id="groupSize"
                    type="number"
                    min={2}
                    max={event.maxGroupSize}
                    value={newGroupSize}
                    onChange={(e) => setNewGroupSize(Number(e.target.value))}
                  />
                </div>
                <Button onClick={createGroup}>Create Group</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

