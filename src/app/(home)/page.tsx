import { Navigation } from './_components/navigation'
import { Hero } from './_components/hero'
import { HowItWorks } from './_components/how-it-works'
import { Footer } from './_components/footer'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />

      <main className="flex-1">
        <Hero />
        <HowItWorks />
      </main>

      <Footer />
    </div>
  )
}
