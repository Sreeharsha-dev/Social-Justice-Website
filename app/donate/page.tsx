"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/hooks/use-toast"
import { CreditCard, IndianRupee, Heart, Users, Building, User, Mail, Phone, Home } from "lucide-react"

declare global {
  interface Window {
    Razorpay: any
  }
}

export default function DonatePage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const router = useRouter()
  const { toast } = useToast()
  const [step, setStep] = useState(1)
  const [donationType, setDonationType] = useState("oneTime")
  const [donationAmount, setDonationAmount] = useState("1000")
  const [customAmount, setCustomAmount] = useState("")
  const [donorInfo, setDonorInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "India",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Load Razorpay script
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://checkout.razorpay.com/v1/checkout.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  const handleDonorInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setDonorInfo((prev) => ({ ...prev, [name]: value }))
  }

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9.]/g, "")
    setCustomAmount(value)
    setDonationAmount("custom")
  }

  const createRazorpayOrder = async (amount: number) => {
    try {
      const response = await fetch('/api/payment/create-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount,
          currency: 'INR',
          receipt: `donation_${Date.now()}`,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to create order')
      }

      return await response.json()
    } catch (error) {
      console.error('Error creating order:', error)
      throw error
    }
  }

  const verifyPayment = async (paymentData: any) => {
    try {
      const response = await fetch('/api/payment/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(paymentData),
      })

      if (!response.ok) {
        throw new Error('Payment verification failed')
      }

      return await response.json()
    } catch (error) {
      console.error('Error verifying payment:', error)
      throw error
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const amount = getActualAmount()
      
      // Create Razorpay order
      const orderData = await createRazorpayOrder(amount)

      // Initialize Razorpay payment
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: orderData.amount,
        currency: orderData.currency,
        name: 'Social Justice Forum',
        description: `${donationType === 'oneTime' ? 'One-time' : 'Monthly'} Donation`,
        order_id: orderData.orderId,
        prefill: {
          name: `${donorInfo.firstName} ${donorInfo.lastName}`,
          email: donorInfo.email,
          contact: donorInfo.phone,
        },
        notes: {
          address: donorInfo.address,
          city: donorInfo.city,
          state: donorInfo.state,
          zipCode: donorInfo.zipCode,
          country: donorInfo.country,
          donationType,
        },
        theme: {
          color: '#0f172a',
        },
        handler: async function (response: any) {
          try {
            // Verify payment
            await verifyPayment({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            })

            toast({
              title: "Donation Successful!",
              description: "Thank you for your generous donation!",
            })

            router.push("/donate/thank-you")
          } catch (error) {
            toast({
              title: "Payment Verification Failed",
              description: "Please contact support if the amount was deducted.",
              variant: "destructive",
            })
          }
        },
        modal: {
          ondismiss: function () {
            setIsSubmitting(false)
          },
        },
      }

      const razorpay = new window.Razorpay(options)
      razorpay.open()
    } catch (error) {
      console.error('Payment error:', error)
      toast({
        title: "Payment Failed",
        description: "Unable to process payment. Please try again.",
        variant: "destructive",
      })
      setIsSubmitting(false)
    }
  }

  const getActualAmount = () => {
    if (donationAmount === "custom") {
      return customAmount ? Number.parseFloat(customAmount) : 0
    }
    return Number.parseFloat(donationAmount)
  }

  return (
    <main className="min-h-screen pt-20">
      <div className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Make a Donation</h1>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-3xl mx-auto text-center">
            Your donation helps us provide legal aid, education, and advocacy to those who need it most. Together, we
            can create a more just and equitable society.
          </p>
        </div>
      </div>

      <section className="py-12" ref={ref}>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="shadow-md">
                <CardHeader>
                  <CardTitle>Donation Form</CardTitle>
                  <CardDescription>
                    {step === 1 ? "Choose your donation amount" : "Complete your donor information"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {step === 1 ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="mb-6">
                        <Label className="text-base font-medium mb-2 block">Donation Type</Label>
                        <Tabs defaultValue={donationType} onValueChange={setDonationType} className="w-full">
                          <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="oneTime">One-time</TabsTrigger>
                            <TabsTrigger value="monthly">Monthly</TabsTrigger>
                          </TabsList>
                        </Tabs>
                      </div>

                      <div className="mb-6">
                        <Label className="text-base font-medium mb-2 block">Donation Amount</Label>
                        <RadioGroup
                          value={donationAmount}
                          onValueChange={setDonationAmount}
                          className="grid grid-cols-2 md:grid-cols-3 gap-4"
                        >
                          {["500", "1000", "2000", "5000", "10000"].map((amount) => (
                            <div key={amount} className="relative">
                              <RadioGroupItem value={amount} id={`amount-${amount}`} className="peer sr-only" />
                              <Label
                                htmlFor={`amount-${amount}`}
                                className="flex flex-col items-center justify-center rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                              >
                                <IndianRupee className="mb-2 h-6 w-6" />
                                <span className="text-xl font-bold">₹{amount}</span>
                              </Label>
                            </div>
                          ))}
                          <div className="relative">
                            <RadioGroupItem value="custom" id="amount-custom" className="peer sr-only" />
                            <Label
                              htmlFor="amount-custom"
                              className="flex flex-col items-center justify-center rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                            >
                              <IndianRupee className="mb-2 h-6 w-6" />
                              <Input
                                type="text"
                                placeholder="Custom"
                                value={customAmount}
                                onChange={handleCustomAmountChange}
                                onClick={() => setDonationAmount("custom")}
                                className="w-full text-center border-0 p-0 focus-visible:ring-0 text-xl font-bold"
                              />
                            </Label>
                          </div>
                        </RadioGroup>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <form onSubmit={handleSubmit}>
                        <div className="space-y-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <Label htmlFor="firstName">First Name</Label>
                              <div className="relative">
                                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                                <Input
                                  id="firstName"
                                  name="firstName"
                                  value={donorInfo.firstName}
                                  onChange={handleDonorInfoChange}
                                  placeholder="John"
                                  className="pl-10"
                                  required
                                />
                              </div>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="lastName">Last Name</Label>
                              <div className="relative">
                                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                                <Input
                                  id="lastName"
                                  name="lastName"
                                  value={donorInfo.lastName}
                                  onChange={handleDonorInfoChange}
                                  placeholder="Doe"
                                  className="pl-10"
                                  required
                                />
                              </div>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <Label htmlFor="email">Email</Label>
                              <div className="relative">
                                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                                <Input
                                  id="email"
                                  name="email"
                                  type="email"
                                  value={donorInfo.email}
                                  onChange={handleDonorInfoChange}
                                  placeholder="john.doe@example.com"
                                  className="pl-10"
                                  required
                                />
                              </div>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="phone">Phone</Label>
                              <div className="relative">
                                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                                <Input
                                  id="phone"
                                  name="phone"
                                  value={donorInfo.phone}
                                  onChange={handleDonorInfoChange}
                                  placeholder="+91 98765 43210"
                                  className="pl-10"
                                  required
                                />
                              </div>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="address">Address</Label>
                            <div className="relative">
                              <Home className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                              <Input
                                id="address"
                                name="address"
                                value={donorInfo.address}
                                onChange={handleDonorInfoChange}
                                placeholder="123 Main Street"
                                className="pl-10"
                                required
                              />
                            </div>
                          </div>

                          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            <div className="space-y-2">
                              <Label htmlFor="city">City</Label>
                              <Input
                                id="city"
                                name="city"
                                value={donorInfo.city}
                                onChange={handleDonorInfoChange}
                                placeholder="Mumbai"
                                required
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="state">State</Label>
                              <Input
                                id="state"
                                name="state"
                                value={donorInfo.state}
                                onChange={handleDonorInfoChange}
                                placeholder="Maharashtra"
                                required
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="zipCode">PIN Code</Label>
                              <Input
                                id="zipCode"
                                name="zipCode"
                                value={donorInfo.zipCode}
                                onChange={handleDonorInfoChange}
                                placeholder="400001"
                                required
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="country">Country</Label>
                              <Input
                                id="country"
                                name="country"
                                value={donorInfo.country}
                                onChange={handleDonorInfoChange}
                                placeholder="India"
                                required
                              />
                            </div>
                          </div>
                        </div>
                      </form>
                    </motion.div>
                  )}
                </CardContent>
                <CardFooter className="flex justify-between">
                  {step === 2 && (
                    <Button variant="outline" onClick={() => setStep(1)}>
                      Back
                    </Button>
                  )}
                  {step === 1 ? (
                    <Button
                      className="ml-auto bg-primary hover:bg-primary/90"
                      onClick={() => setStep(2)}
                      disabled={donationAmount === "custom" && !customAmount}
                    >
                      Continue
                    </Button>
                  ) : (
                    <Button
                      className="ml-auto bg-primary hover:bg-primary/90"
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Processing..." : "Proceed to Payment"}
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </div>

            <div>
              <Card className="shadow-md sticky top-24">
                <CardHeader>
                  <CardTitle>Donation Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Donation Type:</span>
                      <span className="font-medium">{donationType === "oneTime" ? "One-time" : "Monthly"}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Amount:</span>
                      <span className="font-bold text-xl">₹{getActualAmount().toFixed(2)}</span>
                    </div>
                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center font-bold">
                        <span>Total:</span>
                        <span className="text-xl">₹{getActualAmount().toFixed(2)}</span>
                      </div>
                      {donationType === "monthly" && (
                        <p className="text-sm text-muted-foreground mt-1">
                          You will be charged ₹{getActualAmount().toFixed(2)} monthly until canceled.
                        </p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="mt-6 space-y-6">
                <div className="bg-muted/50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Heart className="h-5 w-5 text-primary mr-2" />
                    <h3 className="font-semibold">Your Impact</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Your donation helps provide free legal services, educational workshops, and advocacy for those who
                    need it most.
                  </p>
                </div>

                <div className="bg-muted/50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Users className="h-5 w-5 text-primary mr-2" />
                    <h3 className="font-semibold">Who We Help</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Your support directly impacts individuals and families facing legal challenges, housing insecurity,
                    and civil rights violations.
                  </p>
                </div>

                <div className="bg-muted/50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Building className="h-5 w-5 text-primary mr-2" />
                    <h3 className="font-semibold">Tax Deductible</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    The Social Justice Forum is a registered nonprofit organization. Your donation is tax-deductible to
                    the extent allowed by law.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

