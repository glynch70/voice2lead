"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Phone, ArrowLeft } from "lucide-react"

type Mode = "simple" | "advanced"

export default function CalculatorClient() {
  const [mode, setMode] = useState<Mode>("simple")

  // Simple mode
  const [valuePerCall, setValuePerCall] = useState(100)
  const [missedCalls, setMissedCalls] = useState(10)

  // Advanced mode
  const [avgJob, setAvgJob] = useState(500)
  const [closeRate, setCloseRate] = useState(35)
  const [missedCallsAdv, setMissedCallsAdv] = useState(5)

  // Common
  const [daysPerWeek, setDaysPerWeek] = useState(7)

  // Results
  const [daily, setDaily] = useState(0)
  const [weekly, setWeekly] = useState(0)
  const [monthly, setMonthly] = useState(0)
  const [yearly, setYearly] = useState(0)

  const fmt = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 0,
  })

  useEffect(() => {
    const days = Math.max(1, Math.min(7, daysPerWeek))
    let dailyLoss = 0

    if (mode === "simple") {
      const v = Math.max(0, valuePerCall)
      const m = Math.max(0, missedCalls)
      dailyLoss = v * m
    } else {
      const avg = Math.max(0, avgJob)
      const cr = Math.max(0, Math.min(100, closeRate)) / 100
      const m = Math.max(0, missedCallsAdv)
      dailyLoss = avg * cr * m
    }

    const weeklyLoss = dailyLoss * days
    const monthlyLoss = weeklyLoss * 4.3333
    const yearlyLoss = weeklyLoss * 52

    setDaily(dailyLoss)
    setWeekly(weeklyLoss)
    setMonthly(monthlyLoss)
    setYearly(yearlyLoss)
  }, [mode, valuePerCall, missedCalls, avgJob, closeRate, missedCallsAdv, daysPerWeek])

  const applyPreset = (preset: "restaurant" | "trades") => {
    if (preset === "restaurant") {
      setMode("simple")
      setValuePerCall(100)
      setMissedCalls(10)
      setDaysPerWeek(7)
    } else {
      setMode("advanced")
      setAvgJob(500)
      setCloseRate(35)
      setMissedCallsAdv(5)
      setDaysPerWeek(6)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="mb-6 sm:mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 text-slate-600 hover:text-slate-900 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium text-sm sm:text-base">Back to Home</span>
          </Link>
        </div>

        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 sm:mb-8">
          <Link href="/" className="text-lg sm:text-xl font-bold text-slate-900">
            Voice2Lead
          </Link>
          <div className="px-3 sm:px-4 py-2 bg-slate-100 border border-slate-200 rounded-full text-xs sm:text-sm font-medium text-slate-700">
            Never miss a call
          </div>
        </div>

        {/* Title */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-4xl font-bold text-slate-900 mb-2 sm:mb-3 text-balance">
            What one missed call costs your business
          </h1>
          <p className="text-base sm:text-lg text-slate-600 text-pretty">
            Move the inputs. See daily, weekly, monthly, and yearly loss. Then fix it with Voice2Lead.
          </p>
        </div>

        {/* Calculator Card */}
        <div className="bg-white border border-slate-200 rounded-xl sm:rounded-2xl p-4 sm:p-8 shadow-sm">
          {/* Mode Toggle */}
          <div className="mb-4 sm:mb-6">
            <label className="block text-sm font-semibold text-slate-900 mb-2 sm:mb-3">Mode</label>
            <div className="flex gap-2 sm:gap-3">
              <button
                onClick={() => setMode("simple")}
                className={`flex-1 py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base transition-all ${
                  mode === "simple"
                    ? "bg-slate-900 text-white"
                    : "bg-white border border-slate-200 text-slate-700 hover:border-slate-300"
                }`}
              >
                Simple
              </button>
              <button
                onClick={() => setMode("advanced")}
                className={`flex-1 py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base transition-all ${
                  mode === "advanced"
                    ? "bg-slate-900 text-white"
                    : "bg-white border border-slate-200 text-slate-700 hover:border-slate-300"
                }`}
              >
                Advanced
              </button>
            </div>
          </div>

          {/* Presets */}
          <div className="flex flex-wrap items-center gap-2 mb-4 sm:mb-6">
            <span className="text-xs sm:text-sm text-slate-500">Presets:</span>
            <button
              onClick={() => applyPreset("restaurant")}
              className="px-2.5 sm:px-3 py-1.5 sm:py-2 border border-dashed border-slate-300 rounded-lg text-xs sm:text-sm font-medium text-slate-700 hover:border-slate-400 hover:bg-slate-50 transition-colors"
            >
              Restaurant
            </button>
            <button
              onClick={() => applyPreset("trades")}
              className="px-2.5 sm:px-3 py-1.5 sm:py-2 border border-dashed border-slate-300 rounded-lg text-xs sm:text-sm font-medium text-slate-700 hover:border-slate-400 hover:bg-slate-50 transition-colors"
            >
              Trades
            </button>
          </div>

          {/* Simple Mode Inputs */}
          {mode === "simple" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-slate-900 mb-2">
                  Value per missed call (£)
                </label>
                <input
                  type="number"
                  min="0"
                  step="1"
                  value={valuePerCall}
                  onChange={(e) => setValuePerCall(Number(e.target.value))}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-slate-200 rounded-lg sm:rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-slate-900 mb-2">
                  Missed calls per day
                </label>
                <input
                  type="number"
                  min="0"
                  step="1"
                  value={missedCalls}
                  onChange={(e) => setMissedCalls(Number(e.target.value))}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-slate-200 rounded-lg sm:rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                />
              </div>
            </div>
          )}

          {/* Advanced Mode Inputs */}
          {mode === "advanced" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-slate-900 mb-2">
                  Average job value (£)
                </label>
                <input
                  type="number"
                  min="0"
                  step="1"
                  value={avgJob}
                  onChange={(e) => setAvgJob(Number(e.target.value))}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-slate-200 rounded-lg sm:rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-slate-900 mb-2">Close rate (%)</label>
                <input
                  type="number"
                  min="0"
                  max="100"
                  step="1"
                  value={closeRate}
                  onChange={(e) => setCloseRate(Number(e.target.value))}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-slate-200 rounded-lg sm:rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-xs sm:text-sm font-semibold text-slate-900 mb-2">
                  Missed calls per day
                </label>
                <input
                  type="number"
                  min="0"
                  step="1"
                  value={missedCallsAdv}
                  onChange={(e) => setMissedCallsAdv(Number(e.target.value))}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-slate-200 rounded-lg sm:rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                />
              </div>
            </div>
          )}

          {/* Days per week */}
          <div className="mb-4 sm:mb-6">
            <label className="block text-xs sm:text-sm font-semibold text-slate-900 mb-2">Open days per week</label>
            <input
              type="number"
              min="1"
              max="7"
              step="1"
              value={daysPerWeek}
              onChange={(e) => setDaysPerWeek(Number(e.target.value))}
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-slate-200 rounded-lg sm:rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
            />
          </div>

          {/* Results */}
          <div className="bg-slate-50 border border-slate-200 rounded-lg sm:rounded-xl p-4 sm:p-6 mb-4 sm:mb-6">
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm sm:text-base text-slate-600">Daily loss</span>
                <span className="text-lg sm:text-xl font-bold text-slate-900">{fmt.format(daily)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm sm:text-base text-slate-600">Weekly loss</span>
                <span className="text-lg sm:text-xl font-bold text-slate-900">{fmt.format(weekly)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm sm:text-base text-slate-600">Monthly loss</span>
                <span className="text-lg sm:text-xl font-bold text-slate-900">{fmt.format(monthly)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm sm:text-base text-slate-600">Yearly loss</span>
                <span className="text-lg sm:text-xl font-bold text-red-600">{fmt.format(yearly)}</span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <a
            href="https://calendly.com/bearmedia/discovery-call"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full px-4 sm:px-6 py-3 bg-slate-900 text-white font-bold rounded-lg sm:rounded-xl hover:bg-slate-800 transition-colors text-center text-sm sm:text-base"
          >
            {weekly > 0
              ? `Stop losing ${fmt.format(weekly)} per week. Book a 15 minute setup`
              : "Book a 15 minute setup"}
          </a>

          <p className="text-xs sm:text-sm text-slate-500 mt-4">
            Restaurant example: £25 per person × 4 per table = £100 per missed call. Monthly uses 4.33 weeks. Yearly
            uses 52 weeks.
          </p>
        </div>

        {/* Footer CTA */}
        <div className="mt-6 sm:mt-8 flex flex-col gap-4 sm:gap-6 pt-6 border-t border-slate-200">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
            <div className="px-3 sm:px-4 py-2 bg-slate-100 border border-slate-200 rounded-full text-xs sm:text-sm font-medium text-slate-700">
              Three rings rule
            </div>
            <p className="text-xs sm:text-sm text-slate-600">Answer before the third ring and keep the table.</p>
          </div>
          <a
            href="https://dunseroofclean.lovable.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-3 bg-slate-900 text-white font-bold rounded-lg sm:rounded-xl hover:bg-slate-800 transition-colors text-sm sm:text-base w-full sm:w-auto"
          >
            <Phone className="w-4 h-4" />
            Hear the live demo
          </a>
        </div>
      </div>
    </div>
  )
}
