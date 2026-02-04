"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-200">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href="/" className="flex items-center hover:opacity-70 transition-opacity">
            <Image
              src="/images/voice2lead-logo.png"
              alt="Voice2Lead - AI Phone Assistant for UK Trades"
              width={320}
              height={80}
              className="h-10 sm:h-16 w-auto"
              priority
            />
          </Link>

          <div className="hidden md:flex items-center gap-4 lg:gap-8">
            <Link href="/" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
              Home
            </Link>
            <Link href="/calculator" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
              Calculator
            </Link>
            <Link href="/contact" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
              Contact
            </Link>
            <Button
              asChild
              className="bg-green-600 hover:bg-green-700 text-white rounded-full px-4 lg:px-6 h-10 text-sm font-medium"
            >
              <a href="https://dunseroofclean.lovable.app/" target="_blank" rel="noopener noreferrer">
                Try Demo
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button - larger touch target */}
          <button
            className="md:hidden p-3 -mr-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>

        {/* Mobile Menu - improved spacing and touch targets */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200">
            <div className="flex flex-col gap-1">
              <Link
                href="/"
                className="text-base text-slate-600 hover:text-slate-900 transition-colors py-3 px-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/calculator"
                className="text-base text-slate-600 hover:text-slate-900 transition-colors py-3 px-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Calculator
              </Link>
              <Link
                href="/contact"
                className="text-base text-slate-600 hover:text-slate-900 transition-colors py-3 px-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-2">
                <Button
                  asChild
                  className="bg-green-600 hover:bg-green-700 text-white rounded-full w-full h-12 text-base font-medium"
                >
                  <a href="https://dunseroofclean.lovable.app/" target="_blank" rel="noopener noreferrer">
                    Try Demo
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
