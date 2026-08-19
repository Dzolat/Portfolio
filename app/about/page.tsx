const skills = {
  software: ["C", "C++", "C#"],

  web: ["TypeScript", "React", "Next.js", "Node.js", "Electron"],

  other: ["Luau", "SQL", "PowerShell"],
};

export default async function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-hidden px-6 pt-24">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-[#c6532f]/10 blur-[120px]" />
      <div className="pointer-events-none absolute top-72 right-0 h-72 w-72 rounded-full bg-[#29483d]/5 blur-[100px]" />

      <section className="relative mx-auto flex max-w-7xl flex-row items-center gap-16 pt-16 pb-4">
        <div className="flex max-w-3xl flex-col">
          <h1 className="mt-4 text-5xl font-bold tracking-tight text-[#241c17]">
            Hey! I&apos;m{" "}
            <span className="bg-gradient-to-r from-[#b74628] to-[#d88942] bg-clip-text text-transparent">
              RealDzolat.
            </span>
          </h1>

          <p className="mt-3 flex items-center gap-x-2 gap-y-1 text-lg text-[#74675b]">
            <span className="font-medium text-[#392b22]">Alan Stec</span>
            <span className="text-[#a88e72]">|</span>
            <span>16 years old</span>
            <span className="text-[#a88e72]">|</span>
            <span>developer from Lublin, Poland</span>
          </p>

          <div className="mt-10 space-y-6 text-[17px] leading-8 text-[#51463d]">
            <p>
              I&apos;m mostly focused on{" "}
              <span className="font-semibold text-[#241c17]">C++</span> and
              full-stack web development. I started programming early in my
              life, but only got into it later when I began experimenting with
              web development, Lua and building software.
            </p>

            <p>
              I&apos;ve worked with{" "}
              <span className="font-semibold text-[#241c17]">
                C, C++, C#, Next.js, React, TypeScript, JavaScript, Luau, SQL Python, Electron and PowerShell
              </span>
              . I like learning new tools by actually using them in projects
              rather than just reading about them.
            </p>

            <p>
              My goal is to become a{" "}
              <span className="font-semibold text-[#241c17]">
                full-stack software engineer
              </span>{" "}
              who can build complete products.
            </p>

            <p>
              I also run{" "}
              <a
                href="https://github.com/Celestial-Core-Official"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#b74628]"
              >
                Celestial Core
              </a>
              , my development organization where I build software, experiment
              with new ideas and keep improving.
            </p>

            <p>
              I learn fast, I&apos;m curious, and I&apos;m very independent when
              it comes to solving problems. If I don&apos;t know how something
              works, I usually end up digging into it until I do.
            </p>

            <p className="text-[#74675b]">
              Outside programming, I&apos;m usually listening to rock and metal,
              especially <span className="text-[#241c17]">AC/DC</span>, or at the
              gym. Java and I are currently not on speaking terms.
            </p>
          </div>
        </div>

        {/* right: terminal card */}
        <div className="w-full max-w-sm shrink-0">
          <div className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950/80 shadow-2xl shadow-black/40 backdrop-blur">
            <div className="flex justify-between items-center gap-1.5 border-b border-zinc-800 bg-zinc-900/60 px-4 py-3">
              <span className="ml-2 text-xs text-zinc-500">about.ps1</span>

              <span className="flex items-center gap-1 h-3 w-12">
                <span className="h-3 w-3 rounded-full bg-red-500/70" />
                <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
                <span className="h-3 w-3 rounded-full bg-green-500/70" />
              </span>
            </div>

            <div className="space-y-3 px-5 py-5 font-mono text-[13px] leading-6">
              <p>
                <span className="text-zinc-600">{`PS>`}</span>{" "}
                <span className="text-orange-400">whoami</span>
              </p>
              <p className="text-zinc-300">Alan Stec (RealDzolat)</p>

              <p>
                <span className="text-zinc-600">{`PS>`}</span>{" "}
                <span className="text-orange-400">location</span>
              </p>
              <p className="text-zinc-300">Lublin, Poland</p>

              <p>
                <span className="text-zinc-600">{`PS>`}</span>{" "}
                <span className="text-orange-400">main_focus</span>
              </p>
              <p className="text-zinc-300">C++, competitive programming</p>

              <p>
                <span className="text-zinc-600">{`PS>`}</span>{" "}
                <span className="text-orange-400">favorite_song</span>
              </p>
              <p className="text-zinc-300">AC/DC</p>

              <p className="flex items-center gap-2 pt-1">
                <span className="text-orange-400">{`PS>`}</span>
                <span className="inline-block h-4 w-2 bg-orange-400/70" />
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="mb-4">
                <p className="mb-2 text-sm font-semibold text-[#74675b] capitalize">
                  {category}
                </p>

                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-[#cdbda6] bg-[#f8f2e7]/70 px-3 py-1 text-sm text-[#51463d]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
