"use client"

import { Github, ExternalLink, Brain, Sparkles, ArrowUpRight } from "lucide-react"
import { useState } from "react"

export function ProjectCard({ 
  title, overview, model, tags, githubUrl, liveUrl 
}: any) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <article 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col h-full rounded-2xl border border-white/5 bg-[#0A0F1C]/60 backdrop-blur-md transition-all duration-500 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/5"
    >
      <div className="relative p-6 md:p-8 flex flex-col h-full space-y-5">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 transition-transform duration-300 group-hover:scale-110">
              <Brain className="h-5 w-5 md:h-6 md:w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-primary transition-colors leading-tight">
                {title}
              </h3>
              <p className="text-[10px] md:text-xs font-mono text-primary/70 flex items-center gap-1.5 mt-1 uppercase tracking-wider">
                <Sparkles className="h-3 w-3" />
                {model}
              </p>
            </div>
          </div>
          <ArrowUpRight className={`h-5 w-5 text-slate-500 transition-all duration-300 ${isHovered ? 'translate-x-1 -translate-y-1 text-primary' : ''}`} />
        </div>

        {/* Overview with Line Clamp for Consistency */}
        <p className="text-slate-400 text-sm leading-relaxed flex-grow line-clamp-3">
          {overview}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.slice(0, 3).map((tag: string) => (
            <span key={tag} className="px-2.5 py-1 text-[10px] font-medium bg-white/5 border border-white/10 rounded-full text-slate-300">
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-5 border-t border-white/5">
          <a href={githubUrl} target="_blank" className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs font-medium hover:bg-white/10 transition-all">
            <Github className="h-4 w-4" /> Source
          </a>
          <a href={liveUrl} target="_blank" className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-primary text-black text-xs font-bold hover:bg-primary/90 transition-all">
            <ExternalLink className="h-4 w-4" /> View Model
          </a>
        </div>
      </div>
    </article>
  )
}
