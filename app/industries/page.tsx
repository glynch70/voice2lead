import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FloatingCTA } from "@/components/floating-cta"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { Wrench, Zap, Hammer, Home, Droplet, Paintbrush, Scissors, Car, ArrowRight, Play } from "lucide-react"

export default function IndustriesPage() {
  const industries = [
    {
      icon: Droplet,
      title: "Plumbers",
      description: "Capture emergency calls 24/7 and never miss a burst pipe job again",
      benefits: ["Emergency call handling", "Job urgency assessment", "Location capture"],
    },
    {
      icon: Zap,
      title: "Electricians",
      description: "Qualify electrical jobs while you're working on site",
      benefits: ["Safety assessment", "Job complexity evaluation", "Appointment scheduling"],
    },
    {
      icon: Hammer,
      title: "Builders",
      description: "Screen project inquiries and book site visits automatically",
      benefits: ["Project scope gathering", "Budget qualification", "Timeline discussion"],
    },
    {
      icon: Home,
      title: "Roofers",
      description: "Handle seasonal demand spikes without missing opportunities",
      benefits: ["Damage assessment", "Insurance claim support", "Weather-based scheduling"],
    },
    {
      icon: Wrench,
      title: "HVAC Technicians",
      description: "Prioritize emergency heating and cooling calls",
      benefits: ["System type identification", "Urgency prioritization", "Service history tracking"],
    },
    {
      icon: Paintbrush,
      title: "Decorators",
      description: "Qualify interior and exterior painting projects",
      benefits: ["Room measurements", "Surface preparation needs", "Color consultation booking"],
    },
    {
      icon: Scissors,
      title: "Landscapers",
      description: "Book garden maintenance and design consultations",
      benefits: ["Property size assessment", "Service type qualification", "Seasonal scheduling"],
    },
    {
      icon: Car,
      title: "Auto Repair",
      description: "Triage vehicle issues and book service appointments",
      benefits: ["Problem diagnosis", "Vehicle information capture", "Service bay scheduling"],
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />
      <FloatingCTA />

      {/* Hero - video cover: voice_to_lead_video_thumb.png (neon logo) */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-slate-900 via-slate-800 to-background">
        <div className="container mx-auto max-w-4xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance text-white">Built For Trades & Services</h1>
              <p className="text-xl text-slate-300 text-pretty leading-relaxed">
                Voice2Lead understands your industry and qualifies leads with the right questions
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative rounded-2xl shadow-2xl overflow-hidden w-full max-w-[400px] aspect-[4/5]">
                <Image
                  src="/images/voice_to_lead_video_thumb.png"
                  alt="Voice2Lead - AI Phone Assistant for Trades"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 400px"
                  priority
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center transition-opacity hover:bg-black/30">
                  <div className="h-16 w-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg" aria-hidden>
                    <Play className="h-8 w-8 text-slate-900 ml-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => {
              const Icon = industry.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{industry.title}</CardTitle>
                    <CardDescription>{industry.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {industry.benefits.map((benefit, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Industry-Specific Benefits */}
      <section className="py-20 px-4 bg-muted">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Trades Love Voice2Lead</h2>
            <p className="text-muted-foreground">We understand the unique challenges of running a trades business</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Work Without Interruption</CardTitle>
                <CardDescription>
                  Stay focused on the job at hand. No more stopping mid-task to answer calls or missing important leads
                  because you're on a ladder.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Capture After-Hours Leads</CardTitle>
                <CardDescription>
                  Many customers call outside business hours. Voice2Lead works 24/7 to capture emergency jobs and
                  weekend inquiries.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Filter Time-Wasters</CardTitle>
                <CardDescription>
                  Our AI asks qualifying questions to identify serious customers with realistic budgets, saving you time
                  on callbacks.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Professional First Impression</CardTitle>
                <CardDescription>
                  Every call is answered promptly and professionally, even during your busiest seasons, building trust
                  with potential customers.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Droplet className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Case Study: Thompson Plumbing</h3>
                  <p className="text-muted-foreground">London-based plumbing service</p>
                </div>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong className="text-foreground">The Challenge:</strong> Mike Thompson was missing 3-4 calls daily
                  while on jobs, losing an estimated £2,000+ in monthly revenue. Emergency calls were going to
                  competitors.
                </p>
                <p>
                  <strong className="text-foreground">The Solution:</strong> Implemented Voice2Lead with custom
                  emergency call handling and calendar integration for non-urgent appointments.
                </p>
                <p>
                  <strong className="text-foreground">The Results:</strong> Within 3 months, Mike captured 100% of
                  inbound calls, booked 12 additional jobs per month, and increased revenue by 35%. Emergency response
                  time improved dramatically.
                </p>
              </div>
              <div className="mt-8">
                <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link href="/contact">
                    Get Similar Results <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-muted">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Grow Your Business?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join hundreds of trades professionals who never miss a lead
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/contact">Start Free Trial</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
