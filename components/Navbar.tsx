import Image from "next/image";
import Link from "next/link";
import { ButtonGroup } from "@/components/ui/button-group";
import { Button } from "@/components/ui/button";
import { Home, FolderOpen } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed flex justify-around items-center w-full h-15 bg-black/20 backdrop-blur-xl border-b border-white/10 shadow-lg">
      <Image
        className="rounded-full"
        width={40}
        height={40}
        src="/DIO.png"
        alt="Profile Picture"
      />

      <ButtonGroup>
        <Button variant="outline" render={<Link href="/" />}>
          <Home data-icon="inline-start" />
          Home
        </Button>

        <Button variant="outline" render={<Link href="/projects" />}>
          <FolderOpen data-icon="inline-start" />
          Projects
        </Button>
      </ButtonGroup>

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
