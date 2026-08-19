import Image from "next/image";
import { Button } from "./ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ProjectCardProps } from "@/data/projects";
import Link from "next/link";

export default function ProjectCard({
    title,
    description,
    path
}: ProjectCardProps) {
  return (
    <Card className="bg-gradient-to-r from-[#f8f2e7] to-[#eadcc7]">
        <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
            <CardAction>
                <Button render={<Link href={`/projects/${path}`} />} className="rounded-full">View more {`->`}</Button>
            </CardAction>
        </CardHeader>
        <CardContent>
            <Image src={`/projects/${path}.png`} alt={title} width={1200} height={700} className="w-full rounded-lg object-cover" />
        </CardContent>
    </Card>
  );
}
