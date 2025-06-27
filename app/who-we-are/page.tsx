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
                <h2 className="text-3xl font-bold">About Us</h2>
              </div>

              <div className="space-y-6 text-muted-foreground">
                <p>
                It is a voluntary, humanitarian, non-governmental, Non- Political, non-Communal, non-Sectarian and also non-profit making society. The benefits of the society can function any where India. That the society shall not carry out any activity outside of India.

                </p>

                <p>
                1. To empower and promote Legal Rights through proper cell for all possible development and welfare of society.

                </p>

                <p>
                  
2. To protect and awareness on Legal Rights for the needy people and detect the cases in the society through the proper channel and bringing it in front of Government.

                </p>
                <p>
                3. The right to be protected against marketing of goods and services which are hazardous to life and property.

                </p>
                <p>
                4. The right to be informed about the quality, quantity, potency, purity, standard and price of goods or services, as the case may be, so as to protect the consumers against unfair trade practices.
                </p>
                <p>
                5. The right to be assured, wherever possible, of access to a variety of goods and services at competitive prices.
                </p>
                <p>
                6. The right to be heard and to be assured that consumers' interests will receive due consideration at appropriate forums.
                </p>
                <p>
                7. The right to seek redressal against unfair trade practices or restrictive trade practices or unscrupulous exploitation of consumers.
                </p>
                <p>
                8. To provide support services to old age people, destitute and orphans by way of food and shelter with possible manner for their well being.
                </p>
                <p>
                9. To conduct women empowerment and awareness programmes and trainings on Human Rights and Consumer Protection with the consideration of local public.
                </p>
                <p>
10. To conduct health and sanitary awareness camps and programmes. To conduct care and education support for HIV/AIDS affected and infected persons including kith and kin of these persons by way of providing relief and rehabilitation activities.
                </p>  
                <p>
                11. To consider the activities would be purely charitable/ non-religious in nature and not motivated for profit and the society shall be irrevocable.
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
                  <div className="absolute -left-[5.5rem] top-1 text-primary font-bold text-xl">2020</div>
                  <Card className="shadow-md">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-primary mb-2">Foundation Established</h3>
                      <p className="text-muted-foreground">
                        The Social Justice And Legal Rights Forum was founded to empower and uplift the underprivileged, marking the beginning of our journey for justice and equality.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="relative">
                  <div className="absolute -left-10 top-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
                    <span className="text-lg">2</span>
                  </div>
                  <div className="absolute -left-[5.5rem] top-1 text-primary font-bold text-xl">2022</div>
                  <Card className="shadow-md">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-primary mb-2">Empowering Young Learners</h3>
                      <p className="text-muted-foreground">
                        Distributed essential accessories to government school children, helping them pursue their education with confidence and dignity.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="relative">
                  <div className="absolute -left-10 top-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
                    <span className="text-lg">3</span>
                  </div>
                  <div className="absolute -left-[5.5rem] top-1 text-primary font-bold text-xl">2022</div>
                  <Card className="shadow-md">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-primary mb-2">Celebrating Academic Excellence</h3>
                      <p className="text-muted-foreground">
                        Honored a young talent who achieved Mandal First in 10th examinations, supporting her next steps with a scholarship for further studies.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="relative">
                  <div className="absolute -left-10 top-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
                    <span className="text-lg">4</span>
                  </div>
                  <div className="absolute -left-[5.5rem] top-1 text-primary font-bold text-xl">2023</div>
                  <Card className="shadow-md">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-primary mb-2">Lifesavers in Action</h3>
                      <p className="text-muted-foreground">
                        Provided urgent blood support to over 90 individuals, including pregnant women, making a life-saving difference in critical moments.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="relative">
                  <div className="absolute -left-10 top-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
                    <span className="text-lg">5</span>
                  </div>
                  <div className="absolute -left-[5.5rem] top-1 text-primary font-bold text-xl">2024</div>
                  <Card className="shadow-md">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-primary mb-2">Supporting Future Scholars</h3>
                      <p className="text-muted-foreground">
                        Distributed exam accessories to government students, empowering the next generation to excel in their academic pursuits.
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
              To promote legal awareness, uphold consumer rights, and support vulnerable communities through voluntary, humanitarian efforts. We are committed to empowering citizens with knowledge, protecting the underprivileged, advocating for justice, and offering welfare services—ensuring all actions remain non-political, non-profit, and inclusive across India.


              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
              A just, informed, and compassionate society where every individual, regardless of background, enjoys equal legal rights, consumer protection, social dignity, and access to essential services.
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

          {/* Horizontally scrollable team members */}
          <div className="flex gap-6 overflow-x-auto pb-4" style={{ WebkitOverflowScrolling: 'touch' }}>
            {[
              {
               name: "Naresh Babu Reddycherla",
               role: "Founder & President",
               image: "/images/naresh.jpg",
               description: "Visionary leader with 15+ years in social justice and nonprofit advocacy."
              },
                {
                  name: "D.Sudeer Kumar",
                  role: "Vice President",
                  image: "/images/vicepresident.jpg",
                  description: "Legal expert committed to advancing human rights and legal aid."
                },
                {
                  name: "P. Naveen Chandrakanth",
                  role: "Secretary",
                  image: "/images/NaveenChandra.jpg",
                  description: "Drives initiatives in public health, education, and legal awareness."
                },
                {
                  name: "C. Yugandhar",
                  role: "Joint Secretary",
                  image: "/images/image.png",
                  description: "Manages volunteer coordination and community development events."
                },
                
                {
                  name: "Sumathi Chalasani",
                  role: "Treasurer",
                  image: "https://th.bing.com/th/id/OIP.ooDzxNLznRyw2Qfck-9rcwHaHa?r=0&rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3",
                  description: "Experienced in nonprofit finance and grassroots community engagement."
                },
                {
                  name: "T. Omkar",
                  role: "Executive Member",
                  image: "/images/image.png",
                  description: "Supports outreach operations and facilitates welfare programs."
                },
                {
                  name: "M. Raja",
                  role: "Executive Member",
                  image: "/images/image.png",
                  description: "Assists in mobilizing community resources and organizing initiatives."
                }

            ].map((member, i) => (
              <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden min-w-[200px] max-w-xs flex-shrink-0">
                <div className="relative h-64 w-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-primary font-medium">{member.role}</p>
                  <p className="text-muted-foreground mt-2">
                    {member.description}
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

