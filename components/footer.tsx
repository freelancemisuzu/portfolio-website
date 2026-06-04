"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-12 px-6 md:px-12 lg:px-24 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <Link href="/" className="text-xl font-light tracking-widest text-foreground font-[family-name:var(--font-montserrat)] uppercase">
            FREELANCE MISUZU
          </Link>

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} FREELANCE MISUZU. All rights reserved.
          </p>

          <div className="flex items-center gap-8">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              Instagram
            </a>
            <a
              href="https://dribbble.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              Dribbble
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
