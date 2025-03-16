import About from "@/components/about"
import WorkDone from "@/components/work-done"
import Statistics from "@/components/statistics"
import ContactCta from "@/components/contact-cta"

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-20">
      <div className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">About Us</h1>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-3xl mx-auto text-center">
            Learn about our mission, vision, values, and the work we do to promote social justice and legal rights.
          </p>
        </div>
      </div>
      <About />
      <WorkDone />
      <Statistics />
      <ContactCta />
    </main>
  )
}

