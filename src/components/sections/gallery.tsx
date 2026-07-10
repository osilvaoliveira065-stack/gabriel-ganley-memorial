"use client"

import Image from "next/image"

const images = [
  "/images/memorial/gallery/01.jpg",
  "/images/memorial/gallery/02.jpg",
  "/images/memorial/gallery/03.jpg",
  "/images/memorial/gallery/04.jpg",
  "/images/memorial/gallery/05.jpg",
  "/images/memorial/gallery/06.jpg",
  "/images/memorial/gallery/07.jpg",
  "/images/memorial/gallery/08.jpg",
  "/images/memorial/gallery/09.jpg",
]

export function Gallery() {
  return (
    <section className="bg-[#050505] py-40 text-white">
      <div className="mx-auto max-w-7xl px-8">

        {/* Cabeçalho */}

        <div className="mb-20 text-center">

          <p className="text-sm tracking-[0.5em] text-white/40">
            MOMENTOS
          </p>

          <h2 className="mt-6 font-heading text-5xl uppercase md:text-7xl">
            Uma história em imagens
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-white/60">
            Cada fotografia representa um capítulo de uma trajetória construída
            com disciplina, dedicação e inspiração.
          </p>

        </div>

        {/* Grid */}

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {images.map((image, index) => (

            <div
              key={index}
              className="
              group
              overflow-hidden
              rounded-3xl
              border
              border-white/10
              bg-white/5
              "
            >

              <Image
                src={image}
                alt={`Gabriel Ganley ${index + 1}`}
                width={800}
                height={1000}
                className="
                h-[420px]
                w-full
                object-cover
                transition-all
                duration-700
                group-hover:scale-110
                "
              />

            </div>

          ))}

        </div>

      </div>
    </section>
  )
}