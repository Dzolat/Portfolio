import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import fs from "fs";
import path from "path";

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

  const markdownPath = path.join(
    process.cwd(),
    `public`,
    `projects`,
    `${slug}.md`
  )

  const markdown = fs.readFileSync(markdownPath, "utf8");

  return (
    <main className="min-h-screen pt-24 px-13">
      <article className="pt-16 prose prose-stone max-w-none px-32">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </article>
    </main>
  );
}
