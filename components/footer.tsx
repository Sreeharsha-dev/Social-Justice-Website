"use client"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-muted py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative w-10 h-10">
                <Image src="/images/hero.jpg?height=40&width=40" alt="Logo" fill className="object-contain" />
              </div>
              <span className="font-bold text-lg">Social Justice & Legal Rights Forum</span>
            </Link>
            <p className="text-muted-foreground">
              Advocating for justice and equality for all through legal aid, education, and community engagement.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/profile.php?id=61577863854037"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              {/* <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </Link> */}
              <Link
                href="https://www.instagram.com/socialjusticeandlegalrights/"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="http://www.linkedin.com/in/social-justice-and-legal-rights-forum"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.youtube.com/channel/UCUJ-iUnuNXvth6nzZXtFKwQ"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/who-we-are" className="text-muted-foreground hover:text-primary transition-colors">
                  Who We Are
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-muted-foreground hover:text-primary transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-muted-foreground hover:text-primary transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-muted-foreground hover:text-primary transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy & Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/legal-aid" className="text-muted-foreground hover:text-primary transition-colors">
                  Legal Aid
                </Link>
              </li>
              <li>
                <Link
                  href="/services/community-outreach"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Community Outreach
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/services/policy-advocacy"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Policy Advocacy
                </Link>
              </li>
              <li>
                <Link href="/services/education" className="text-muted-foreground hover:text-primary transition-colors">
                  Education & Research
                </Link>
              </li> */}
              <li>
                <Link
                  href="/careers?type=volunteer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Volunteer Opportunities
                </Link>
              </li>
            </ul>
          </div>

          {/* <div>
            <h3 className="font-bold text-lg mb-4">Newsletter</h3>
            <p className="text-muted-foreground mb-4">
              Subscribe to our newsletter to receive updates on our work and upcoming events.
            </p>
            <div className="flex space-x-2">
              <Input type="email" placeholder="Your email" className="max-w-lg flex-1" />
              <Button className="bg-primary hover:bg-primary/90">
                <Mail className="h-4 w-4" />
                <span className="sr-only">Subscribe</span>
              </Button>
            </div>
          </div> */}
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Social Justice & Legal Rights Forum. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link
                href="/privacy-policy"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy & Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookie-policy"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

