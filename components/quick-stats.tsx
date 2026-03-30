"use client"

import { Code2, Trophy, Brain, Zap, Target, TrendingUp, GitBranch, ArrowRight, Cpu, Database, Network, FlaskConical } from "lucide-react"
import { useEffect, useState, useRef } from "react"
import Link from "next/link"

const stats = [
  {
    title: "GitHub Commits",
    value: "1,247",
    numericValue: 1247,
    subtitle: "This year",
    icon: GitBranch,
    gradient: "from-primary to-cyan-400",
    bgGradient: "from-primary/15 to-cyan-400/5",
  },
  {
    title: "LeetCode Solved",
    value: "456",
    numericValue: 456,
    subtitle: "Problems",
    icon: Code2,
    gradient: "from-orange-400 to-red-500",
    bgGradient: "from-orange-500/15 to-red-500/5",
  },
  {
    title: "ML Models",
    value: "28",
    numericValue: 28,
    subtitle: "Production ready",
    icon: Brain,
    gradient: "from-violet-400 to-purple-500",
    bgGradient: "from-violet-500/15 to-purple-500/5",
  },
  
]

function AnimatedCounter({ value }: { value: number }) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          const duration = 2000
          const steps = 60
          const stepValue = value / steps
          let current = 0

          const timer = setInterval(() => {
            current += stepValue
            if (current >= value) {
              setCount(value)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [value, hasAnimated])

  return <span ref={ref}>{count.toLocaleString()}</span>
}

export function QuickStats() {
  return (
    <section className="relative overflow-hidden">
      {/* AI-themed background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
        <div className="absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-primary/8 blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-purple-500/6 blur-[120px]" />
        <div className="absolute inset-0 ai-grid-pattern opacity-30 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_20%,transparent_100%)]" />
      </div>
      
      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
        {/* Section header */}
        <div className="mb-20 text-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-primary/40 bg-primary/10 px-6 py-3 text-sm font-medium text-primary mb-8 backdrop-blur-sm">
            <TrendingUp className="h-4 w-4" />
            Performance Metrics
            <Cpu className="h-4 w-4" />
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            <span className="text-gradient">Quantified</span> Excellence
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
            Measurable achievements demonstrating consistent growth and deep expertise across machine learning and AI domains
          </p>
        </div>

        {/* Stats Bento Grid */}
        <div className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/60 backdrop-blur-sm transition-all duration-500 hover:border-primary/40 hover:bg-card/90 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2"
            >
              {/* Hover gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.bgGradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
              
              {/* Top accent line */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative p-5 sm:p-6 space-y-4">
                {/* Icon */}
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${stat.bgGradient} border border-border/40 transition-all duration-300 group-hover:scale-110 group-hover:border-primary/30`}>
                  <stat.icon className={`h-5 w-5 bg-gradient-to-br ${stat.gradient} bg-clip-text`} style={{ color: 'transparent', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', filter: 'none' }} />
                </div>
                
                {/* Value */}
                <div className="space-y-2">
                  <p className={`text-2xl sm:text-3xl font-bold tracking-tight bg-gradient-to-br ${stat.gradient} bg-clip-text text-transparent`}>
                    {stat.numericValue !== null ? (
                      <>
                        <AnimatedCounter value={stat.numericValue} />
                        {stat.value.includes('+') && '+'}
                      </>
                    ) : (
                      stat.value
                    )}
                  </p>
                  <p className="text-sm font-semibold text-foreground">
                    {stat.title}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {stat.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Cards - AI Focus */}
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* Research Focus Card */}
          <div className="group relative overflow-hidden rounded-3xl border border-border/50 bg-card/60 backdrop-blur-sm p-8 transition-all duration-500 hover:border-primary/40 hover:bg-card/90 hover:shadow-2xl hover:shadow-primary/10">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-purple-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="absolute top-0 right-0 h-48 w-48 rounded-full bg-primary/15 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative">
              <div className="flex items-start gap-6">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/25 to-cyan-400/10 border border-primary/30 group-hover:scale-105 transition-transform duration-300">
                  <Brain className="h-8 w-8 text-primary" />
                </div>
                <div className="space-y-4 flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-foreground">AI Research Focus</h3>
                    <Network className="h-5 w-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Deep expertise in <span className="text-foreground font-medium">Transformer architectures</span>, large language model fine-tuning, 
                    <span className="text-foreground font-medium"> Computer Vision</span> with state-of-the-art CNNs, and <span className="text-foreground font-medium">Reinforcement Learning</span> for autonomous decision systems.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {['LLMs', 'Transformers', 'CNNs', 'GANs', 'RL', 'MLOps'].map((tag) => (
                      <span key={tag} className="rounded-lg bg-primary/15 border border-primary/30 px-3 py-1.5 text-xs font-medium text-primary">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Goals Card */}
          <div className="group relative overflow-hidden rounded-3xl border border-border/50 bg-card/60 backdrop-blur-sm p-8 transition-all duration-500 hover:border-primary/40 hover:bg-card/90 hover:shadow-2xl hover:shadow-primary/10">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/8 via-transparent to-primary/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-purple-500/15 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative">
              <div className="flex items-start gap-6">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/25 to-purple-500/10 border border-violet-500/30 group-hover:scale-105 transition-transform duration-300">
                  <Target className="h-8 w-8 text-violet-400" />
                </div>
                <div className="space-y-4 flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-foreground">2027 Roadmap</h3>
                    <ArrowRight className="h-5 w-5 text-violet-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Targeting <span className="text-foreground font-medium">GATE 2027</span> with AI/ML specialization for admission to premier IITs. 
                    Parallel track for <span className="text-foreground font-medium">Masters in Germany</span> at TUM, RWTH Aachen, or TU Munich.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {['GATE 2027', 'IIT MTech', 'MS Germany', 'AI Research'].map((tag) => (
                      <span key={tag} className="rounded-lg bg-violet-500/15 border border-violet-500/30 px-3 py-1.5 text-xs font-medium text-violet-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/about"
            className="group inline-flex items-center gap-3 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            <span>Explore my complete journey</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
