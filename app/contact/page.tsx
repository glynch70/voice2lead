import type { Metadata } from "next"
import ContactClient from "./contact-client"

export const metadata: Metadata = {
  title: "Contact Us | Voice2Lead - Get Started with AI Phone Assistant",
  description:
    "Contact Voice2Lead to start your free trial. AI phone answering for UK trades businesses. Setup in 24 hours. Based in Glasgow, Scotland.",
}

export default function ContactPage() {
  return <ContactClient />
}
