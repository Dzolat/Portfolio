import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <main className="min-h-screen pt-24">
      <section className="max-w-7xl mx-auto px-8 pt-16 pb-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.path}
            title={project.title}
            description={project.description}
            path={project.path}
          />
        ))}
      </section>
    </main>
  );
}