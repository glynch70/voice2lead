"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calculator } from "lucide-react"

export function CalculatorWidget() {
  const [valuePerCall, setValuePerCall] = useState(100)
  const [missedCalls, setMissedCalls] = useState(10)
  const [yearlyLoss, setYearlyLoss] = useState(0)

  const fmt = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 0,
  })

  useEffect(() => {
    const dailyLoss = valuePerCall * missedCalls
    const weeklyLoss = dailyLoss * 7
    const yearly = weeklyLoss * 52
    setYearlyLoss(yearly)
  }, [valuePerCall, missedCalls])

  return (
    <Card className="border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-4 sm:p-8">
        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
          <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
            <Calculator className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900">Calculate Your Loss</h3>
        </div>

        <div className="space-y-4 sm:space-y-6">
          <div>
            <label className="block text-xs sm:text-sm font-semibold text-slate-900 mb-2">
              Value per missed call (£)
            </label>
            <input
              type="range"
              min="10"
              max="500"
              step="10"
              value={valuePerCall}
              onChange={(e) => setValuePerCall(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-900"
            />
            <div className="text-right text-xl sm:text-2xl font-bold text-slate-900 mt-2">
              {fmt.format(valuePerCall)}
            </div>
          </div>

          <div>
            <label className="block text-xs sm:text-sm font-semibold text-slate-900 mb-2">Missed calls per day</label>
            <input
              type="range"
              min="1"
              max="50"
              step="1"
              value={missedCalls}
              onChange={(e) => setMissedCalls(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-900"
            />
            <div className="text-right text-xl sm:text-2xl font-bold text-slate-900 mt-2">{missedCalls}</div>
          </div>

          <div className="bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-200 rounded-lg sm:rounded-xl p-4 sm:p-6 mt-4 sm:mt-6">
            <div className="text-xs sm:text-sm text-slate-600 mb-1">You're losing per year</div>
            <div className="text-3xl sm:text-4xl font-bold text-red-600 mb-3 sm:mb-4">{fmt.format(yearlyLoss)}</div>
            <Button
              asChild
              className="w-full bg-slate-900 hover:bg-slate-800 text-white rounded-full h-10 sm:h-12 text-sm sm:text-base font-medium"
            >
              <a href="#booking">Stop the bleeding →</a>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
