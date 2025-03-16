"use client"

import { Input } from "@/components/ui/input"

import { Label } from "@/components/ui/label"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/hooks/use-toast"
import { BarChart, Calendar, Image, Mail, MessageSquare, Users, FileText, LogOut } from "lucide-react"

export default function AdminDashboard() {
  const router = useRouter()
  const { toast } = useToast()
  const [activeTab, setActiveTab] = useState("overview")

  const handleLogout = () => {
    // In a real application, you would handle logout with your backend
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
    })
    router.push("/admin")
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <Link href="/admin/dashboard" className="flex items-center gap-2 font-semibold">
          <span className="font-bold">Social Justice Forum Admin</span>
        </Link>
        <nav className="hidden flex-1 items-center gap-6 md:flex">
          <Link
            href="/admin/dashboard"
            className={`text-sm font-medium ${
              activeTab === "overview" ? "text-primary" : "text-muted-foreground"
            } transition-colors hover:text-primary`}
            onClick={() => setActiveTab("overview")}
          >
            Overview
          </Link>
          <Link
            href="#"
            className={`text-sm font-medium ${
              activeTab === "gallery" ? "text-primary" : "text-muted-foreground"
            } transition-colors hover:text-primary`}
            onClick={() => setActiveTab("gallery")}
          >
            Gallery
          </Link>
          <Link
            href="#"
            className={`text-sm font-medium ${
              activeTab === "events" ? "text-primary" : "text-muted-foreground"
            } transition-colors hover:text-primary`}
            onClick={() => setActiveTab("events")}
          >
            Events
          </Link>
          <Link
            href="#"
            className={`text-sm font-medium ${
              activeTab === "careers" ? "text-primary" : "text-muted-foreground"
            } transition-colors hover:text-primary`}
            onClick={() => setActiveTab("careers")}
          >
            Careers
          </Link>
          <Link
            href="#"
            className={`text-sm font-medium ${
              activeTab === "statistics" ? "text-primary" : "text-muted-foreground"
            } transition-colors hover:text-primary`}
            onClick={() => setActiveTab("statistics")}
          >
            Statistics
          </Link>
          <Link
            href="#"
            className={`text-sm font-medium ${
              activeTab === "messages" ? "text-primary" : "text-muted-foreground"
            } transition-colors hover:text-primary`}
            onClick={() => setActiveTab("messages")}
          >
            Messages
          </Link>
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <Button variant="ghost" size="icon" className="text-muted-foreground" onClick={handleLogout}>
            <LogOut className="h-5 w-5" />
            <span className="sr-only">Logout</span>
          </Button>
        </div>
      </header>
      <main className="flex-1 p-4 md:p-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
              <p className="text-muted-foreground">Manage your website content and view analytics.</p>
            </div>
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="gallery">Gallery</TabsTrigger>
              <TabsTrigger value="events">Events</TabsTrigger>
              <TabsTrigger value="careers">Careers</TabsTrigger>
              <TabsTrigger value="statistics">Statistics</TabsTrigger>
              <TabsTrigger value="messages">Messages</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Visitors</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12,345</div>
                  <p className="text-xs text-muted-foreground">+15% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Upcoming Events</CardTitle>
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">8</div>
                  <p className="text-xs text-muted-foreground">3 events this week</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Gallery Items</CardTitle>
                  <Image className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">24</div>
                  <p className="text-xs text-muted-foreground">6 added this month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">New Messages</CardTitle>
                  <Mail className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12</div>
                  <p className="text-xs text-muted-foreground">5 unread messages</p>
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Website Traffic</CardTitle>
                  <CardDescription>Visitor statistics for the past 30 days</CardDescription>
                </CardHeader>
                <CardContent className="pl-2">
                  <div className="h-[300px] flex items-center justify-center">
                    <BarChart className="h-16 w-16 text-muted-foreground/50" />
                    <span className="ml-4 text-muted-foreground">
                      Traffic analytics visualization would appear here
                    </span>
                  </div>
                </CardContent>
              </Card>
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Recent Messages</CardTitle>
                  <CardDescription>Latest contact form submissions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="flex items-start gap-4">
                        <MessageSquare className="mt-1 h-5 w-5 text-primary" />
                        <div>
                          <p className="font-medium">John Doe</p>
                          <p className="text-sm text-muted-foreground">Inquiry about volunteer opportunities...</p>
                          <p className="text-xs text-muted-foreground">{new Date().toLocaleDateString()}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="gallery" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Gallery Management</CardTitle>
                <CardDescription>Add, edit, or remove images from the gallery</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-end mb-4">
                  <Button className="bg-primary hover:bg-primary/90">Add New Image</Button>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                    <div
                      key={i}
                      className="relative group overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm"
                    >
                      <div className="relative h-40 w-full">
                        <div
                          className="absolute inset-0 bg-cover bg-center"
                          style={{
                            backgroundImage: `url('/placeholder.svg?height=200&width=300')`,
                          }}
                        ></div>
                      </div>
                      <div className="p-3">
                        <h3 className="text-sm font-medium">Gallery Image {i}</h3>
                        <p className="text-xs text-muted-foreground">Added on {new Date().toLocaleDateString()}</p>
                      </div>
                      <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="flex gap-2">
                          <Button size="sm" variant="secondary">
                            Edit
                          </Button>
                          <Button size="sm" variant="destructive">
                            Delete
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="events" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Events Management</CardTitle>
                <CardDescription>Add, edit, or remove events from the website</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-end mb-4">
                  <Button className="bg-primary hover:bg-primary/90">Add New Event</Button>
                </div>
                <div className="space-y-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="flex flex-col md:flex-row gap-4 p-4 border rounded-lg">
                      <div className="relative h-40 md:w-64 w-full flex-shrink-0">
                        <div
                          className="absolute inset-0 bg-cover bg-center rounded-md"
                          style={{
                            backgroundImage: `url('/placeholder.svg?height=200&width=300')`,
                          }}
                        ></div>
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-lg font-bold">Event Title {i}</h3>
                        <div className="flex flex-wrap gap-x-4 gap-y-2 my-2">
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span>{new Date().toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Users className="h-4 w-4 mr-1" />
                            <span>Location {i}</span>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                          labore et dolore magna aliqua.
                        </p>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            Edit
                          </Button>
                          <Button size="sm" variant="destructive">
                            Delete
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="careers" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Careers Management</CardTitle>
                <CardDescription>Add, edit, or remove job and volunteer opportunities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-end mb-4 gap-2">
                  <Button variant="outline">Add Volunteer Opportunity</Button>
                  <Button className="bg-primary hover:bg-primary/90">Add Job Posting</Button>
                </div>
                <div className="space-y-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="p-4 border rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="text-lg font-bold">
                            {i % 2 === 0 ? "Job Title" : "Volunteer Position"} {i}
                          </h3>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <FileText className="h-4 w-4 mr-1" />
                            <span>Department {i}</span>
                            <span className="mx-2">•</span>
                            <span>Location {i}</span>
                          </div>
                        </div>
                        <div>
                          <Button
                            size="sm"
                            variant={i % 2 === 0 ? "default" : "outline"}
                            className={i % 2 === 0 ? "bg-primary" : ""}
                          >
                            {i % 2 === 0 ? "Job" : "Volunteer"}
                          </Button>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                      </p>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          Edit
                        </Button>
                        <Button size="sm" variant="destructive">
                          Delete
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="statistics" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Statistics Management</CardTitle>
                <CardDescription>Update the statistics displayed on the homepage</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="stat1">Cases Handled</Label>
                      <div className="flex gap-2">
                        <Input id="stat1" defaultValue="5000" />
                        <Input defaultValue="+" className="w-16" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="stat2">Volunteers</Label>
                      <div className="flex gap-2">
                        <Input id="stat2" defaultValue="200" />
                        <Input defaultValue="+" className="w-16" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="stat3">Community Partners</Label>
                      <div className="flex gap-2">
                        <Input id="stat3" defaultValue="50" />
                        <Input defaultValue="" className="w-16" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="stat4">Years of Service</Label>
                      <div className="flex gap-2">
                        <Input id="stat4" defaultValue="12" />
                        <Input defaultValue="" className="w-16" />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <Button className="bg-primary hover:bg-primary/90">Update Statistics</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="messages" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Contact Form Submissions</CardTitle>
                <CardDescription>View and manage messages from the contact form</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="p-4 border rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-bold">John Doe</h3>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Mail className="h-4 w-4 mr-1" />
                            <span>john.doe@example.com</span>
                            <span className="mx-2">•</span>
                            <span>(123) 456-7890</span>
                          </div>
                        </div>
                        <div className="text-sm text-muted-foreground">{new Date().toLocaleDateString()}</div>
                      </div>
                      <div className="mb-2">
                        <h4 className="text-sm font-medium">
                          Subject: {i % 2 === 0 ? "General Inquiry" : "Volunteer Application"}
                        </h4>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.
                      </p>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          Mark as Read
                        </Button>
                        <Button size="sm" variant="outline">
                          Reply
                        </Button>
                        <Button size="sm" variant="destructive">
                          Delete
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

