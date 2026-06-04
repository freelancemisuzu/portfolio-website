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

          {/* Social links removed */}
        </motion.div>
      </div>
    </footer>
  )
}
