import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FloatingCTA } from "@/components/floating-cta"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import Image from "next/image"
import { Phone, MessageSquare, CheckCircle, Settings, Bell, Calendar, ArrowRight, Play } from "lucide-react"

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <FloatingCTA />

      {/* Hero - video cover uses Voice2Lead neon logo (voice_to_lead_video_thumb.png) */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-slate-900 via-slate-800 to-background">
        <div className="container mx-auto max-w-4xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance text-white">How Voice2Lead Works</h1>
              <p className="text-xl text-slate-300 text-pretty leading-relaxed">
                Discover how our AI-powered system captures and qualifies every lead for your business
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

      {/* Detailed Steps */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-16">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-shrink-0">
                <div className="h-20 w-20 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-3xl font-bold">
                  1
                </div>
              </div>
              <Card className="flex-1">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Customer Calls Your Number</CardTitle>
                  <CardDescription>
                    When a potential customer calls your business number, Voice2Lead instantly picks up - no waiting, no
                    missed calls. Whether you're on a ladder, under a sink, or in a meeting, we've got you covered 24/7.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-shrink-0">
                <div className="h-20 w-20 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-3xl font-bold">
                  2
                </div>
              </div>
              <Card className="flex-1">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>AI Assistant Answers Professionally</CardTitle>
                  <CardDescription>
                    Our UK-accented AI assistant greets the caller professionally, understands their needs, and asks
                    relevant questions to qualify the lead. The conversation feels natural and friendly, just like
                    speaking to a real receptionist.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-shrink-0">
                <div className="h-20 w-20 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-3xl font-bold">
                  3
                </div>
              </div>
              <Card className="flex-1">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <CheckCircle className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle>Qualified Leads Delivered to You</CardTitle>
                  <CardDescription>
                    Receive instant notifications via SMS and email with all the lead details: customer name, contact
                    info, job description, urgency, and budget. You can follow up when it suits you, knowing every
                    detail is captured.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-muted">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to capture and manage leads effectively
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <Settings className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-lg">Custom Greetings</CardTitle>
                <CardDescription>
                  Personalize how the AI answers with your business name and custom greeting message
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Bell className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-lg">Instant Notifications</CardTitle>
                <CardDescription>Get SMS and email alerts immediately when a qualified lead comes in</CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Calendar className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-lg">Calendar Integration</CardTitle>
                <CardDescription>
                  Sync with Google Calendar or Outlook to book appointments automatically
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Phone className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-lg">UK Accent Voices</CardTitle>
                <CardDescription>Natural-sounding British voices that customers trust and understand</CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <MessageSquare className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-lg">Smart Qualification</CardTitle>
                <CardDescription>AI asks the right questions to filter quality leads from time-wasters</CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CheckCircle className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-lg">Lead Scoring</CardTitle>
                <CardDescription>Automatically prioritize leads based on urgency, budget, and job type</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Demo Video Section - cover: voice_to_lead_video_thumb.png */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">See It In Action</h2>
          <p className="text-muted-foreground mb-8">Watch how Voice2Lead handles a real customer call</p>
          <div className="relative aspect-video rounded-lg overflow-hidden border border-border shadow-lg">
            <Image
              src="/images/voice_to_lead_video_thumb.png"
              alt="Voice2Lead demo video - Watch how it works"
              fill
              className="object-cover"
              sizes="(max-width: 896px) 100vw, 896px"
            />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center transition-opacity hover:bg-black/30 cursor-pointer">
              <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-full bg-white/90 flex items-center justify-center shadow-lg" aria-hidden>
                <Play className="h-10 w-10 sm:h-12 sm:w-12 text-slate-900 ml-1" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-muted">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How quickly can I get started?</AccordionTrigger>
              <AccordionContent>
                You can be up and running in under 5 minutes. Simply sign up, customize your greeting, and forward your
                business number to your Voice2Lead number. No technical knowledge required.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>Does it sound like a real person?</AccordionTrigger>
              <AccordionContent>
                Yes! Our AI uses advanced natural language processing with authentic UK accents. Most customers don't
                realize they're speaking to an AI assistant. The conversations flow naturally and professionally.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>What happens if the AI can't answer a question?</AccordionTrigger>
              <AccordionContent>
                If the AI encounters a question it can't handle, it politely takes the customer's details and lets them
                know you'll call back shortly. You'll receive an immediate notification with the customer's query.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>Can I customize what the AI says?</AccordionTrigger>
              <AccordionContent>
                You can customize greetings, qualifying questions, and responses to match your business style. Our
                Professional and Enterprise plans offer even more customization options.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>Is my data secure?</AccordionTrigger>
              <AccordionContent>
                Yes. We're GDPR compliant with UK-based servers. All call data is encrypted and stored securely. We
                never share your customer information with third parties.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>Can I try it before committing?</AccordionTrigger>
              <AccordionContent>
                Yes! We offer a 14-day free trial with no credit card required. Test all features and see how it works
                for your business before making any commitment.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Start capturing every lead today with your 14-day free trial
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/contact">
              Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
