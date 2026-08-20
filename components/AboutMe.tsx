export default function AboutMe() {
  return (
    <div className="flex max-w-3xl flex-col">
      <h1 className="mt-4 text-5xl font-bold tracking-tight text-[#241c17]">
        Hey, I&apos;m{" "}
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
          I mostly work with{" "}
          <span className="font-semibold text-[#241c17]">C++</span> and
          full-stack web development. I started messing around with code when
          I was younger, but I only really got into programming after trying
          web development.
        </p>

        <p>
          Most of my experience is with{" "}
          <span className="font-semibold text-[#241c17]">
            C++ and TypeScript
          </span>
          . I usually learn new tools by building something with them.
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
          , a development organization where I work on projects and try out
          new ideas.
        </p>

        <p className="text-[#74675b]">
          When I&apos;m not programming, I&apos;m usually at the gym or
          listening to rock and metal.
        </p>
      </div>
    </div>
  );
}