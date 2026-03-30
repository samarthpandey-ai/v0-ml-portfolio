"use client"

import { ExternalLink, Github, Brain, ArrowUpRight, Sparkles } from "lucide-react"
import { useState } from "react"

interface ProjectCardProps {
  title: string
  description: string
  model: string
  tags: string[]
  github?: string
  demo?: string
  featured?: boolean
}

export function ProjectCard({
  title,
  description,
  model,
  tags,
  github,
  demo,
  featured,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <article 
      className={`group relative overflow-hidden rounded-2xl border border-border/50 bg-card/60 backdrop-blur-sm transition-all duration-500 hover:border-primary/40 hover:bg-card/90 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 ${featured ? 'md:col-span-2 lg:row-span-2' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-purple-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-cyan-400 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Corner glow */}
      <div className="absolute top-0 right-0 h-40 w-40 bg-gradient-to-bl from-primary/15 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 blur-2xl" />

      <div className="relative p-7 space-y-5 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-3 flex-1">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-cyan-400/10 border border-primary/30 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/20">
                <Brain className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground transition-colors group-hover:text-gradient">
                  {title}
                </h3>
                <p className="text-xs font-medium text-primary/80 font-mono flex items-center gap-1.5">
                  <Sparkles className="h-3 w-3" />
                  {model}
                </p>
              </div>
            </div>
          </div>
          
          {/* Arrow indicator */}
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border/60 bg-card/50 transition-all duration-300 group-hover:border-primary/50 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-cyan-400 group-hover:text-primary-foreground group-hover:shadow-lg group-hover:shadow-primary/25">
            <ArrowUpRight className={`h-4 w-4 transition-transform duration-300 ${isHovered ? 'translate-x-0.5 -translate-y-0.5' : ''}`} />
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-grow">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="rounded-lg bg-secondary/70 border border-border/50 px-3 py-1.5 text-xs font-medium text-secondary-foreground transition-all hover:bg-primary/15 hover:border-primary/30 hover:text-primary"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 pt-4 border-t border-border/40 mt-auto">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-border/60 bg-card/50 px-4 py-3 text-sm font-medium text-foreground transition-all hover:border-primary/40 hover:bg-secondary/80"
            >
              <Github className="h-4 w-4" />
              Source
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-cyan-400 px-4 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/35"
            >
              <ExternalLink className="h-4 w-4" />
              View Model
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
