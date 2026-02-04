"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export function FloatingDemo() {
  return (
    <a
      href="https://dunseroofclean.lovable.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-6 z-40 group"
    >
      <Button
        size="lg"
        className="h-16 w-16 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-slate-600 hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-110 transition-all duration-300 text-white border-0 animate-bounce-gentle shadow-xl relative"
      >
        <span className="absolute -top-1 -right-1 text-xl">🏴󠁧󠁢󠁳󠁣󠁴󠁿</span>
        <MessageCircle className="h-6 w-6" />
      </Button>
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-background border border-border px-3 py-1 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
        Talk to Scottish Carl
      </span>
    </a>
  )
}
