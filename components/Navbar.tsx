import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, FolderOpen, Info, Book } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed flex justify-around items-center w-full h-15 bg-black/20 backdrop-blur-xl border-b border-white/10 shadow-lg">
      <h1>
        RealDzolat
      </h1>

      <div className="flex gap-2">
        <Button className="rounded-full" variant="outline" render={<Link href="/" />}>
          <Home data-icon="inline-start" />
          Home
        </Button>

        <Button className="rounded-full" variant="outline" render={<Link href="/projects" />}>
          <FolderOpen data-icon="inline-start" />
          Projects
        </Button>

        <Button className="rounded-full" variant="outline" render={<Link href="/experience" />}>
          <Book data-icon="inline-start" />
          Experience
        </Button>

        <Button className="rounded-full" variant="outline" render={<Link href="/about" />}>
          <Info data-icon="inline-start" />
          About Me
        </Button>
      </div>

      <Button
        render={<Link href="/contact" />}
        className="
        rounded-full
        bg-gradient-to-r from-[#FF0000] to-[#FDCF58]
        text-white
        border-0
        shadow-[0_0_20px_rgba(253,207,88,0.45)]
        transition-shadow">
        Contact
      </Button>
    </nav>
  );
}
