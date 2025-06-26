"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Calendar, Clock, MapPin } from "lucide-react"
import Image from "next/image"

// Sample events data
const eventsData = [
  {
    id: 1,
    title: "Legal Rights Workshop",
    date: "April 15, 2023",
    time: "10:00 AM - 12:00 PM",
    location: "Community Center, 123 Main St",
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
    image: "/placeholder.svg?height=400&width=600",
    description:
      "Our annual fundraising gala brings together supporters, partners, and community members for an evening of celebration and support for our cause. Join us for dinner, entertainment, and a silent auction to raise funds for our legal aid programs. This is our biggest fundraising event of the year.",
    details:
      "Tickets are ₹12,000 per person or ₹96,000 for a table of eight. Formal attire is requested. The evening will include a three-course dinner, live music, keynote speaker, and silent auction featuring items donated by local businesses and artists.",
  },
  {
    id: 3,
    title: "Community Legal Clinic",
    date: "June 10, 2023",
    time: "1:00 PM - 5:00 PM",
    location: "Public Library, 789 Elm St",
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
    image: "/placeholder.svg?height=400&width=600",
    description:
      "A two-day conference focusing on juvenile justice reform and youth advocacy. This event brings together legal professionals, social workers, educators, and youth advocates to discuss current issues and innovative approaches to juvenile justice.",
    details:
      "Registration fee is ₹6,000 for professionals and ₹2,000 for students. The conference includes keynote speeches, panel discussions, workshops, and networking opportunities. Continuing education credits are available for attorneys and social workers.",
  },
]

export default function Events() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [selectedEvent, setSelectedEvent] = useState<(typeof eventsData)[0] | null>(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="events" className="py-20 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Upcoming Events</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Join us at our upcoming events to learn more about social justice issues, connect with like-minded
            individuals, and get involved in our work.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {eventsData.map((event) => (
            <motion.div key={event.id} variants={itemVariants}>
              <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col">
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
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" onClick={() => setSelectedEvent(event)}>
                    View Details
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            View All Events
          </Button>
        </motion.div>

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
      </div>
    </section>
  )
}

