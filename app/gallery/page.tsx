"use client"

import { useState } from "react"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Calendar, MapPin, Search } from "lucide-react"

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
  {
    id: 7,
    title: "Legal Rights Seminar",
    date: "September 15, 2022",
    location: "Community College",
    image: "/placeholder.svg?height=600&width=800",
    description:
      "Our legal rights seminar educated community members about their rights in various situations, including interactions with law enforcement and landlord-tenant disputes.",
  },
  {
    id: 8,
    title: "Board Meeting",
    date: "August 10, 2022",
    location: "Main Office",
    image: "/placeholder.svg?height=600&width=800",
    description:
      "Our board of directors meets quarterly to discuss organizational strategy, review progress, and plan future initiatives.",
  },
  {
    id: 9,
    title: "Summer Youth Program",
    date: "July 5-30, 2022",
    location: "Various Locations",
    image: "/placeholder.svg?height=600&width=800",
    description:
      "Our summer youth program provides educational and recreational activities for young people in underserved communities, focusing on leadership development and civic engagement.",
  },
  {
    id: 10,
    title: "Community Clean-Up Day",
    date: "June 18, 2022",
    location: "City Park",
    image: "/placeholder.svg?height=600&width=800",
    description:
      "Our community clean-up day brought together volunteers to beautify local parks and neighborhoods, fostering community pride and environmental stewardship.",
  },
  {
    id: 11,
    title: "Legal Aid Clinic",
    date: "May 22, 2022",
    location: "Public Library",
    image: "/placeholder.svg?height=600&width=800",
    description:
      "Our legal aid clinic provided free consultations to community members on issues such as family law, housing, and immigration.",
  },
  {
    id: 12,
    title: "Advocacy Training Workshop",
    date: "April 10, 2022",
    location: "Conference Center",
    image: "/placeholder.svg?height=600&width=800",
    description:
      "Our advocacy training workshop equipped community members with the skills and knowledge to effectively advocate for policy changes at the local and state levels.",
  },
]

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<(typeof galleryData)[0] | null>(null)
  const [searchQuery, setSearchQuery] = useState("")

  const filteredGallery = galleryData.filter((item) => {
    return (
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.location.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })

  return (
    <main className="min-h-screen pt-20">
      <div className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Gallery</h1>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-3xl mx-auto text-center">
            Take a look at our past events and activities through our gallery. Click on an image to learn more about the
            event.
          </p>
        </div>
      </div>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="relative max-w-md mx-auto mb-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search gallery..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {filteredGallery.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No gallery items found</h3>
              <p className="text-muted-foreground">Try adjusting your search criteria</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredGallery.map((item) => (
                <div
                  key={item.id}
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
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

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
    </main>
  )
}

