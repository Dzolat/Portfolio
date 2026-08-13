import Image from "next/image";

export default function Hero() {
  return (
    <main className="min-h-screen pt-24">
      <section className="max-w-7xl mx-auto px-8 py-16 flex items-center gap-20">
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

            <h2 className="mt-5 text-3xl font-bold text-black">Alan Stec</h2>

            <h2 className="text-1xl font-bold text-gray-900">
              @RealDzolat
            </h2>

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

          <div className="flex gap-3 mt-8">
            <span className="pill">C++</span>

            <span className="pill">C</span>

            <span className="pill">C#</span>

            <span className="pill">Python</span>
          </div>
        </div>
      </section>
    </main>
  );
}
