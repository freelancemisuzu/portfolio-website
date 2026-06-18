"use client"

import { motion } from "framer-motion"
import { ArrowRight, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const projects = [
  {
    id: "belle-noire",
    title: "Aura Nails",
    subtitle: "Nail Art Studio",
    description: "トレンドのネイルデザインからシンプルなデザインまで、　”自分らしいかわいい” が見つかるアットホームなネイルサロン",
    image: "/aura-nails-top.png",
    liveUrl: "https://aura-nails-ivory.vercel.app/",
    year: "2024"
  },
  {
    id: "sakura-nails",
    title: "Noe Nails",
    subtitle: "Luxury Nail Salon",
    description: "上品さとトレンドを両立した、落ち着いた空間を提供する、大人の女性のためのサロン。",
    image: "/noe-nails-main.png",
    liveUrl: "https://nami-nails2.vercel.app",
    year: "2024"
  },
  {
    id: "luna-beauty",
    title: "NAMI NAILS",
    subtitle: "English-friendly nail salon",
    description: "海外のトレンドネイルが得意で、日本人だけでなく海外からのお客様も日常的に受け入れているインバウンド対応サロン",
    image: "/nami-nails-top.png",
    liveUrl: "https://nami-nails.vercel.app/",
    year: "2023"
  }
]

export function SelectedWorks() {
  return (
    <section id="works" className="pt-24 pb-32 md:pt-32 md:pb-48 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-[family-name:var(--font-playfair)] italic tracking-[0.1em] text-foreground mb-12 md:mb-16 uppercase">
            PORTFOLIO
          </h2>
          <p className="max-w-2xl mx-auto text-[13px] md:text-[16px] leading-[2.2] md:leading-[2] text-foreground font-light tracking-wide px-4">
            <span className="block mb-2 md:mb-1">
              ネイルサロン向けのWebサイトを<br className="md:hidden" />
              ３パターン制作しました。
            </span>
            <span className="block">
              サロンごとの世界線を表現しながら、予約導線やユーザビリティにも配慮した<br className="hidden md:block" />
              デザインを提案しています。
            </span>
          </p>
        </motion.div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center bg-white p-6 md:p-12 rounded-3xl shadow-sm ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <Link 
                href={`/projects/${project.id}`}
                className={`group relative aspect-video overflow-hidden rounded-2xl ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500" />
              </Link>

              {/* Content */}
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <h3 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-light text-foreground">
                  {project.title} <span className="text-xl md:text-2xl ml-1">Website</span>
                </h3>
                <p className="mt-2 text-lg text-accent">{project.subtitle}</p>
                <p className="mt-6 text-lg text-muted-foreground font-light leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link 
                    href={`/projects/${project.id}`}
                    className="group inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full text-sm tracking-wide hover:bg-foreground/90 transition-colors duration-300"
                  >
                    プロジェクトを見る
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link 
                    href={project.liveUrl}
                    className="inline-flex items-center gap-2 px-6 py-3 border border-foreground/20 text-foreground rounded-full text-sm tracking-wide hover:bg-foreground/5 transition-colors duration-300"
                  >
                    サイトを開く
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-24 md:mt-32 text-center max-w-3xl mx-auto"
        >
          <h3 className="text-xl md:text-2xl tracking-widest text-foreground mb-12 font-medium">
            ネイルサロン向けのホームページ制作
          </h3>
          <p className="text-[13px] md:text-[16px] leading-[2.2] md:leading-[2] text-foreground font-light tracking-wide mt-4 px-4">
            <span className="block mb-4">
              現在、実績作りのため先着３店舗限定で<br className="md:hidden" />２０,０００円〜にて承っております。
            </span>
            <span className="block mb-4">
              スマホ対応・予約導線を意識した<br className="md:hidden" />
              ホームページをご提案いたします。<br />
              サロンの魅力や強みを丁寧に整理し、<br className="md:hidden" />
              新規のお客様が予約しやすい<br className="hidden md:block" />
              ホームページを<br className="md:hidden" />
              制作いたします。
            </span>
            <span className="block">
              限られた枠での募集になりますので、<br className="md:hidden" />
              ご興味のある方はお早めにご相談ください。
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
