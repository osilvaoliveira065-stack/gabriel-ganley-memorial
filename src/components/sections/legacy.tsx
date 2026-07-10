"use client"

import Image from "next/image"

export function Legacy() {
  return (
    <section className="bg-[#050505] py-40 text-white">
      <div className="mx-auto max-w-7xl px-8">

        <p className="text-center text-sm tracking-[0.5em] text-white/40">
          O LEGADO
        </p>

        <h2 className="mt-6 text-center font-heading text-5xl uppercase md:text-7xl">
          Muito além dos palcos
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-center text-xl leading-relaxed text-white/60">
          Sua dedicação, disciplina e forma de viver inspiraram milhares de
          pessoas. O legado permanece através de todos aqueles que continuam
          acreditando que sempre é possível evoluir.
        </p>

        <div className="mt-24 overflow-hidden rounded-3xl">
  <Image
    src="/images/memorial/legacy.webp"
    alt="Gabriel Ganley"
    width={1600}
    height={1000}
    className="h-[850px] w-full object-cover"
  />
</div>

      </div>
    </section>
  )
}