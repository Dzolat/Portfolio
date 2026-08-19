import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { FaGithub } from "react-icons/fa";
import { FolderOpen } from "lucide-react";
import Profile from "./Profile";

export default function Hero() {
  return (
    <main className="min-h-screen pt-24">
      <section className="max-w-7xl mx-auto px-8 pt-16 pb-4 flex items-center gap-20">
        {/* Left card */}
        <Profile />

        {/* Right side */}
        <div className="flex flex-col">
          <h1 className="text-[clamp(4rem,8vw,8rem)] leading-[0.85] font-black tracking-tight text-[#241c17]">
            SOFTWARE
          </h1>

          <h1 className="text-[clamp(4rem,8vw,8rem)] leading-[0.85] font-black tracking-tight text-[#a88e72]">
            DEVELOPER
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-[#74675b]">
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
