"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Clock, MapPin, Search, Filter } from "lucide-react"
import Image from "next/image"

// Sample events data
const eventsData = [
  {
    id: 1,
    title: "Legal Rights Workshop",
    date: "April 15, 2023",
    time: "10:00 AM - 12:00 PM",
    location: "Community Center, 123 Main St",
    category: "workshop",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "Join us for an informative workshop on understanding your legal rights in the workplace. Our expert attorneys will cover topics such as employment discrimination, workplace harassment, and wage theft. This workshop is designed for individuals who want to better understand their rights and how to protect themselves in the workplace.",
    details:
      "This free workshop will include a presentation, Q&A session, and one-on-one consultations with attorneys. Light refreshments will be provided. Registration is required as space is limited.",
  },
  {
    id: 2,
    title: "Annual Fundraising Gala",
    date: "May 20, 2023",
    time: "6:30 PM - 10:00 PM",
    location: "Grand Hotel Ballroom, 456 Park Ave",
    category: "fundraiser",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "Our annual fundraising gala brings together supporters, partners, and community members for an evening of celebration and support for our cause. Join us for dinner, entertainment, and a silent auction to raise funds for our legal aid programs. This is our biggest fundraising event of the year.",
    details:
      "Tickets are $150 per person or $1,200 for a table of eight. Formal attire is requested. The evening will include a three-course dinner, live music, keynote speaker, and silent auction featuring items donated by local businesses and artists.",
  },
  {
    id: 3,
    title: "Community Legal Clinic",
    date: "June 10, 2023",
    time: "1:00 PM - 5:00 PM",
    location: "Public Library, 789 Elm St",
    category: "clinic",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "Our monthly community legal clinic provides free legal consultations to those in need. Volunteer attorneys will be available to answer questions and provide guidance on various legal matters, including family law, housing issues, and immigration concerns.",
    details:
      "No appointment necessary. Consultations are available on a first-come, first-served basis. Please bring any relevant documents related to your legal question. Translation services are available in Spanish and Mandarin.",
  },
  {
    id: 4,
    title: "Youth Justice Conference",
    date: "July 8-9, 2023",
    time: "9:00 AM - 4:00 PM",
    location: "University Conference Center, 321 College Rd",
    category: "conference",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "A two-day conference focusing on juvenile justice reform and youth advocacy. This event brings together legal professionals, social workers, educators, and youth advocates to discuss current issues and innovative approaches to juvenile justice.",
    details:
      "Registration fee is $75 for professionals and $25 for students. The conference includes keynote speeches, panel discussions, workshops, and networking opportunities. Continuing education credits are available for attorneys and social workers.",
  },
  {
    id: 5,
    title: "Know Your Rights Seminar",
    date: "August 15, 2023",
    time: "6:00 PM - 8:00 PM",
    location: "Community College, 555 Education Blvd",
    category: "seminar",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "This seminar focuses on educating community members about their constitutional rights during interactions with law enforcement. Learn what to do and say if you're stopped by police, questioned, or arrested.",
    details:
      "This event is free and open to the public. No registration required. Materials will be provided in English and Spanish. Light refreshments will be served.",
  },
  {
    id: 6,
    title: "Immigration Rights Workshop",
    date: "September 5, 2023",
    time: "11:00 AM - 2:00 PM",
    location: "Cultural Center, 777 Diversity Ave",
    category: "workshop",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "This workshop provides information on immigration rights, recent policy changes, and resources available to immigrants and their families. Immigration attorneys will be present to answer questions.",
    details:
      "This workshop is free and confidential. No documentation status will be asked. Translation services available in Spanish, Mandarin, and Arabic. Free childcare provided during the workshop.",
  },
  {
    id: 7,
    title: "Legal Aid Benefit Concert",
    date: "October 12, 2023",
    time: "7:00 PM - 11:00 PM",
    location: "City Amphitheater, 888 Music Lane",
    category: "fundraiser",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "Join us for a night of amazing music to benefit our legal aid programs. Local bands and musicians will perform to raise funds for our organization's work providing free legal services to those in need.",
    details:
      "Tickets are $25 in advance, $30 at the door. Food and beverages will be available for purchase. Bring a blanket or lawn chair for seating. All proceeds go directly to funding our legal aid programs.",
  },
  {
    id: 8,
    title: "Housing Rights Clinic",
    date: "November 8, 2023",
    time: "10:00 AM - 3:00 PM",
    location: "Neighborhood Center, 999 Community St",
    category: "clinic",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "This special clinic focuses on housing rights, eviction prevention, and tenant protections. Attorneys specializing in housing law will provide free consultations and advice.",
    details:
      "Walk-ins welcome, but appointments are recommended. Please bring any relevant documents such as lease agreements, notices from landlords, or court papers. Resource materials will be available to take home.",
  },
]

export default function EventsPage() {
  const [selectedEvent, setSelectedEvent] = useState<(typeof eventsData)[0] | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")

  const filteredEvents = eventsData.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.location.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesCategory = categoryFilter === "all" || event.category === categoryFilter

    return matchesSearch && matchesCategory
  })

  return (
    <main className="min-h-screen pt-20">
      <div className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Events</h1>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-3xl mx-auto text-center">
            Join us at our upcoming events to learn more about social justice issues, connect with like-minded
            individuals, and get involved in our work.
          </p>
        </div>
      </div>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search events..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="w-full md:w-64">
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger>
                  <div className="flex items-center">
                    <Filter className="mr-2 h-4 w-4" />
                    <SelectValue placeholder="Filter by category" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="workshop">Workshops</SelectItem>
                  <SelectItem value="conference">Conferences</SelectItem>
                  <SelectItem value="fundraiser">Fundraisers</SelectItem>
                  <SelectItem value="clinic">Legal Clinics</SelectItem>
                  <SelectItem value="seminar">Seminars</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {filteredEvents.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No events found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents.map((event) => (
                <Card
                  key={event.id}
                  className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="pt-6 flex-grow">
                    <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <p className="mt-4 text-sm text-muted-foreground line-clamp-3">{event.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full" onClick={() => setSelectedEvent(event)}>
                      View Details
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Event Details Dialog */}
      <Dialog open={!!selectedEvent} onOpenChange={(open) => !open && setSelectedEvent(null)}>
        {selectedEvent && (
          <DialogContent className="sm:max-w-[600px] md:max-w-[700px]">
            <DialogHeader>
              <DialogTitle className="text-2xl">{selectedEvent.title}</DialogTitle>
              <DialogDescription>
                <div className="flex flex-col md:flex-row md:items-center gap-4 mt-4 mb-6">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-primary" />
                    <span>{selectedEvent.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-primary" />
                    <span>{selectedEvent.time}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-primary" />
                    <span>{selectedEvent.location}</span>
                  </div>
                </div>
              </DialogDescription>
            </DialogHeader>
            <div className="relative h-60 w-full mb-6">
              <Image
                src={selectedEvent.image || "/placeholder.svg"}
                alt={selectedEvent.title}
                fill
                className="object-cover rounded-md"
              />
            </div>
            <div className="space-y-4">
              <p>{selectedEvent.description}</p>
              <div>
                <h4 className="font-semibold mb-2">Event Details</h4>
                <p>{selectedEvent.details}</p>
              </div>
            </div>
            <div className="flex justify-end gap-4 mt-6">
              <Button variant="outline" onClick={() => setSelectedEvent(null)}>
                Close
              </Button>
              <Button className="bg-primary hover:bg-primary/90">Register Now</Button>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </main>
  )
}

