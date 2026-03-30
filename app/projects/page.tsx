import { ProjectCard } from "@/components/project-card"
import { getDetailedProjects } from "@/lib/github"

export default async function ProjectsPage() {
  const projects = await getDetailedProjects();

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {projects.map((project, index) => (
        <ProjectCard 
          key={index} 
          title={project.title}
          description={project.description}
          github={project.githubUrl}
          demo={project.liveUrl}
          tags={project.tags}
          model={project.model}
          featured={project.featured}
        />
      ))}
    </div>
  )
}
