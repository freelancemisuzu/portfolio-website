import { CaseStudySection } from "@/components/case-studies"
import { caseStudies } from "@/lib/data"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params
  const study = caseStudies.find(s => s.id === resolvedParams.id)
  
  if (!study) {
    notFound()
  }

  let wrapperClass = "min-h-screen pt-24 "
  if (study.id === "belle-noire" || study.id === "luna-beauty") {
    wrapperClass += "bg-white dark:bg-black"
  } else if (study.id === "sakura-nails") {
    wrapperClass += "dark bg-[#3C3C3C] text-foreground"
  } else {
    wrapperClass += "bg-secondary/30"
  }

  return (
    <main>
      <Navigation />
      <div className={wrapperClass}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mb-[-80px] relative z-10">
          <Link href="/#works" className="inline-flex items-center gap-2 text-foreground/80 hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm tracking-widest uppercase">Back to Projects</span>
          </Link>
        </div>
        <CaseStudySection study={study} />
      </div>
      <Footer />
    </main>
  )
}

export function generateStaticParams() {
  return caseStudies.map((study) => ({
    id: study.id,
  }))
}
