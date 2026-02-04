import type { Metadata } from "next"
import CalculatorClient from "./calculator-client"

export const metadata: Metadata = {
  title: "Missed Call Calculator | Voice2Lead - Calculate Your Revenue Loss",
  description:
    "Calculate how much revenue you're losing from missed calls. See daily, weekly, monthly, and yearly losses. Free calculator for UK trades businesses.",
}

export default function CalculatorPage() {
  return <CalculatorClient />
}
