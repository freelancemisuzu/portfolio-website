import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { SelectedWorks } from "@/components/selected-works"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <About />
      <SelectedWorks />
      <Contact />
      <Footer />
    </main>
  )
}
