"use client"

import { Play } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

export function VideoSection() {
    const [playing, setPlaying] = useState(false)

  return (
    <section className="bg-black py-40 text-white">
      <div className="mx-auto max-w-7xl px-8">

        {/* Cabeçalho */}

        <div className="mb-20 text-center">

          <p className="text-sm tracking-[0.5em] text-white/40">
            MEMORIAL
          </p>

          <h2 className="mt-6 font-heading text-5xl uppercase md:text-7xl">
            Uma história em movimento
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-white/60">
            Um registro visual de dedicação, evolução e inspiração.
          </p>

        </div>

        {/* Vídeo */}

        <div
  className="
  group
  relative
  mx-auto
  max-w-3xl
  overflow-hidden
  rounded-3xl
  border
  border-white/10
  "
>

          {!playing ? (

  <Image
    src="/images/memorial/video/cover.webp"
    alt="Gabriel Ganley"
    width={1000}
    height={1000}
    className="
    aspect-square
    w-full
    object-cover
    duration-500
    group-hover:scale-105
    "
  />

) : (

  <video
  className="
  aspect-square
  w-full
  object-cover
  bg-black
  "
  src="/videos/gabriel.mp4"
  controls
  autoPlay
  playsInline
  preload="metadata"
/>

)}

          {/* Overlay */}

          {!playing && (
  <div
    className="
    absolute
    inset-0
    bg-black/40
    transition
    duration-500
    group-hover:bg-black/20
    "
  />
)}

          {/* Botão */}

          {!playing && (
  <button
    onClick={() => setPlaying(true)}
    className="
    absolute
    left-1/2
    top-1/2
    flex
    h-24
    w-24
    -translate-x-1/2
    -translate-y-1/2
    items-center
    justify-center
    rounded-full
    border
    border-white/30
    bg-white/10
    backdrop-blur-xl
    transition-all
    duration-500
    group-hover:scale-110
    "
  >
    <Play
      className="ml-1"
      size={42}
      fill="white"
    />
  </button>
)}

        </div>

      </div>
      
    </section>
  )
}