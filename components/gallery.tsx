"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Calendar, MapPin } from "lucide-react"

// Sample gallery data
const galleryData = [
  {
    id: 1,
    title: "Legal Aid Workshop",
    date: "March 15, 2023",
    location: "Community Center",
    image: "/placeholder.svg?height=600&width=800",
    description:
      "Our legal aid workshop provided free legal advice to over 50 community members on issues ranging from housing rights to immigration concerns.",
  },
  {
    id: 2,
    title: "Youth Advocacy Program",
    date: "February 20, 2023",
    location: "Local High School",
    image: "/placeholder.svg?height=600&width=800",
    description:
      "Our youth advocacy program engages high school students in discussions about social justice and empowers them to become advocates in their communities.",
  },
  {
    id: 3,
    title: "Community Outreach Event",
    date: "January 10, 2023",
    location: "Public Park",
    image: "/placeholder.svg?height=600&width=800",
    description:
      "Our community outreach event brought together local organizations and community members to discuss pressing social issues and collaborate on solutions.",
  },
  {
    id: 4,
    title: "Annual Conference",
    date: "December 5, 2022",
    location: "Convention Center",
    image: "/placeholder.svg?height=600&width=800",
    description:
      "Our annual conference featured keynote speakers, panel discussions, and workshops on various aspects of social justice and legal rights.",
  },
  {
    id: 5,
    title: "Volunteer Training",
    date: "November 18, 2022",
    location: "Office Headquarters",
    image: "/placeholder.svg?height=600&width=800",
    description:
      "Our volunteer training program prepares individuals to assist with our legal aid clinics, community outreach events, and administrative tasks.",
  },
  {
    id: 6,
    title: "Fundraising Gala",
    date: "October 22, 2022",
    location: "Grand Hotel",
    image: "/placeholder.svg?height=600&width=800",
    description:
      "Our annual fundraising gala raised over $100,000 to support our programs and services for the coming year.",
  },
]

export default function Gallery() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [selectedImage, setSelectedImage] = useState<(typeof galleryData)[0] | null>(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      },
    },
  }

  return (
    <section id="gallery" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Gallery</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Take a look at our past events and activities through our gallery. Click on an image to learn more about the
            event.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {galleryData.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md"
              onClick={() => setSelectedImage(item)}
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                  <div className="flex items-center text-sm">
                    <Calendar className="h-3 w-3 mr-1" />
                    <span className="mr-3">{item.date}</span>
                    <MapPin className="h-3 w-3 mr-1" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Image Details Dialog */}
        <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
          {selectedImage && (
            <DialogContent className="sm:max-w-[600px] md:max-w-[700px]">
              <DialogHeader>
                <DialogTitle className="text-2xl">{selectedImage.title}</DialogTitle>
                <DialogDescription>
                  <div className="flex items-center gap-4 mt-2">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-primary" />
                      <span>{selectedImage.date}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-primary" />
                      <span>{selectedImage.location}</span>
                    </div>
                  </div>
                </DialogDescription>
              </DialogHeader>
              <div className="relative h-80 w-full my-4">
                <Image
                  src={selectedImage.image || "/placeholder.svg"}
                  alt={selectedImage.title}
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <p>{selectedImage.description}</p>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </section>
  )
}

