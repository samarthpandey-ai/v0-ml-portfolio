"use client"

import { Award, ExternalLink, Calendar, ArrowUpRight, BadgeCheck } from "lucide-react"
import { useState } from "react"

interface CertificateCardProps {
  title: string
  issuer: string
  date: string
  credential: string
  skills: string[]
  color: string
  logo?: string
}

export function CertificateCard({
  title,
  issuer,
  date,
  credential,
  skills,
  color,
}: CertificateCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <article 
      className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card transition-all duration-500 card-hover"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gradient background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
      
      {/* Border glow */}
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-primary/20 via-transparent to-primary/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative p-7 space-y-5">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
              <Award className="h-6 w-6 text-primary" />
            </div>
            <div className="space-y-1">
              <h3 className="font-semibold text-foreground transition-colors group-hover:text-primary leading-tight">
                {title}
              </h3>
              <div className="flex items-center gap-2">
                <p className="text-sm text-muted-foreground">{issuer}</p>
                <BadgeCheck className="h-4 w-4 text-primary" />
              </div>
            </div>
          </div>
          
          {/* Arrow indicator */}
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-card transition-all duration-300 group-hover:border-primary/50 group-hover:bg-primary group-hover:text-primary-foreground">
            <ArrowUpRight className={`h-4 w-4 transition-transform duration-300 ${isHovered ? 'translate-x-0.5 -translate-y-0.5' : ''}`} />
          </div>
        </div>

        {/* Date & Credential */}
        <div className="flex items-center gap-4 text-sm">
          <span className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="h-4 w-4 text-primary/70" />
            {date}
          </span>
          <span className="h-1 w-1 rounded-full bg-border" />
          <span className="text-muted-foreground truncate font-mono text-xs">{credential}</span>
        </div>

        {/* Skills */}
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="rounded-lg bg-secondary/80 px-3 py-1.5 text-xs font-medium text-secondary-foreground transition-all hover:bg-primary/20 hover:text-primary"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* View Certificate Link */}
        <div className="pt-3 border-t border-border/50">
          <button className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-all hover:gap-3">
            View Certificate
            <ExternalLink className="h-4 w-4" />
          </button>
        </div>
      </div>
    </article>
  )
}
