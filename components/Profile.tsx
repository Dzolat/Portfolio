import Image from "next/image";

export default function Profile()
{
  return (
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
    )
}