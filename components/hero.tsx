"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative flex flex-col justify-center overflow-hidden md:min-h-[100dvh] md:px-16 lg:px-32 pt-28 pb-4 md:pt-0 md:pb-0 bg-white md:bg-transparent">
      {/* Desktop Background image with overlay */}
      <div className="absolute inset-0 z-0 hidden md:block">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/felicity-lynn-g_CYfjiaZZY-unsplash.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-background/10" />
      </div>

      {/* Mobile Layout */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full md:hidden relative z-10"
      >
        <Image 
          src="/felicity-lynn-g_CYfjiaZZY-unsplash.jpg" 
          alt="Hero background" 
          width={800} 
          height={1000} 
          className="w-full aspect-[4/5] object-cover object-center"
          priority
        />
        {/* Same overlay as desktop */}
        <div className="absolute inset-0 bg-background/10" />
        {/* Mobile Overlay Content */}
        <div className="absolute inset-0 z-10 flex items-end justify-center pb-6 px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex items-baseline space-x-3 text-white drop-shadow-lg"
          >
            <p className="text-lg sm:text-xl tracking-[0.2em] uppercase font-[family-name:var(--font-montserrat)] font-light">
              Website Designer
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Desktop Content */}
      <div className="relative z-10 text-right w-full hidden md:block">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-5xl lg:text-7xl font-light tracking-widest text-neutral-800"
        >
          MISUZU
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="mt-6 text-xl tracking-[0.3em] uppercase text-neutral-800 font-[family-name:var(--font-montserrat)] font-light"
        >
          Website Designer
        </motion.p>
      </div>

    </section>
  )
}
