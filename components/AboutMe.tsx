export default function AboutMe()
{
    return (
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
    )
}

