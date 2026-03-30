import { Github, Linkedin, Mail, Twitter, Cpu, Heart, ArrowUpRight, Network } from "lucide-react"
import Link from "next/link"

const socialLinks = [
  { href: "https://github.com", icon: Github, label: "GitHub" },
  { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
  { href: "https://twitter.com", icon: Twitter, label: "Twitter" },
  { href: "mailto:your@email.com", icon: Mail, label: "Email" },
]

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/certificates", label: "Certificates" },
  { href: "/about", label: "About" },
]

const quickLinks = [
  { href: "#", label: "Resume" },
  { href: "#", label: "Kaggle" },
  { href: "#", label: "Google Scholar" },
  { href: "#", label: "HuggingFace" },
]

export function Footer() {
  return (
    <footer className="relative border-t border-border/40 bg-card/40 backdrop-blur-sm">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-card/30 to-transparent" />
      <div className="absolute top-0 left-1/4 h-40 w-40 rounded-full bg-primary/5 blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 h-40 w-40 rounded-full bg-purple-500/5 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="lg:col-span-1 space-y-6">
            <Link href="/" className="group inline-flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/25 to-cyan-400/10 border border-primary/40 transition-all group-hover:shadow-lg group-hover:shadow-primary/25">
                <Cpu className="h-6 w-6 text-primary" />
              </div>
              <div>
                <span className="text-xl font-bold text-foreground">Neural</span>
                <span className="text-xl font-bold text-primary">.dev</span>
                <p className="text-xs text-muted-foreground">ML Engineer</p>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Engineering intelligent AI systems. Specializing in deep learning, 
              NLP, and production-ready machine learning solutions.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-2">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/60 bg-card/50 text-muted-foreground transition-all hover:border-primary/50 hover:bg-gradient-to-br hover:from-primary hover:to-cyan-400 hover:text-primary-foreground hover:shadow-lg hover:shadow-primary/20"
                  aria-label={link.label}
                >
                  <link.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Column */}
          <div className="space-y-6">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider flex items-center gap-2">
              <Network className="h-4 w-4 text-primary" />
              Navigation
            </h3>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                  <ArrowUpRight className="h-3 w-3 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              ))}
            </nav>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-6">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider flex items-center gap-2">
              <Cpu className="h-4 w-4 text-primary" />
              Resources
            </h3>
            <nav className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                  <ArrowUpRight className="h-3 w-3 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              ))}
            </nav>
          </div>

          {/* Newsletter Column */}
          <div className="space-y-6">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">Stay Connected</h3>
            <p className="text-sm text-muted-foreground">
              Get updates on new ML projects and research insights.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 rounded-xl border border-border/60 bg-card/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 backdrop-blur-sm"
              />
              <button className="rounded-xl bg-gradient-to-r from-primary to-cyan-400 px-5 py-3 text-sm font-semibold text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/30">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground flex items-center gap-1.5">
            Crafted with <Heart className="h-3.5 w-3.5 text-red-500 fill-red-500" /> using Next.js & AI
          </p>
          <p className="text-sm text-muted-foreground">
            {new Date().getFullYear()} Neural.dev. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
