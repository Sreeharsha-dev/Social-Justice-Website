"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function WhoWeArePage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <main className="min-h-screen pt-20">
      <div className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-6">
            <div className="w-2 bg-primary h-12 mr-4"></div>
            <h1 className="text-4xl md:text-5xl font-bold">Who we are</h1>
          </div>
        </div>
      </div>

      <section className="py-12" ref={ref}>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-1 bg-primary h-8 mr-4"></div>
                <h2 className="text-3xl font-bold">About The Social Justice Forum</h2>
              </div>

              <div className="space-y-6 text-muted-foreground">
                <p>
                  Rooted in love, justice, trust, respect for the dignity of life and to create a healthy, compassionate
                  and responsive world, Social Justice Forum blossomed in the mind of its Founder to serve the unwanted,
                  uncared, unloved and underserved to help them to achieve their full potential.
                </p>

                <p>
                  The Social Justice Forum, an empowered, dynamic, effective and vibrant organisation established in
                  2010 in New York, USA owes its legal allegiance to Social Justice Charitable Trust under the Trust Act
                  1961 to serve for the welfare of the underprivileged communities irrespective of caste, creed,
                  language and religion.
                </p>

                <p>
                  The Foundation embarks on the Noble Mission to spread love among the poor and to achieve extraordinary
                  improvements in human life by promoting the well-being of humanity in all aspects, we mainly focus in
                  the fields of education, health, community development, elderly care and disaster relief. The Social
                  Justice Forum undertakes appropriate support programs, initiatives and social projects that have
                  sustainable impact and are instrumental in transforming the lives of the poor. We strive to imitate
                  St. Mother Teresa in all its programs, approach and in all the ways to make this world a better place
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-1 bg-primary h-8 mr-4"></div>
                <h2 className="text-3xl font-bold">Milestones</h2>
              </div>

              <div className="relative pl-8 border-l-2 border-primary/20 space-y-12">
                <div className="relative">
                  <div className="absolute -left-10 top-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
                    <span className="text-lg">1</span>
                  </div>
                  <div className="absolute -left-[5.5rem] top-1 text-primary font-bold text-xl">2010</div>
                  <Card className="shadow-md">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-primary mb-2">Foundation Established</h3>
                      <p className="text-muted-foreground">
                        The Social Justice Forum was established & registered in 2010
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="relative">
                  <div className="absolute -left-10 top-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
                    <span className="text-lg">2</span>
                  </div>
                  <div className="absolute -left-[5.5rem] top-1 text-primary font-bold text-xl">2010</div>
                  <Card className="shadow-md">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-primary mb-2">Social Justice Anbu Illam (Orphanage)</h3>
                      <p className="text-muted-foreground">
                        Our first project The Social Justice Anbu Illam (Orphanage) was launched in 2010
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="relative">
                  <div className="absolute -left-10 top-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
                    <span className="text-lg">3</span>
                  </div>
                  <div className="absolute -left-[5.5rem] top-1 text-primary font-bold text-xl">2012</div>
                  <Card className="shadow-md">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-primary mb-2">Legal Aid Program</h3>
                      <p className="text-muted-foreground">
                        Launched our comprehensive legal aid program to provide free legal services to underserved
                        communities
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="relative">
                  <div className="absolute -left-10 top-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
                    <span className="text-lg">4</span>
                  </div>
                  <div className="absolute -left-[5.5rem] top-1 text-primary font-bold text-xl">2015</div>
                  <Card className="shadow-md">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-primary mb-2">Community Outreach Expansion</h3>
                      <p className="text-muted-foreground">
                        Expanded our community outreach programs to five additional cities across the country
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="relative">
                  <div className="absolute -left-10 top-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
                    <span className="text-lg">5</span>
                  </div>
                  <div className="absolute -left-[5.5rem] top-1 text-primary font-bold text-xl">2020</div>
                  <Card className="shadow-md">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-primary mb-2">10 Year Anniversary</h3>
                      <p className="text-muted-foreground">
                        Celebrated 10 years of service with the launch of our digital advocacy platform
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-8">
            <div className="w-1 bg-primary h-8 mr-4"></div>
            <h2 className="text-3xl font-bold">Our Mission & Vision</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To promote social justice and protect legal rights through advocacy, education, and direct services,
                ensuring that all individuals have equal access to justice and opportunities regardless of their
                socioeconomic status, race, gender, or background.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                A world where justice, equality, and human dignity are upheld for all people; where systemic barriers to
                justice are eliminated; and where every individual has the knowledge, resources, and support needed to
                advocate for themselves and their communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-8">
            <div className="w-1 bg-primary h-8 mr-4"></div>
            <h2 className="text-3xl font-bold">Our Team</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-64 w-full">
                  <Image
                    src={`/placeholder.svg?height=300&width=300`}
                    alt={`Team Member ${i}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold">John Doe</h3>
                  <p className="text-primary font-medium">Executive Director</p>
                  <p className="text-muted-foreground mt-2">
                    With over 15 years of experience in social justice advocacy and nonprofit leadership.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

