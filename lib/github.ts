import { myProjects } from "./project-config";

export async function getDetailedProjects() {
  const detailedProjects = await Promise.all(
    myProjects.map(async (project) => {
      // Extract owner and repo name from the link
      const repoPath = project.githubUrl.split("github.com/")[1];
      
      try {
        const res = await fetch(`https://api.github.com/repos/${repoPath}`, {
          next: { revalidate: 3600 } // Refresh every hour
        });
        const data = await res.json();

        return {
          ...project,
          description: data.description || "Project developed at Thapar Institute.",
          lastUpdated: data.updated_at,
          stars: data.stargazers_count
        };
      } catch (e) {
        return { ...project, description: "Detailed info currently offline." };
      }
    })
  );

  return detailedProjects;
}
