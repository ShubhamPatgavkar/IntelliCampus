"use client"

import { useState } from "react"
import { Navbar } from "@/components/Navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"

export default function FindFlatmatePage() {
  const [preferences, setPreferences] = useState({
    department: "",
    year: "",
    budget: [500, 1500],
    location: "",
    livingPreference: "",
    gender: "",
    nonSmoking: false,
    petFriendly: false,
    earlyRiser: false,
    nightOwl: false,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setPreferences({ ...preferences, [name]: value })
  }

  const handleSelectChange = (name: string, value: string) => {
    setPreferences({ ...preferences, [name]: value })
  }

  const handleSwitchChange = (name: string, checked: boolean) => {
    setPreferences({ ...preferences, [name]: checked })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the preferences to your backend
    console.log("Preferences to be sent:", preferences)
    // Redirect to dashboard or search results page
    // router.push('/flatmate-dashboard')
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-3xl font-bold mb-6">Find Your Perfect Flatmate</h1>
          <Card>
            <CardHeader>
              <CardTitle>Set Your Preferences</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="department">Department</Label>
                    <Select onValueChange={(value) => handleSelectChange("department", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select department" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cs">Computer Science</SelectItem>
                        <SelectItem value="me">Mechanical Engineering</SelectItem>
                        <SelectItem value="ee">Electrical Engineering</SelectItem>
                        <SelectItem value="business">Business</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="year">College Year</Label>
                    <Select onValueChange={(value) => handleSelectChange("year", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select year" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="freshman">Freshman</SelectItem>
                        <SelectItem value="sophomore">Sophomore</SelectItem>
                        <SelectItem value="junior">Junior</SelectItem>
                        <SelectItem value="senior">Senior</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="budget">Budget Range</Label>
                    <Slider
                      min={0}
                      max={3000}
                      step={100}
                      value={preferences.budget}
                      onValueChange={(value) => setPreferences({ ...preferences, budget: value })}
                    />
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>${preferences.budget[0]}</span>
                      <span>${preferences.budget[1]}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Preferred Location</Label>
                    <Input
                      id="location"
                      name="location"
                      value={preferences.location}
                      onChange={handleInputChange}
                      placeholder="Enter preferred area or neighborhood"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="livingPreference">Living Preference</Label>
                    <Select onValueChange={(value) => handleSelectChange("livingPreference", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select preference" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="quiet">Quiet</SelectItem>
                        <SelectItem value="social">Social</SelectItem>
                        <SelectItem value="studious">Studious</SelectItem>
                        <SelectItem value="active">Active</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="gender">Gender Preference</Label>
                    <Select onValueChange={(value) => handleSelectChange("gender", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select gender preference" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="any">Any</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Additional Preferences</h3>
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="nonSmoking"
                      checked={preferences.nonSmoking}
                      onCheckedChange={(checked) => handleSwitchChange("nonSmoking", checked)}
                    />
                    <Label htmlFor="nonSmoking">Non-smoking</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="petFriendly"
                      checked={preferences.petFriendly}
                      onCheckedChange={(checked) => handleSwitchChange("petFriendly", checked)}
                    />
                    <Label htmlFor="petFriendly">Pet-friendly</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="earlyRiser"
                      checked={preferences.earlyRiser}
                      onCheckedChange={(checked) => handleSwitchChange("earlyRiser", checked)}
                    />
                    <Label htmlFor="earlyRiser">Early riser</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="nightOwl"
                      checked={preferences.nightOwl}
                      onCheckedChange={(checked) => handleSwitchChange("nightOwl", checked)}
                    />
                    <Label htmlFor="nightOwl">Night owl</Label>
                  </div>
                </div>
                <Button type="submit">Search Flatmates</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

