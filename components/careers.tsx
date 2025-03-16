"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Users, MapPin, Calendar } from "lucide-react"

// Sample careers data
const careersData = [
  {
    id: 1,
    title: "Legal Associate",
    type: "job",
    location: "New York, NY",
    department: "Legal",
    postedDate: "March 15, 2023",
    description:
      "We are seeking a Legal Associate to join our team. The ideal candidate will have experience in civil rights law and a passion for social justice.",
    responsibilities: [
      "Provide legal assistance to clients",
      "Conduct legal research and analysis",
      "Draft legal documents and correspondence",
      "Represent clients in court proceedings",
      "Collaborate with other team members on cases",
    ],
    requirements: [
      "Juris Doctor (J.D.) degree",
      "Active bar membership",
      "1-3 years of experience in civil rights law",
      "Strong research and writing skills",
      "Commitment to social justice",
    ],
  },
  {
    id: 2,
    title: "Community Outreach Coordinator",
    type: "job",
    location: "Chicago, IL",
    department: "Outreach",
    postedDate: "March 10, 2023",
    description:
      "We are looking for a Community Outreach Coordinator to develop and implement outreach strategies to engage with communities and promote our services.",
    responsibilities: [
      "Develop and implement community outreach strategies",
      "Organize and facilitate community events and workshops",
      "Build and maintain relationships with community partners",
      "Create outreach materials and content",
      "Track and report on outreach activities and outcomes",
    ],
    requirements: [
      "Bachelor's degree in social work, public administration, or related field",
      "2+ years of experience in community outreach or organizing",
      "Strong communication and interpersonal skills",
      "Experience working with diverse communities",
      "Proficiency in Microsoft Office and social media platforms",
    ],
  },
  {
    id: 3,
    title: "Legal Clinic Volunteer",
    type: "volunteer",
    location: "Multiple Locations",
    department: "Legal Aid",
    postedDate: "March 5, 2023",
    description:
      "We are seeking volunteers to assist with our legal clinics. Volunteers will help with client intake, administrative tasks, and providing general support to attorneys.",
    responsibilities: [
      "Assist with client intake and screening",
      "Provide administrative support to attorneys",
      "Help organize and set up legal clinics",
      "Maintain client files and documentation",
      "Provide general support as needed",
    ],
    requirements: [
      "Interest in legal aid and social justice",
      "Strong organizational and communication skills",
      "Ability to maintain confidentiality",
      "Commitment to volunteer for at least 4 hours per week",
      "No legal experience required",
    ],
  },
  {
    id: 4,
    title: "Community Workshop Facilitator",
    type: "volunteer",
    location: "Virtual/In-person",
    department: "Education",
    postedDate: "February 28, 2023",
    description:
      "We are looking for volunteers to facilitate workshops on various legal rights topics. Facilitators will lead discussions, present information, and answer questions from participants.",
    responsibilities: [
      "Facilitate workshops on legal rights topics",
      "Present information in an accessible and engaging manner",
      "Answer questions from participants",
      "Provide feedback on workshop materials and content",
      "Assist with workshop logistics",
    ],
    requirements: [
      "Knowledge of legal rights and social justice issues",
      "Experience in teaching, facilitation, or public speaking",
      "Strong communication and interpersonal skills",
      "Ability to explain complex concepts in simple terms",
      "Commitment to volunteer for at least 2 workshops per month",
    ],
  },
]

export default function Careers() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [activeTab, setActiveTab] = useState("all")

  const filteredCareers = careersData.filter((career) => {
    if (activeTab === "all") return true
    return career.type === activeTab
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="careers" className="py-20 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Careers & Volunteer Opportunities</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Join our team and make a difference in the fight for social justice and legal rights. We offer both
            employment opportunities and volunteer positions.
          </p>
        </motion.div>

        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="all">All Opportunities</TabsTrigger>
              <TabsTrigger value="job">Jobs</TabsTrigger>
              <TabsTrigger value="volunteer">Volunteer</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value={activeTab}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="grid md:grid-cols-2 gap-6"
            >
              {filteredCareers.map((career) => (
                <motion.div key={career.id} variants={itemVariants}>
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-xl">{career.title}</CardTitle>
                        <Badge
                          variant={career.type === "job" ? "default" : "outline"}
                          className={
                            career.type === "job" ? "bg-primary text-primary-foreground" : "border-primary text-primary"
                          }
                        >
                          {career.type === "job" ? "Job" : "Volunteer"}
                        </Badge>
                      </div>
                      <div className="space-y-1 text-sm text-muted-foreground mt-2">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2" />
                          <span>{career.location}</span>
                        </div>
                        <div className="flex items-center">
                          {career.type === "job" ? (
                            <Briefcase className="h-4 w-4 mr-2" />
                          ) : (
                            <Users className="h-4 w-4 mr-2" />
                          )}
                          <span>{career.department}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span>Posted: {career.postedDate}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">{career.description}</p>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Responsibilities:</h4>
                          <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                            {career.responsibilities.map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Requirements:</h4>
                          <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                            {career.requirements.map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-primary hover:bg-primary/90" asChild>
                        <Link
                          href={
                            career.type === "job"
                              ? "/contact?subject=Job Application: " + career.title
                              : "/contact?subject=Volunteer Application: " + career.title
                          }
                        >
                          {career.type === "job" ? "Apply Now" : "Volunteer"}
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Don't see a position that fits your skills? We're always looking for talented individuals who are passionate
            about social justice.
          </p>
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10" asChild>
            <Link href="/contact?subject=General Inquiry: Careers">Contact Us</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

