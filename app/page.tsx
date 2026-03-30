import { HeroSection } from "@/components/hero-section"
import { QuickStats } from "@/components/quick-stats"

export default function HomePage() {
  return (
    <div className="pt-20">
      <HeroSection />
      <QuickStats />
    </div>
  )
}
