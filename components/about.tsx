"use client"

import { motion } from "framer-motion"

export function About() {
  return (
    <section 
      id="about" 
      className="bg-white pt-16 pb-8 md:border-t-[120px] md:border-white md:pt-48 md:pb-24 px-6 md:px-12 lg:px-24 min-h-screen bg-[url('/about-me.png')] md:bg-[url('/about-bg.png')] bg-contain bg-center bg-no-repeat flex flex-col justify-center"
    >
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-8 md:mt-12 space-y-8 md:space-y-10 text-[12px] md:text-[17px] leading-[2.2] md:leading-[2] text-neutral-800 font-light tracking-wide px-2 md:px-0"
        >
          <p>
            ネイルサロン向けのホームページ制作を行なっています。<br />
            上品で落ち着いた雰囲気のサロンや、<br className="md:hidden" />
            個性あるネイルが得意なサロンなど、<br />
            それぞれの魅力や世界観が伝わるデザインを心がけています。
          </p>
          <p>
            シンプルな中にも上品さを感じられる、余白感のあるデザインを意識し、<br className="hidden md:block"/>ユーザーが直感的に迷わず操作できる機能美や、<br className="hidden md:block"/>予約につながりやすい導線設計を大切にしています。
          </p>
          <p>
            「こんな雰囲気にしたい」を一緒に形にしながら、<br/>見やすく、伝わりやすいサイトを制作します。
          </p>
          <p>
            新しくサイトを立ち上げたい方や、ブランドのイメージを一新したい方は、<br className="hidden md:block"/>ぜひお気軽にご相談ください。
          </p>
        </motion.div>
      </div>
    </section>
  )
}
