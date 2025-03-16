import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Users, BookOpen, Calendar, MapPin } from "lucide-react"

export default function CommunityOutreachPage() {
  return (
    <main className="min-h-screen pt-20">
      <div className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Community Outreach</h1>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-3xl mx-auto text-center">
            Our community programs educate the public about their legal rights and responsibilities, empowering
            individuals to advocate for themselves and their communities.
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 md:order-1">
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=800&width=600"
                  alt="Community Outreach"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl z-0"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary/20 rounded-full blur-2xl z-0"></div>
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-block rounded-lg bg-primary/10 p-3 mb-6">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold mb-6">Empowering Communities</h2>
              <p className="text-muted-foreground mb-6">
                Our Community Outreach Program is dedicated to educating and empowering communities through workshops,
                seminars, and educational materials about legal rights and responsibilities.
              </p>
              <p className="text-muted-foreground mb-6">
                We believe that knowledge is power, and by providing individuals with information about their rights, we
                can help them advocate for themselves and their communities. Our outreach efforts focus on underserved
                communities that often face barriers to accessing legal information and services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-primary hover:bg-primary/90" asChild>
                  <Link href="/events">Upcoming Workshops</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/contact?subject=Community Outreach Inquiry">Request a Workshop</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Outreach Programs</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-background p-6 rounded-lg shadow-md">
              <div className="inline-block rounded-lg bg-primary/10 p-3 mb-4">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Know Your Rights Workshops</h3>
              <p className="text-muted-foreground">
                Interactive workshops that educate community members about their legal rights in various situations,
                including interactions with law enforcement, housing, employment, and more.
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-md">
              <div className="inline-block rounded-lg bg-primary/10 p-3 mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Community Legal Education</h3>
              <p className="text-muted-foreground">
                Educational programs in schools, community centers, and other venues that teach about the legal system,
                civil rights, and how to navigate legal processes.
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-md">
              <div className="inline-block rounded-lg bg-primary/10 p-3 mb-4">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Legal Information Fairs</h3>
              <p className="text-muted-foreground">
                Community events where individuals can learn about various legal topics, connect with legal resources,
                and receive informational materials.
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-md">
              <div className="inline-block rounded-lg bg-primary/10 p-3 mb-4">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Mobile Legal Clinics</h3>
              <p className="text-muted-foreground">
                Traveling legal clinics that bring legal information and services directly to underserved communities,
                particularly in rural areas.
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-md">
              <div className="inline-block rounded-lg bg-primary/10 p-3 mb-4">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Educational Materials</h3>
              <p className="text-muted-foreground">
                Development and distribution of easy-to-understand guides, brochures, and digital resources on various
                legal topics in multiple languages.
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-md">
              <div className="inline-block rounded-lg bg-primary/10 p-3 mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Train-the-Trainer Programs</h3>
              <p className="text-muted-foreground">
                Programs that train community leaders and advocates to provide basic legal information to their
                communities, expanding our reach and impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Recent Outreach Activities</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative group overflow-hidden rounded-lg shadow-md">
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Community Workshop"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-lg font-bold mb-1">Tenant Rights Workshop</h3>
                  <div className="flex items-center text-sm">
                    <Calendar className="h-3 w-3 mr-1" />
                    <span className="mr-3">March 15, 2023</span>
                    <MapPin className="h-3 w-3 mr-1" />
                    <span>Community Center</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-md">
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Legal Information Fair"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-lg font-bold mb-1">Legal Information Fair</h3>
                  <div className="flex items-center text-sm">
                    <Calendar className="h-3 w-3 mr-1" />
                    <span className="mr-3">February 20, 2023</span>
                    <MapPin className="h-3 w-3 mr-1" />
                    <span>Public Library</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-md">
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Youth Education Program"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-lg font-bold mb-1">Youth Education Program</h3>
                  <div className="flex items-center text-sm">
                    <Calendar className="h-3 w-3 mr-1" />
                    <span className="mr-3">January 10, 2023</span>
                    <MapPin className="h-3 w-3 mr-1" />
                    <span>Local High School</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <Button className="bg-primary hover:bg-primary/90" asChild>
              <Link href="/gallery">View More Outreach Activities</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Request a Workshop or Presentation</h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            We offer workshops and presentations on various legal topics for community groups, schools, and
            organizations. Contact us to request a workshop for your group.
          </p>
          <Button className="bg-white text-primary hover:bg-white/90" size="lg" asChild>
            <Link href="/contact?subject=Workshop Request">Request a Workshop</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}

