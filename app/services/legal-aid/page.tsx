import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Scale, FileText, Users, Calendar } from "lucide-react"

export default function LegalAidPage() {
  return (
    <main className="min-h-screen pt-20">
      <div className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Legal Aid Services</h1>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-3xl mx-auto text-center">
            We provide pro bono legal services to individuals who cannot afford legal representation, ensuring that
            everyone has access to justice regardless of their financial situation.
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block rounded-lg bg-primary/10 p-3 mb-6">
                <Scale className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold mb-6">Our Legal Aid Program</h2>
              <p className="text-muted-foreground mb-6">
                Our Legal Aid Program provides free legal assistance to low-income individuals and families who cannot
                afford to hire an attorney. We believe that access to legal representation is a fundamental right, not a
                privilege.
              </p>
              <p className="text-muted-foreground mb-6">
                Our team of dedicated attorneys and legal professionals work tirelessly to ensure that everyone has
                access to justice, regardless of their financial situation. We handle a wide range of legal issues, from
                housing and family law to immigration and consumer protection.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-primary hover:bg-primary/90" asChild>
                  <Link href="/contact?subject=Legal Aid Inquiry">Get Legal Help</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/events">Attend a Legal Clinic</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=800&width=600"
                  alt="Legal Aid Services"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl z-0"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary/20 rounded-full blur-2xl z-0"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Legal Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-background p-6 rounded-lg shadow-md">
              <div className="inline-block rounded-lg bg-primary/10 p-3 mb-4">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Family Law</h3>
              <p className="text-muted-foreground">
                We provide assistance with divorce, child custody, child support, domestic violence protection orders,
                and other family law matters.
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-md">
              <div className="inline-block rounded-lg bg-primary/10 p-3 mb-4">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Housing Law</h3>
              <p className="text-muted-foreground">
                We help with eviction defense, landlord-tenant disputes, housing discrimination, and public housing
                issues.
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-md">
              <div className="inline-block rounded-lg bg-primary/10 p-3 mb-4">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Immigration Law</h3>
              <p className="text-muted-foreground">
                We assist with asylum applications, DACA renewals, naturalization, and other immigration matters.
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-md">
              <div className="inline-block rounded-lg bg-primary/10 p-3 mb-4">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Consumer Protection</h3>
              <p className="text-muted-foreground">
                We help with debt collection defense, bankruptcy, predatory lending, and consumer fraud cases.
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-md">
              <div className="inline-block rounded-lg bg-primary/10 p-3 mb-4">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Employment Law</h3>
              <p className="text-muted-foreground">
                We provide assistance with wage theft, workplace discrimination, wrongful termination, and unemployment
                benefits.
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-md">
              <div className="inline-block rounded-lg bg-primary/10 p-3 mb-4">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Public Benefits</h3>
              <p className="text-muted-foreground">
                We help with applications and appeals for Social Security, disability benefits, SNAP, and other public
                assistance programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How to Get Help</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-block rounded-full bg-primary/10 p-6 mb-4">
                <Calendar className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Attend a Legal Clinic</h3>
              <p className="text-muted-foreground mb-4">
                We host regular legal clinics where you can meet with an attorney for a brief consultation. Check our
                events page for upcoming clinics.
              </p>
              <Button variant="outline" asChild>
                <Link href="/events">View Schedule</Link>
              </Button>
            </div>
            <div className="text-center">
              <div className="inline-block rounded-full bg-primary/10 p-6 mb-4">
                <FileText className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Apply Online</h3>
              <p className="text-muted-foreground mb-4">
                Fill out our online application form to request legal assistance. We will review your case and contact
                you within 3-5 business days.
              </p>
              <Button variant="outline" asChild>
                <Link href="/contact?subject=Legal Aid Application">Apply Now</Link>
              </Button>
            </div>
            <div className="text-center">
              <div className="inline-block rounded-full bg-primary/10 p-6 mb-4">
                <Users className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Call Our Hotline</h3>
              <p className="text-muted-foreground mb-4">
                Call our legal aid hotline at (123) 456-7890 to speak with a legal assistant who can help determine if
                you qualify for our services.
              </p>
              <Button variant="outline" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Legal Assistance?</h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            If you're facing a legal issue and cannot afford an attorney, we may be able to help. Contact us today to
            learn more about our legal aid services.
          </p>
          <Button className="bg-white text-primary hover:bg-white/90" size="lg" asChild>
            <Link href="/contact?subject=Legal Aid Inquiry">Get Legal Help Now</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}

