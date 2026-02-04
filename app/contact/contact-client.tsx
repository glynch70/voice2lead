"use client"

import type React from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, Clock, MapPin, ArrowLeft } from "lucide-react"
import { useState } from "react"

export default function ContactClientPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    industry: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({
          name: "",
          email: "",
          phone: "",
          business: "",
          industry: "",
          message: "",
        })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto text-center max-w-4xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 transition-colors mb-6 sm:mb-8 group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 text-balance">Get Started Today</h1>
          <p className="text-lg sm:text-xl text-muted-foreground text-pretty">
            Start your 14-day free trial or get in touch with our team
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Contact Form */}
            <Card className="lg:col-span-2">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-xl sm:text-2xl">Start Your Free Trial</CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  Fill out the form below and we'll get you set up within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0 sm:pt-0">
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        placeholder="John Smith"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="h-11 sm:h-10"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="h-11 sm:h-10"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm">
                        Phone Number *
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="07123 456789"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                        className="h-11 sm:h-10"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="business" className="text-sm">
                        Business Name *
                      </Label>
                      <Input
                        id="business"
                        placeholder="Smith Plumbing Ltd"
                        value={formData.business}
                        onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                        required
                        className="h-11 sm:h-10"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="industry" className="text-sm">
                      Industry *
                    </Label>
                    <Select
                      value={formData.industry}
                      onValueChange={(value) => setFormData({ ...formData, industry: value })}
                    >
                      <SelectTrigger id="industry" className="h-11 sm:h-10">
                        <SelectValue placeholder="Select your industry" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="plumber">Plumber</SelectItem>
                        <SelectItem value="electrician">Electrician</SelectItem>
                        <SelectItem value="builder">Builder</SelectItem>
                        <SelectItem value="roofer">Roofer</SelectItem>
                        <SelectItem value="hvac">HVAC Technician</SelectItem>
                        <SelectItem value="decorator">Decorator</SelectItem>
                        <SelectItem value="landscaper">Landscaper</SelectItem>
                        <SelectItem value="auto">Auto Repair</SelectItem>
                        <SelectItem value="restaurant">Restaurant / Hospitality</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm">
                      Message (Optional)
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your business and what you're looking for..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground h-12 sm:h-11 text-base"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Start Free Trial"}
                  </Button>

                  {submitStatus === "success" && (
                    <p className="text-sm text-green-600 text-center font-medium">
                      Thank you! We'll be in touch within 24 hours.
                    </p>
                  )}
                  {submitStatus === "error" && (
                    <p className="text-sm text-red-600 text-center font-medium">
                      Something went wrong. Please try again or email us directly.
                    </p>
                  )}

                  <p className="text-xs sm:text-sm text-muted-foreground text-center">
                    By submitting this form, you agree to our Terms of Service and Privacy Policy
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-4 sm:space-y-6">
              <Card>
                <CardHeader className="p-4 sm:p-6 pb-2 sm:pb-2">
                  <CardTitle className="text-lg sm:text-xl">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-2 sm:pt-2 space-y-3 sm:space-y-4">
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-sm sm:text-base">Phone</p>
                      <a
                        href="tel:07973502311"
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        07973 502311
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-sm sm:text-base">Email</p>
                      <a
                        href="mailto:steven.summone@gmail.com"
                        className="text-sm text-muted-foreground hover:text-primary transition-colors break-all"
                      >
                        steven.summone@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-sm sm:text-base">Location</p>
                      <p className="text-sm text-muted-foreground">Glasgow, Scotland</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-sm sm:text-base">Support Hours</p>
                      <p className="text-sm text-muted-foreground">Mon-Fri: 9am-6pm GMT</p>
                      <p className="text-sm text-muted-foreground">Sat-Sun: 10am-4pm GMT</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-4 sm:p-6">
                  <h3 className="font-semibold mb-2 text-sm sm:text-base">Need Help?</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-4">
                    Our team is here to answer any questions about Voice2Lead
                  </p>
                  <Button variant="outline" className="w-full bg-transparent h-10 sm:h-9 text-sm">
                    View FAQ
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
