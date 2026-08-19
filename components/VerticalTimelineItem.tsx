import { CertificateProps } from "@/data/certificates";
import { Button } from "./ui/button";
import Image from "next/image";

export default function VerticalTimelineItem({
  title,
  link,
  path,
}: CertificateProps) {
  return (
    <article className="w-full max-w-3xl overflow-hidden rounded-2xl border border-[#cdbda6] bg-[#f8f2e7]/75 shadow-[0_14px_36px_rgba(74,55,39,0.07)]">
      <div className="grid gap-0 md:grid-cols-[minmax(0,0.9fr)_minmax(280px,1.1fr)]">
        <div className="flex flex-col items-start justify-between gap-6 p-5 sm:p-6">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-[#74675b]">
              Certification
            </p>
            <h2 className="text-xl font-black leading-tight sm:text-2xl">
              {title}
            </h2>
          </div>

          <Button
            render={<a href={link} target="_blank" rel="noreferrer" />}
            className="rounded-full"
          >
            View credential {`->`}
          </Button>
        </div>

        <div className="border-t border-[#cdbda6] bg-[#dfd2be]/45 p-2 sm:p-3 md:border-l md:border-t-0">
          <Image
            src={`/certifications/${path}#zoom=page-width`}
            alt={path}
            width={1200}
            height={700}
            className="rounded-xl border-0 bg-white object-cover"
            title={title}
          />
        </div>
      </div>
    </article>
  );
}
