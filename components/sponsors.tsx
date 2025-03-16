"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Sample sponsors data
const sponsorsData = [
  {
    id: 1,
    name: "Acme Corporation",
    logo: "/placeholder.svg?height=100&width=200",
  },
  {
    id: 2,
    name: "Global Tech",
    logo: "/placeholder.svg?height=100&width=200",
  },
  {
    id: 3,
    name: "Eco Solutions",
    logo: "/placeholder.svg?height=100&width=200",
  },
  {
    id: 4,
    name: "Bright Future Foundation",
    logo: "/placeholder.svg?height=100&width=200",
  },
  {
    id: 5,
    name: "Innovate Inc",
    logo: "/placeholder.svg?height=100&width=200",
  },
  {
    id: 6,
    name: "Community Bank",
    logo: "/placeholder.svg?height=100&width=200",
  },
  {
    id: 7,
    name: "United Healthcare",
    logo: "/placeholder.svg?height=100&width=200",
  },
  {
    id: 8,
    name: "Green Energy Co",
    logo: "/placeholder.svg?height=100&width=200",
  },
]

export default function Sponsors() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef
      const scrollAmount = 300

      if (direction === "left") {
        current.scrollBy({ left: -scrollAmount, behavior: "smooth" })
      } else {
        current.scrollBy({ left: scrollAmount, behavior: "smooth" })
      }
    }
  }

  return (
    <section className="py-16 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Sponsors</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            We are grateful to our corporate partners and sponsors who support our mission and help us make a difference
            in the community.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full shadow-md bg-background hover:bg-background/90"
              onClick={() => scroll("left")}
            >
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
              className="flex gap-8 overflow-x-auto py-8 scrollbar-hide"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {sponsorsData.map((sponsor) => (
                <div
                  key={sponsor.id}
                  className="flex-shrink-0 w-48 h-24 bg-white rounded-lg shadow-md flex items-center justify-center p-4 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={sponsor.logo || "/placeholder.svg"}
                      alt={sponsor.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full shadow-md bg-background hover:bg-background/90"
              onClick={() => scroll("right")}
            >
              <ChevronRight className="h-6 w-6" />
              <span className="sr-only">Scroll right</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

