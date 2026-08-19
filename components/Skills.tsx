import Image from "next/image";

const skills = {
  software: ["C", "Cpp", "Csharp"],
  web: ["TypeScript", "React", "Nextjs", "Nodejs", "Electron"],
  other: ["Lua", "SQL", "PowerShell"],
};

export default function Skills() {
  return (
    <div className="mt-8 flex flex-col gap-4">
      {Object.entries(skills).map(([category, items]) => (
        <section key={category} className="w-full">
          <p className="mb-2 text-sm font-semibold capitalize text-[#74675b]">
            {category}
          </p>

          <div className="flex flex-wrap gap-2">
            {items.map((skill) => (
              <Image
                key={skill}
                src={`/logos/${skill}.png`}
                alt={`${skill} logo`}
                width={40}
                height={40}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}