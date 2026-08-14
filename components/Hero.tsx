import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { FaGithub } from "react-icons/fa";
import { FolderOpen } from "lucide-react";

export default function Hero() {
  return (
    <main className="min-h-screen pt-24">
      <section className="max-w-7xl mx-auto px-8 pt-16 pb-4 flex items-center gap-20">
        {/* Left card */}
        <div className="shrink-0">
          <div className="w-[320px] rounded-3xl bg-white p-5">
            <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-[#FF0000] to-[#FDCF58]">
              <Image
                src="/avatar.png"
                alt="RealDzolat"
                width={320}
                height={320}
                className="w-full aspect-square object-cover"
              />
            </div>

            <h2 className="mt-5 text-3xl font-bold text-gray-900">@RealDzolat</h2>
            <p className="text-black/60">Developer</p>
          </div>
        </div>

        {/* Right side */}
        <div className="flex flex-col">
          <h1 className="text-[clamp(4rem,8vw,8rem)] leading-[0.85] font-black tracking-tight text-white">
            SOFTWARE
          </h1>

          <h1 className="text-[clamp(4rem,8vw,8rem)] leading-[0.85] font-black tracking-tight text-white/15">
            DEVELOPER
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/50">
            I build software, web apps and games.
          </p>

          <div className="flex gap-3 mt-4">
            <Image width="40" height="40" src="/logos/C++.png" alt="C++" />
            <Image width="40" height="40" src="/logos/C.png" alt="C" />
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-8 flex flex-center items-center gap-12">
        <Button className="rounded-full" render={<a href="https://github.com/Dzolat" />}>
          <FaGithub data-icon="inline-start" />
          View Github
        </Button>
        <Button className="rounded-full" render={<Link href="/projects" />}>
          <FolderOpen data-icon="inline-start" />
          Explore Projects
        </Button>
      </section>
    </main>
  );
}
