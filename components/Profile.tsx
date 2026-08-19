import Image from "next/image";

export default function Profile()
{
  return (
    <div className="shrink-0">
          <div className="w-[320px] rounded-3xl bg-[#f8f2e7] p-5">
            <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-[#c6532f] to-[#d7a34b]">
              <Image
                src="/avatar.png"
                alt="RealDzolat"
                width={320}
                height={320}
                className="w-full aspect-square object-cover"
              />
            </div>

            <h2 className="mt-5 text-3xl font-bold text-[#241c17]">@RealDzolat</h2>
            <p className="text-[#74675b]">Developer</p>
          </div>
        </div>
    )
}
