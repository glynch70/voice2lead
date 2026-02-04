import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CalculatorWidget } from "@/components/calculator-widget"
import { PresenterVideo } from "@/components/presenter-video"
import Link from "next/link"
import Script from "next/script"
import Image from "next/image"
import { Phone, CheckCircle, Calendar, MessageSquare, Bell, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Voice2Lead - AI Phone Assistant for UK Trades | Never Miss A Lead",
  description:
    "AI-powered 24/7 phone answering service for UK trades businesses. Qualify leads, book jobs, and never miss a customer call again. Setup in 24 hours.",
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />

      <Navigation />

      <main>
        <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 bg-gradient-to-br from-slate-50 via-white to-cyan-50">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-start">
              {/* Left side - Value Proposition */}
              <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-12 space-y-6 sm:space-y-8 animate-slide-in-left">
                <div className="flex justify-center lg:justify-start">
                  <Image
                    src="/images/voice2lead-logo.png"
                    alt="Voice2Lead Logo"
                    width={192}
                    height={192}
                    className="h-32 w-32 sm:h-48 sm:w-48"
                  />
                </div>

                <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-slate-900 leading-tight text-center lg:text-left">
                  Never miss a customer call again.
                </h1>

                <p className="text-lg sm:text-xl text-slate-600 leading-relaxed text-center lg:text-left">
                  AI phone assistant for UK businesses. Answers 24/7, qualifies leads, books jobs.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-slate-900 hover:bg-slate-800 text-white rounded-full px-6 sm:px-8 h-12 sm:h-14 text-base sm:text-lg font-medium w-full sm:w-auto"
                  >
                    <Link href="#booking">Book free call</Link>
                  </Button>

                  <Button
                    asChild
                    size="lg"
                    className="bg-green-600 hover:bg-green-700 text-white rounded-full px-6 sm:px-8 h-12 sm:h-14 text-base sm:text-lg font-medium w-full sm:w-auto"
                  >
                    <a href="https://dunseroofclean.lovable.app/" target="_blank" rel="noopener noreferrer">
                      See our demo →
                    </a>
                  </Button>
                </div>

                <div className="pt-4 sm:pt-6">
                  <PresenterVideo src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/V2L.2-zaQKu8TR5OjlhChlgbwqSptOGeiZx3.mp4" label="See how Voice2Lead works" />
                </div>
              </div>

              {/* Right side - Calculator */}
              <div className="bg-slate-50 rounded-2xl sm:rounded-3xl p-6 sm:p-12 space-y-4 sm:space-y-6 animate-slide-in-right">
                <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm">
                  Revenue Calculator
                </Badge>

                <h2 className="text-2xl sm:text-4xl font-bold text-slate-900">See what missed calls cost you</h2>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  Every unanswered call is lost revenue. Use our calculator to see exactly how much you're leaving on
                  the table.
                </p>

                <div className="flex items-start gap-2 text-slate-600">
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-red-500 flex-shrink-0 mt-1" />
                  <p className="text-xs sm:text-sm">
                    Average UK trades business loses <span className="font-bold text-slate-900">£156,000</span> per year
                    from missed calls
                  </p>
                </div>

                <CalculatorWidget />

                <div className="text-center pt-2">
                  <Link
                    href="/calculator"
                    className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium transition-colors text-sm sm:text-base"
                  >
                    Want to be more accurate? Try our advanced calculator
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24 px-4 sm:px-6 bg-cyan-50">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-8 sm:mb-12 animate-fade-in">
              <Badge className="bg-slate-900 text-white hover:bg-slate-800 mb-4 sm:mb-6 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm">
                Built for Real UK Businesses
              </Badge>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-slate-900 tracking-tight">
                See the difference Voice2Lead makes
              </h2>
              <p className="text-base sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                Hear from businesses just like yours who never miss a lead
              </p>
            </div>

            <PresenterVideo src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/V2L.2-zaQKu8TR5OjlhChlgbwqSptOGeiZx3.mp4" label="Built for real UK businesses" className="animate-scale-in" />
          </div>
        </section>

        <section className="py-16 sm:py-32 px-4 sm:px-6 bg-slate-900">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12 sm:mb-20 animate-fade-in">
              <Badge className="bg-white text-slate-900 hover:bg-slate-100 mb-4 sm:mb-6 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm">
                Simple Process
              </Badge>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-white tracking-tight">
                How it works
              </h2>
              <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                Three simple steps to never miss a customer again
              </p>
            </div>

            <div className="space-y-10 sm:space-y-16 max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 sm:gap-8 items-start animate-slide-in-left">
                <div className="flex-shrink-0 mx-auto md:mx-0">
                  <div className="h-12 w-12 sm:h-16 sm:w-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white flex items-center justify-center text-xl sm:text-2xl font-bold">
                    1
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="flex flex-col md:flex-row items-center gap-3 mb-3 sm:mb-4">
                    <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                      <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-cyan-400" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-white">Customer calls your number</h3>
                  </div>
                  <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                    When a potential customer calls, Voice2Lead instantly picks up. No waiting, no missed calls. Whether
                    you're on site, in a meeting, or after hours, we've got you covered 24/7.
                  </p>
                </div>
              </div>

              <div
                className="flex flex-col md:flex-row gap-4 sm:gap-8 items-start animate-slide-in-left"
                style={{ animationDelay: "0.1s" }}
              >
                <div className="flex-shrink-0 mx-auto md:mx-0">
                  <div className="h-12 w-12 sm:h-16 sm:w-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 text-white flex items-center justify-center text-xl sm:text-2xl font-bold">
                    2
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="flex flex-col md:flex-row items-center gap-3 mb-3 sm:mb-4">
                    <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                      <MessageSquare className="h-5 w-5 sm:h-6 sm:w-6 text-pink-400" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-white">
                      AI assistant answers professionally
                    </h3>
                  </div>
                  <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                    Our UK-accented AI greets the caller, understands their needs, and asks relevant questions to
                    qualify the lead. Natural conversation that feels just like speaking to a real receptionist.
                  </p>
                </div>
              </div>

              <div
                className="flex flex-col md:flex-row gap-4 sm:gap-8 items-start animate-slide-in-left"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="flex-shrink-0 mx-auto md:mx-0">
                  <div className="h-12 w-12 sm:h-16 sm:w-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 text-white flex items-center justify-center text-xl sm:text-2xl font-bold">
                    3
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="flex flex-col md:flex-row items-center gap-3 mb-3 sm:mb-4">
                    <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center">
                      <Bell className="h-5 w-5 sm:h-6 sm:w-6 text-orange-400" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-white">Qualified leads delivered to you</h3>
                  </div>
                  <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                    Receive instant SMS and email notifications with all lead details: name, contact info, job
                    description, urgency, and budget. Follow up when it suits you, knowing every detail is captured.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-32 px-4 sm:px-6 bg-slate-50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12 sm:mb-20 animate-fade-in">
              <Badge className="bg-slate-900 text-white hover:bg-slate-800 mb-4 sm:mb-6 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm">
                Features
              </Badge>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-slate-900 tracking-tight">
                Stop losing customers
              </h2>
              <p className="text-base sm:text-xl text-slate-600 max-w-2xl mx-auto">
                Every missed call is money left on the table. Here's what we solve.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12">
              <div className="text-center hover-lift animate-slide-in-left">
                <div className="h-12 w-12 sm:h-16 sm:w-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Phone className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-slate-900">24/7 availability</h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Answer every call, even when you're on site or after hours.
                </p>
              </div>

              <div className="text-center hover-lift animate-slide-in-left" style={{ animationDelay: "0.1s" }}>
                <div className="h-12 w-12 sm:h-16 sm:w-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <CheckCircle className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-slate-900">Qualify leads</h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  AI asks the right questions to filter quality customers.
                </p>
              </div>

              <div
                className="text-center hover-lift animate-slide-in-left sm:col-span-2 md:col-span-1"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="h-12 w-12 sm:h-16 sm:w-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Calendar className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-slate-900">Book instantly</h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Schedule appointments automatically while competitors wait.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="booking" className="py-16 sm:py-32 px-4 sm:px-6 bg-white">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-8 sm:mb-12 animate-fade-in">
              <Badge className="bg-slate-900 text-white hover:bg-slate-800 mb-4 sm:mb-6 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm">
                Booking
              </Badge>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-slate-900 tracking-tight">
                Book a free discovery call
              </h2>
              <p className="text-base sm:text-xl text-slate-600 leading-relaxed">
                Schedule a time to discuss how Voice2Lead can benefit your business.
              </p>
            </div>

            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/steven-summone/1-hr-online"
                style={{ minWidth: "280px", height: "600px" }}
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
