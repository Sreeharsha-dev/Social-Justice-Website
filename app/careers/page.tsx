"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Users, MapPin, Calendar, Search } from "lucide-react"

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
  {
    id: 5,
    title: "Policy Analyst",
    type: "job",
    location: "Washington, DC",
    department: "Policy",
    postedDate: "February 25, 2023",
    description:
      "We are seeking a Policy Analyst to research and analyze policies related to social justice and legal rights issues, and to develop policy recommendations.",
    responsibilities: [
      "Research and analyze policies at local, state, and federal levels",
      "Write policy briefs, reports, and recommendations",
      "Monitor legislative developments and regulatory changes",
      "Collaborate with advocacy teams on policy campaigns",
      "Represent the organization at policy forums and meetings",
    ],
    requirements: [
      "Master's degree in public policy, law, or related field",
      "3+ years of experience in policy analysis",
      "Strong research and analytical skills",
      "Excellent writing and communication abilities",
      "Knowledge of social justice and legal rights issues",
    ],
  },
  {
    id: 6,
    title: "Administrative Assistant",
    type: "job",
    location: "Boston, MA",
    department: "Administration",
    postedDate: "February 20, 2023",
    description:
      "We are looking for an Administrative Assistant to provide administrative support to our team and help ensure smooth office operations.",
    responsibilities: [
      "Manage calendars and schedule meetings",
      "Answer phones and respond to emails",
      "Prepare and organize documents",
      "Coordinate travel arrangements",
      "Assist with event planning and logistics",
    ],
    requirements: [
      "Associate's degree or equivalent experience",
      "1+ years of administrative experience",
      "Proficiency in Microsoft Office suite",
      "Strong organizational and time management skills",
      "Excellent communication and interpersonal abilities",
    ],
  },
  {
    id: 7,
    title: "Social Media Volunteer",
    type: "volunteer",
    location: "Remote",
    department: "Communications",
    postedDate: "February 15, 2023",
    description:
      "We are seeking volunteers to help manage our social media presence and create engaging content that raises awareness about our work and social justice issues.",
    responsibilities: [
      "Create and schedule social media posts",
      "Monitor and respond to comments and messages",
      "Develop graphics and visual content",
      "Track social media metrics and engagement",
      "Research and stay updated on social justice issues",
    ],
    requirements: [
      "Experience with social media platforms (Twitter, Facebook, Instagram, LinkedIn)",
      "Strong writing and communication skills",
      "Basic graphic design abilities",
      "Knowledge of social justice issues",
      "Commitment to volunteer for at least 5 hours per week",
    ],
  },
  {
    id: 8,
    title: "Grant Writer",
    type: "job",
    location: "San Francisco, CA",
    department: "Development",
    postedDate: "February 10, 2023",
    description:
      "We are seeking a Grant Writer to research funding opportunities and write grant proposals to support our programs and services.",
    responsibilities: [
      "Research grant opportunities from foundations, corporations, and government agencies",
      "Write compelling grant proposals and applications",
      "Prepare budgets and supporting documents",
      "Track grant deadlines and reporting requirements",
      "Collaborate with program staff to gather information for proposals",
    ],
    requirements: [
      "Bachelor's degree in English, communications, or related field",
      "2+ years of grant writing experience",
      "Proven track record of successful grant applications",
      "Excellent writing and research skills",
      "Strong attention to detail and ability to meet deadlines",
    ],
  },
]

export default function CareersPage() {
  const searchParams = useSearchParams()
  const typeParam = searchParams.get("type") || "all"

  const [activeTab, setActiveTab] = useState(typeParam)
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    // Update the active tab when the URL parameter changes
    if (typeParam) {
      setActiveTab(typeParam)
    }
  }, [typeParam])

  const filteredCareers = careersData.filter((career) => {
    const matchesSearch =
      career.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      career.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      career.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      career.department.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesType = activeTab === "all" || career.type === activeTab

    return matchesSearch && matchesType
  })

  return (
    <main className="min-h-screen pt-20">
      <div className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Careers & Volunteer Opportunities</h1>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-3xl mx-auto text-center">
            Join our team and make a difference in the fight for social justice and legal rights. We offer both
            employment opportunities and volunteer positions.
          </p>
        </div>
      </div>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue={activeTab} value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
              <TabsList>
                <TabsTrigger value="all">All Opportunities</TabsTrigger>
                <TabsTrigger value="job">Jobs</TabsTrigger>
                <TabsTrigger value="volunteer">Volunteer</TabsTrigger>
              </TabsList>

              <div className="relative w-full md:w-64">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search opportunities..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <TabsContent value={activeTab}>
              {filteredCareers.length === 0 ? (
                <div className="text-center py-12">
                  <h3 className="text-xl font-medium mb-2">No opportunities found</h3>
                  <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 gap-6">
                  {filteredCareers.map((career) => (
                    <Card key={career.id} className="h-full hover:shadow-lg transition-shadow duration-300">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-xl">{career.title}</CardTitle>
                          <Badge
                            variant={career.type === "job" ? "default" : "outline"}
                            className={
                              career.type === "job"
                                ? "bg-primary text-primary-foreground"
                                : "border-primary text-primary"
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
                  ))}
                </div>
              )}
            </TabsContent>
          </Tabs>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Don't see a position that fits your skills? We're always looking for talented individuals who are
              passionate about social justice.
            </p>
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10" asChild>
              <Link href="/contact?subject=General Inquiry: Careers">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

