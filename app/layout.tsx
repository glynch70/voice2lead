import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Voice2Lead - Never Miss A Lead Again | AI Phone Assistant for UK Trades",
  description:
    "AI-powered phone answering that qualifies leads 24/7 whilst you're on the job. Perfect for UK trades businesses. Setup in 24 hours.",
  generator: "v0.app",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Voice2Lead - Never Miss A Lead Again",
    description: "AI-powered phone answering that qualifies leads 24/7 whilst you're on the job",
    type: "website",
    locale: "en_GB",
    siteName: "Voice2Lead",
  },
  twitter: {
    card: "summary_large_image",
    title: "Voice2Lead - Never Miss A Lead Again",
    description: "AI-powered phone answering that qualifies leads 24/7 whilst you're on the job",
  },
  keywords: [
    "AI phone assistant",
    "UK trades",
    "lead generation",
    "phone answering service",
    "24/7 answering",
    "trade business",
    "missed calls",
    "AI receptionist",
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <Suspense fallback={<div>Loading...</div>}>
          {children}
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
