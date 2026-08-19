import { certificates } from "@/data/certificates";
import VerticalTimelineItem from "./VerticalTimelineItem";

export default function Certifications() {
  return (
    <section className="mx-auto w-full max-w-5xl">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-black sm:text-5xl">Experience</h1>
      </div>

      <ol
        aria-label="Certification timeline"
        className="relative mt-14 space-y-10 pl-8 before:absolute before:bottom-3 before:left-[7px] before:top-3 before:w-px before:bg-[#29483d]/35 before:content-[''] sm:pl-12 sm:before:left-[11px]"
      >
        {certificates.map((certificate) => (
          <li key={certificate.path} className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-8 top-7 size-[15px] rounded-full border-4 border-[#ede4d3] bg-[#29483d] ring-1 ring-[#29483d] sm:-left-12 sm:size-[23px]"
            />
            <VerticalTimelineItem
              title={certificate.title}
              link={certificate.link}
              path={certificate.path}
            />
          </li>
        ))}
      </ol>
    </section>
  );
}
