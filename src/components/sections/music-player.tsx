"use client"

import Image from "next/image"
import {
  Music2,
  Pause,
  Play,
  SkipBack,
  SkipForward,
} from "lucide-react"
import { useEffect, useRef, useState } from "react"

const playlist = [
  {
    title: "Back To Black",
    artist: "Amy Winehouse",
    cover: "/images/music/back-to-black.webp",
    src: "/audio/Back To Black - Amy Winehouse.mp3",
  },
  {
    title: "Babydoll",
    artist: "Dominic Fike",
    cover: "/images/music/babydoll.webp",
    src: "/audio/Dominic Fike - Babydoll (Lyrics) - 7clouds Rock.mp3",
  },
  {
    title: "Self Aware",
    artist: "Temper City",
    cover: "/images/music/self-aware.webp",
    src: "/audio/Temper City - Self Aware (Lyrics) - Creative Chaos.mp3",
  },
  {
    title: "Tek It",
    artist: "Cafuné",
    cover: "/images/music/tek-it.webp",
    src: "/audio/Cafuné - Tek It [Official Audio] - CAFUNÉ.mp3",
  },
]
export function MusicPlayer() {

  const audioRef = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)
  const [current, setCurrent] = useState(0)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)

  useEffect(() => {

  const audio = audioRef.current

  if (!audio) return

  const update = () => {

    setCurrentTime(audio.currentTime)
    setDuration(audio.duration || 0)

  }

  audio.addEventListener("timeupdate", update)
  audio.addEventListener("loadedmetadata", update)

  return () => {

    audio.removeEventListener("timeupdate", update)
    audio.removeEventListener("loadedmetadata", update)

  }

}, [])

  useEffect(() => {

    const audio = audioRef.current

    if (!audio) return

    let frame: number

    if (playing) {

      audio.play()

      const fadeIn = () => {

        if (audio.volume < 0.25) {
          audio.volume += 0.01
          frame = requestAnimationFrame(fadeIn)
        }

      }

      audio.volume = 0

      fadeIn()

    } else {

      const fadeOut = () => {

        if (audio.volume > 0.01) {

          audio.volume -= 0.01

          frame = requestAnimationFrame(fadeOut)

        } else {

          audio.pause()

          audio.volume = 0

        }

      }

      fadeOut()

    }

    return () => cancelAnimationFrame(frame)

  }, [playing])

  useEffect(() => {

  if (!audioRef.current) return

  audioRef.current.load()

  if (playing) {

    audioRef.current.play()

  }

}, [current])

  const nextMusic = () => {

  setCurrent((prev) =>

    prev === playlist.length - 1
      ? 0
      : prev + 1

  )

}

const prevMusic = () => {

  setCurrent((prev) =>

    prev === 0
      ? playlist.length - 1
      : prev - 1

  )

}

const formatTime = (time: number) => {

  const min = Math.floor(time / 60)

  const sec = Math.floor(time % 60)

  return `${min}:${sec.toString().padStart(2,"0")}`

}

  return (

    <>
      <audio
  ref={audioRef}
  src={playlist[current].src}
  onEnded={nextMusic}
/>

      <div
  className="
  fixed
  bottom-8
  right-8
  z-50
  w-[320px]
  rounded-3xl
  border
  border-white/10
  bg-black/70
  backdrop-blur-3xl
  shadow-2xl
  p-4
  "
>

  {/* Ícone */}

  <div className="flex items-center gap-3">

  <Image
    src={playlist[current].cover}
    alt={playlist[current].title}
    width={52}
    height={52}
    className={`
      h-12
      w-12
      rounded-xl
      object-cover
      shadow-lg
      transition-transform
      duration-500
      ${playing ? "animate-spin" : ""}
    `}
    style={{
      animationDuration: "12s",
      animationTimingFunction: "linear",
      animationIterationCount: "infinite",
    }}
  />

  <div className="flex-1 min-w-0">

    <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">
      Música Ambiente
    </p>

    <h3 className="truncate text-sm font-semibold text-white">
      {playlist[current].title}
    </h3>

    <p className="truncate text-xs text-white/50">
      {playlist[current].artist}
    </p>

  </div>

</div>

  {/* Informações */}

  <div>

  <p className="text-xs uppercase tracking-[0.35em] text-white/40">
    Música Ambiente
  </p>

  <h3 className="mt-2 text-sm font-medium text-white truncate">
    {playlist[current].title}
  </h3>

  <div className="mt-4">

  <input
    type="range"
    min={0}
    max={duration || 0}
    value={currentTime}
    onChange={(e) => {

      if (!audioRef.current) return

      audioRef.current.currentTime =
        Number(e.target.value)

      setCurrentTime(Number(e.target.value))

    }}
    className="
mt-3
h-1
w-full
cursor-pointer
accent-white
"
  />

</div>

<div className="mt-1 flex justify-between text-xs text-white/50">

  <span>
    {formatTime(currentTime)}
  </span>

  <span>
    {formatTime(duration)}
  </span>

</div>

</div>

  {/* Controles */}

  <div className="mt-5 flex items-center justify-between">

  <button
  onClick={prevMusic}
  className="
  flex
  h-10
  w-10
  items-center
  justify-center
  rounded-full
  text-white
  hover:bg-white/10
  transition
  "
>
    <SkipBack size={22}/>
  </button>

  <button
    onClick={() => setPlaying(!playing)}
    className="
    flex
    h-10
    w-10
    items-center
    justify-center
    rounded-full
    bg-white
    text-black
    transition
    hover:scale-110
    "
  >
    {playing
      ? <Pause size={18}/>
      : <Play size={18}/>
    }
  </button>

  <button
  onClick={nextMusic}
  className="
  flex
  h-10
  w-10
  items-center
  justify-center
  rounded-full
  text-white
  hover:bg-white/10
  transition
  "
>
    <SkipForward size={18}/>
  </button>

</div>

</div>

    </>

  )

}