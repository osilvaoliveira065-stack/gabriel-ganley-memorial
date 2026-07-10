"use client"

export function MemorialFooter() {

  return (

    <footer
      className="
      relative
      overflow-hidden
      border-t
      border-white/10
      bg-black
      py-40
      text-center
      text-white
      "
    >

      <div
        className="
        absolute
        inset-0
        bg-[radial-gradient(circle_at_center,rgba(255,255,255,.08),transparent_70%)]
        "
      />

      <div className="relative z-10">

        <div className="mx-auto mb-16 h-px w-40 bg-white/20"/>

        <p
          className="
          text-4xl
          italic
          text-white/80
          md:text-6xl
          "
        >
          Gone,<br/>
          but never forgotten.
        </p>

        <h3
          className="
          mt-16
          font-heading
          text-5xl
          uppercase
          "
        >
          Gabriel Ganley
        </h3>

        <p
          className="
          mt-4
          text-xl
          tracking-[0.4em]
          text-white/40
          "
        >
          2003 — 2026
        </p>

        <div className="mx-auto mt-16 h-px w-40 bg-white/20"/>

      </div>

    </footer>

  )

}