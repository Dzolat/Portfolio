import AboutMe from "@/components/AboutMe"
import Skills from "@/components/Skills"



export default async function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-hidden px-6 pt-24">
      <section className="relative mx-auto flex max-w-7xl flex-row items-top gap-16 pt-16 pb-4">
        <AboutMe />
        <Skills />

      </section>
    </main>
  );
}
