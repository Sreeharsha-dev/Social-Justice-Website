import Hero from "@/components/hero"
import About from "@/components/about"
import WorkDone from "@/components/work-done"
import Statistics from "@/components/statistics"
import Sponsors from "@/components/sponsors"
import Testimonials from "@/components/testimonials"
import HomeEvents from "@/components/home-events"
import HomeGallery from "@/components/home-gallery"
import ContactCta from "@/components/contact-cta"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <WorkDone />
      <Statistics />
      <Sponsors />
      <Testimonials />
      <HomeEvents />
      <HomeGallery />
      <ContactCta />
    </main>
  )
}

