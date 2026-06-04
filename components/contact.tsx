"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    // Replace with your Web3Forms Access Key
    formData.append("access_key", "c2611e4d-f267-4908-a85d-82162c175752");
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      
      const data = await response.json();
      
      if (data.success) {
        alert("メッセージが送信されました。内容を確認後、折り返しご連絡いたします。");
        (e.target as HTMLFormElement).reset();
      } else {
        alert("送信に失敗しました。もう一度お試しください。");
      }
    } catch (error) {
      alert("送信に失敗しました。もう一度お試しください。");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="contact" 
      className="py-32 md:py-48 px-6 md:px-12 lg:px-24"

    >
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-6xl lg:text-7xl font-[family-name:var(--font-playfair)] italic tracking-[0.1em] text-foreground mb-16 uppercase"
        >
          CONTACT
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="space-y-6 text-[11px] md:text-[17px] leading-[2] text-foreground font-light tracking-wide mb-16 px-2 md:px-0"
        >
          <p>
            新しくサイトを立ち上げたい方や、ブランドのイメージを一新したい方は、<br className="hidden md:block"/>
            ぜひお気軽にお問い合わせください。
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden mb-12">
            <Image
              src="/IMG_4184.JPG"
              alt="Misuzu Contact"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-4 mb-12">
            <h3 className="text-sm tracking-[0.2em] uppercase text-muted-foreground font-[family-name:var(--font-montserrat)]">
              E-MAIL ADDRESS
            </h3>
            <a 
              href="mailto:freelance.misuzu@gmail.com" 
              className="block text-xl md:text-2xl text-foreground hover:opacity-70 transition-opacity duration-300 font-light"
            >
              freelance.misuzu@gmail.com
            </a>
          </div>


          <form onSubmit={handleSubmit} className="w-full max-w-2xl space-y-8 text-left">
            <input type="hidden" name="subject" value="New Contact from Portfolio Website" />
            <input type="hidden" name="from_name" value="Portfolio Contact Form" />
            
            <div className="space-y-3">
              <label htmlFor="name" className="text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">お名前</label>
              <Input id="name" name="name" required placeholder="例：山田 太郎" className="bg-background/50 border-muted-foreground/20 focus-visible:ring-1 py-6 text-base" />
            </div>
            <div className="space-y-3">
              <label htmlFor="email" className="text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">メールアドレス</label>
              <Input id="email" name="email" type="email" required placeholder="例：yamada@example.com" className="bg-background/50 border-muted-foreground/20 focus-visible:ring-1 py-6 text-base" />
            </div>
            <div className="space-y-3">
              <label htmlFor="message" className="text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">お問い合わせ内容</label>
              <Textarea id="message" name="message" required placeholder="メッセージをご入力ください。" className="min-h-[160px] bg-background/50 border-muted-foreground/20 focus-visible:ring-1 text-base p-4" />
            </div>
            <Button type="submit" disabled={isSubmitting} className="w-full bg-foreground text-background hover:bg-foreground/90 transition-colors py-6 text-lg rounded-xl mt-4">
              {isSubmitting ? "送信中..." : "送信"}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
