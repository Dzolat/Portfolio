import { projects } from "@/data/projects";
import { notFound } from "next/navigation";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects.find(
    (project) => project.path === slug
  );

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-24">
      <section className="mx-auto max-w-7xl px-8 py-16">
        <h1 className="text-5xl font-bold">
          {project.title}
        </h1>

        <p className="mt-4 text-white/60">
          {project.description}
        </p>
      </section>
    </main>
  );
}