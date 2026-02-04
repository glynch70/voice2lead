import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Facebook, Youtube } from "lucide-react"

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <Image
                src="/images/voice2lead-logo.png"
                alt="Voice2Lead"
                width={224}
                height={56}
                className="h-12 sm:h-14 w-auto"
              />
            </Link>
            <p className="text-sm text-muted-foreground mb-4">Never Miss A Lead Again</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-3 sm:mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/how-it-works"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Industries
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-3 sm:mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-3 sm:mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <a href="tel:07973502311" className="hover:text-primary transition-colors">
                  07973 502311
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <a href="mailto:steven.summone@gmail.com" className="hover:text-primary transition-colors break-all">
                  steven.summone@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Glasgow, Scotland</span>
              </li>
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">UK-Based</span>
              <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">GDPR Compliant</span>
              <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Secure</span>
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <Image
              src="/images/qr-code.jpeg"
              alt="Scan QR code to visit Voice2Lead"
              width={120}
              height={150}
              className="w-24 sm:w-[150px]"
            />

            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">Follow us:</span>
              <a
                href="https://www.facebook.com/profile.php?id=61585485847314"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCqeFLnmk2bESv5t7bZn8fsw"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-red-600 text-white hover:bg-red-700 transition-colors"
                aria-label="Subscribe on YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="https://www.tiktok.com/@voicetoleadscotland"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-black text-white hover:bg-gray-800 transition-colors"
                aria-label="Follow us on TikTok"
              >
                <TikTokIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-border text-center text-xs sm:text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Voice2Lead. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
