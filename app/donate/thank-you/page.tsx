import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function ThankYouPage() {
  return (
    <main className="min-h-screen pt-20">
      <div className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <CheckCircle className="h-20 w-20 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Thank You for Your Donation!</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Your generous contribution will help us continue our work to promote social justice and protect legal rights
            for those who need it most.
          </p>
          <div className="bg-white p-8 rounded-lg shadow-md max-w-md mx-auto mb-8">
            <h2 className="text-2xl font-bold mb-4">Donation Receipt</h2>
            <div className="space-y-2 text-left mb-6">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Transaction ID:</span>
                <span className="font-medium">TXN-{Math.random().toString(36).substring(2, 10).toUpperCase()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Date:</span>
                <span className="font-medium">{new Date().toLocaleDateString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Amount:</span>
                <span className="font-bold">$50.00</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              A receipt has also been sent to your email address. Please keep it for your tax records.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
              <Link href="/">Return to Home</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}

