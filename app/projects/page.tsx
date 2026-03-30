"use client"

import { useState, useMemo } from "react"
import { ProjectCard } from "@/components/project-card"
import { myProjects } from "@/lib/project-config"
import { Sparkles, Archive, Filter } from "lucide-react"

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All")

  // 1. Sort all projects by date first
  const sortedAll = useMemo(() => {
    return [...myProjects].sort((a, b) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    )
  }, [])

  // 2. Logic: Top 2 are "Recently Added"
  const recentlyAdded = sortedAll.slice(0, 2)
  const remainingPool = sortedAll.slice(2)

  // 3. Apply Filter ONLY to the remaining pool
  const filteredRemaining = useMemo(() => {
    if (activeFilter === "All") return remainingPool
    return remainingPool.filter(p => p.tags.includes(activeFilter))
  }, [activeFilter, remainingPool])

  return (
    <div className="min-h-screen bg-[#030711] text-slate-50 pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* SECTION 1: RECENTLY ADDED */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-8 w-8 rounded-lg bg-primary/20 flex items-center justify-center">
              <Sparkles className="h-4 w-4 text-primary" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight">Recently <span className="text-gradient">Added</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {recentlyAdded.map((project, i) => (
              <ProjectCard key={i} {...project} />
            ))}
          </div>
        </div>

        {/* SECTION 2: THE ARCHIVE (REMAINING) */}
        <div className="pt-20 border-t border-white/5">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/10">
                <Archive className="h-4 w-4 text-slate-400" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight">Project <span className="text-slate-500">Archive</span></h2>
            </div>

            {/* Filter Bar - Exclusive to Archive */}
            <div className="flex items-center gap-3 overflow-x-auto pb-2 md:pb-0">
              <Filter className="h-4 w-4 text-slate-500 shrink-0" />
              {["All", "NLP", "LLM", "ML", "Python"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all border ${
                    activeFilter === cat 
                    ? "bg-primary text-black border-primary" 
                    : "border-white/10 text-slate-500 hover:border-primary/40 hover:text-slate-300"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Archive Grid */}
          {filteredRemaining.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRemaining.map((project, i) => (
                <ProjectCard key={i} {...project} />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center border border-dashed border-white/10 rounded-3xl">
              <p className="text-slate-500">No projects found in this category.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  )
}
