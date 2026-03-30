import { ProjectCard } from "@/components/project-card"
import { getDetailedProjects } from "@/lib/github"
import { Layers, Zap } from "lucide-react"

export default async function ProjectsPage() {
  const projects = await getDetailedProjects();

  return (
    <div className="min-h-screen bg-background">
      {/* Increased padding-top to prevent logo overlap */}
      <div className="mx-auto max-w-7xl px-6 pt-32 pb-20">
        
        {/* Clean Header Section */}
        <div className="mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-bold uppercase tracking-widest text-primary">
            <Zap className="h-3 w-3" />
            Selected Works
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            Machine Learning <span className="text-gradient">Archive</span>
          </h1>
          <p className="max-w-2xl text-muted-foreground">
            A specialized collection of research and deployments focused on NLP and 
            Computer Vision, developed during my B.Tech at Thapar Institute.
          </p>
        </div>

        {/* Unified 2-Column Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index} 
              {...project}
              // Force standard size for a cleaner look
              featured={false} 
            />
          ))}
        </div>
      </div>
    </div>
  )
}
