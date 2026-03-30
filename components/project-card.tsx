"use client"

import { Github, ExternalLink, Brain, Sparkles, ArrowUpRight } from "lucide-react"
import { useState } from "react"

export function ProjectCard({ 
  title, description, model, tags, githubUrl, liveUrl 
}: any) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <article 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col h-full rounded-2xl border border-white/5 bg-[#0A0F1C]/60 backdrop-blur-md transition-all duration-500 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/5"
    >
      {/* Subtle Hover Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

      <div className="relative p-8 flex flex-col h-full space-y-6">
        {/* Header Section */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 group-hover:scale-110 transition-transform duration-300">
              <Brain className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                {title}
              </h3>
              <p className="text-xs font-mono text-primary/70 flex items-center gap-1.5 mt-1 uppercase tracking-wider">
                <Sparkles className="h-3 w-3" />
                {model}
              </p>
            </div>
          </div>
          <ArrowUpRight className={`h-5 w-5 text-slate-500 transition-all duration-300 ${isHovered ? 'translate-x-1 -translate-y-1 text-primary' : ''}`} />
        </div>

        {/* Project Context */}
        <p className="text-slate-400 text-sm leading-relaxed flex-grow">
          {description}
        </p>

        {/* Tags Array */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag: string) => (
            <span key={tag} className="px-3 py-1 text-[11px] font-medium bg-white/5 border border-white/10 rounded-full text-slate-300 hover:border-primary/30 hover:text-primary transition-colors">
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons - Fetching from your Config */}
        <div className="flex gap-3 pt-6 border-t border-white/5">
          {githubUrl && (
            <a 
              href={githubUrl}
              target="_blank"
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 border border-white/10 text-sm font-medium hover:bg-white/10 transition-all"
            >
              <Github className="h-4 w-4" />
              Source
            </a>
          )}
          {liveUrl && (
            <a 
              href={liveUrl}
              target="_blank"
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-primary text-black text-sm font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98] transition-all"
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
