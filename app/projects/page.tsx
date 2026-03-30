import { ProjectCard } from "@/components/project-card"
import { getDetailedProjects } from "@/lib/github"
import { Code2 } from "lucide-react"

export default async function ProjectsPage() {
  const projects = await getDetailedProjects();

  return (
    <div className="min-h-screen bg-[#030711] text-slate-50">
      {/* Background Glows */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute top-[20%] -right-[10%] h-[400px] w-[400px] rounded-full bg-blue-500/5 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-40 pb-24">
        {/* Professional Header */}
        <div className="max-w-4xl mb-20 space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Machine Learning <span className="text-gradient">Archive</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl">
            A specialized collection of research and deployments focused on NLP and 
            Computer Vision, developed during my B.Tech at Thapar Institute.
          </p>
          <div className="h-1 w-20 bg-primary/50 rounded-full" />
        </div>

        {/* Clean 2-Column Grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index} 
              {...project}
              featured={false} 
            />
          ))}
        </div>
      </div>
    </div>
  )
}
