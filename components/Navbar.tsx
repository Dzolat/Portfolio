import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, FolderOpen, Info, Book } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="z-2 fixed flex justify-around items-center w-full h-15 bg-[#f8f2e7]/80 backdrop-blur-xl border-b border-[#cdbda6] shadow-lg">
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
        bg-gradient-to-r from-[#c6532f] to-[#8f3824]
        text-[#fffaf1]
        border-0
        shadow-[0_0_20px_rgba(198,83,47,0.24)]
        transition-shadow">
        Contact
      </Button>
    </nav>
  );
}
