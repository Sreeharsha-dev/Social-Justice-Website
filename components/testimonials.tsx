"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

// Sample testimonials data
const testimonialsData = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Community Member",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "The Social Justice Forum has made a tremendous impact in our community. Their legal aid program helped my family navigate a difficult housing situation when we had nowhere else to turn.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Volunteer",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "Volunteering with the Social Justice Forum has been one of the most rewarding experiences of my life. The organization truly lives its values and makes a real difference in people's lives.",
  },
  {
    id: 3,
    name: "Dr. Amara Patel",
    role: "Partner Organization",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "As a healthcare provider serving vulnerable populations, our partnership with the Social Justice Forum has been invaluable. Together, we've been able to address both the medical and legal needs of our patients.",
  },
  {
    id: 4,
    name: "Robert Williams",
    role: "Former Client",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "When I lost my job and was facing eviction, the Social Justice Forum stepped in and provided the legal support I needed. They didn't just help me with my case; they empowered me to understand my rights.",
  },
  {
    id: 5,
    name: "Elena Rodriguez",
    role: "Community Organizer",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "The educational workshops provided by the Social Justice Forum have been transformative for our community. People now have the knowledge and confidence to advocate for themselves.",
  },
]

export default function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef
      const scrollAmount = 350

      if (direction === "left") {
        current.scrollBy({ left: -scrollAmount, behavior: "smooth" })
      } else {
        current.scrollBy({ left: scrollAmount, behavior: "smooth" })
      }
    }
  }

  return (
    <section className="py-16 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Testimonials</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Hear from the people whose lives have been impacted by our work and the difference we've made in their
            communities.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
            <Button variant="outline" size="icon" className="rounded-full shadow-md" onClick={() => scroll("left")}>
              <ChevronLeft className="h-6 w-6" />
              <span className="sr-only">Scroll left</span>
            </Button>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="overflow-hidden mx-12"
          >
            <div
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-auto py-8 scrollbar-hide"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {testimonialsData.map((testimonial) => (
                <Card
                  key={testimonial.id}
                  className="flex-shrink-0 w-80 shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <CardContent className="p-6">
                    <Quote className="h-8 w-8 text-primary/40 mb-4" />
                    <p className="text-muted-foreground mb-6 italic">"{testimonial.quote}"</p>
                    <div className="flex items-center">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
            <Button variant="outline" size="icon" className="rounded-full shadow-md" onClick={() => scroll("right")}>
              <ChevronRight className="h-6 w-6" />
              <span className="sr-only">Scroll right</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

