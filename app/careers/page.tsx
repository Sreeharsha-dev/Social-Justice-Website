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
    location: "India, Andhra Pradesh",
    department: "Legal",
    postedDate: "May 15, 2025",
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

