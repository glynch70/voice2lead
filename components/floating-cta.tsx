"use client"

import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"
import Link from "next/link"

export function FloatingCTA() {
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <Button
        asChild
        size="lg"
        className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg hover:shadow-xl transition-all"
      >
        <Link href="/contact" className="flex items-center gap-2">
          <Calendar className="h-5 w-5" />
          Book Demo
        </Link>
      </Button>
    </div>
  )
}
