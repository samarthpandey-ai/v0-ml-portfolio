"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Menu, X, Cpu, Network, ArrowRight } from "lucide-react"
import { useState, useEffect } from "react"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/certificates", label: "Certificates" },
  { href: "/about", label: "About" },
]

export function Navigation() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-500", scrolled ? "border-b border-border/40 bg-background/80 backdrop-blur-2xl shadow-xl shadow-background/20" : "bg-transparent")}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="group flex items-center gap-3 transition-all">
          <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/25 to-primary/5 border border-primary/40 transition-all group-hover:border-primary/60">
            <Cpu className="h-6 w-6 text-primary" />
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="text-lg font-bold tracking-tight text-foreground leading-none">Neural</span>
            <span className="text-sm font-medium tracking-tight text-primary leading-none">Portfolio</span>
          </div>
        </Link>
        <div className="hidden items-center md:flex">
          <div className="flex items-center gap-1 rounded-2xl border border-border/50 bg-card/40 backdrop-blur-sm p-1.5">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className={cn("relative rounded-xl px-5 py-2.5 text-sm font-medium transition-all duration-300", pathname === item.href ? "bg-gradient-to-r from-primary to-cyan-400 text-primary-foreground shadow-lg shadow-primary/30" : "text-muted-foreground hover:text-foreground hover:bg-card/80")}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <a href="mailto:your@email.com" className="group relative inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-primary to-cyan-400 px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:scale-[1.02] overflow-hidden">
            <Network className="h-4 w-4" />
            Let's Connect
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
        <button className="md:hidden flex h-12 w-12 items-center justify-center rounded-xl border border-border/60 bg-card/50 text-foreground" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>
    </header>
  )
}
