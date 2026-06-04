"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

import { CaseStudyProps } from "@/lib/data"

export function CaseStudySection({ study }: { study: CaseStudyProps }) {
  return (
    <section id={study.id} className="py-32 md:py-48 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >

          <h2 className="mt-6 text-4xl md:text-5xl lg:text-7xl font-light text-foreground">
            {study.title} <span className="text-2xl md:text-3xl lg:text-4xl ml-2 font-light">Website</span>
          </h2>
          <p className={`mt-4 text-xl md:text-2xl ${study.id === "sakura-nails" ? "text-[#D4A5A5]" : "text-accent"}`}>{study.subtitle}</p>
        </motion.div>

        {/* Overview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-20 grid md:grid-cols-2 gap-12"
        >
          <div>
            <h3 className="text-sm tracking-[0.2em] uppercase text-muted-foreground">デザインの世界観</h3>
            <p className="mt-4 text-lg md:text-xl leading-relaxed text-foreground font-light whitespace-pre-line">
              {study.overview}
            </p>
          </div>
          <div>
            <h3 className="text-sm tracking-[0.2em] uppercase text-muted-foreground">ターゲット層</h3>
            <p className="mt-4 text-lg md:text-xl leading-relaxed text-foreground font-light whitespace-pre-line">
              {study.concept}
            </p>
          </div>
        </motion.div>

        {/* Hero Screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-20"
        >
          <div className="aspect-video relative rounded-2xl overflow-hidden">
            <Image
              src={study.screenshots[0]}
              alt={`${study.title} hero screenshot`}
              fill
              className="object-cover"
            />
          </div>
        </motion.div>



        {/* UX Decisions */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-32 max-w-3xl"
        >
          <h3 className="text-sm tracking-[0.2em] uppercase text-muted-foreground">デザインのこだわり</h3>
          <ul className="mt-8 space-y-6">
            {study.uxDecisions.map((decision, index) => (
              <li key={index} className="flex gap-4">
                <span className={study.id === "sakura-nails" ? "text-[#D4A5A5] text-sm" : "text-accent text-sm"}>0{index + 1}</span>
                <p className="text-lg text-foreground font-light whitespace-pre-line">{decision}</p>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Screenshots Grid */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-32"
        >
          <h3 className="text-base md:text-lg tracking-[0.2em] uppercase text-muted-foreground mb-8">WEBSITE DESIGN SCREENS</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {study.screenshots.slice(1, 5).map((screenshot, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="aspect-video relative rounded-2xl overflow-hidden"
              >
                <Image
                  src={screenshot}
                  alt={`${study.title} screenshot ${index + 2}`}
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mobile Previews */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-32"
        >
          <h3 className="text-base md:text-lg tracking-[0.2em] uppercase text-muted-foreground mb-8">MOBILE DESIGN</h3>
          <div className="flex justify-center gap-8">
            {study.mobileScreenshots.map((screenshot, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="w-48 md:w-56"
              >
                <div className="relative rounded-[2rem] overflow-hidden border-8 border-foreground/10 shadow-2xl aspect-[9/16]">
                  <Image
                    src={screenshot}
                    alt={`${study.title} mobile screenshot ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Website Button */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-32 pb-16 flex justify-center"
        >
          <Link
            href={study.liveUrl || "#"}
            className="inline-flex items-center gap-2 px-8 py-4 border border-foreground/20 text-foreground rounded-full text-sm tracking-wide hover:bg-foreground/5 transition-colors duration-300"
          >
            {study.title}のサイトを開く
            <ExternalLink className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

// CaseStudies export removed as it's no longer used
