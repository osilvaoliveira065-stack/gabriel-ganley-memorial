"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"


const events = [

{
year:"2003",
title:"O início",
text:"O nascimento de uma história que marcaria muitas pessoas.",
image:"/images/memorial/timeline/nascimento1.webp"
},


{
year:"2022",
title:"Primeiros passos",
text:"A descoberta da disciplina, treino e transformação pessoal.",
image:"/images/memorial/timeline/inicio.webp"
},


{
year:"2025",
title:"A construção do físico",
text:"Dedicação extrema ao fisiculturismo e evolução constante.",
image:"/images/memorial/timeline/fisico.webp"
},


{
year:"2025",
title:"Um legado nas redes",
text:"Inspirando milhares através da sua jornada.",
image:"/images/memorial/timeline/redes.webp"
},


{
year:"2026",
title:"Para sempre lembrado",
text:"Uma história que permanece além do tempo.",
image:"/images/memorial/timeline/legado.webp"
}

]

export function Timeline(){


const section = useRef<HTMLDivElement>(null)



useEffect(()=>{


gsap.registerPlugin(ScrollTrigger)



const ctx = gsap.context(()=>{


const line =
section.current?.querySelector<HTMLElement>(
"[data-line]"
)


const cards =
section.current?.querySelectorAll<HTMLElement>(
".timeline-card"
)

const images =
section.current?.querySelectorAll<HTMLElement>(
"[data-image]"
)


if(!line || !cards) return



// Linha crescendo

gsap.to(line,{

height:"100%",

ease:"none",

scrollTrigger:{

trigger:section.current,

start: "top 75%",
end: "bottom 35%",

scrub:2

}

})



// Cards

cards.forEach((card,index)=>{

const dot = card.querySelector<HTMLElement>("[data-dot]")
const year = card.querySelector<HTMLElement>(".timeline-year")
const title = card.querySelector<HTMLElement>(".timeline-title")
const text = card.querySelector<HTMLElement>(".timeline-text")
const image = card.querySelector<HTMLElement>(".timeline-image")
if (!dot || !year || !title || !text || !image) return

ScrollTrigger.create({

  trigger: card,

  start: "top center",

  end: "bottom center",

  onEnter() {

    gsap.to(dot,{
      scale:2,
      backgroundColor:"#ffffff",
      boxShadow:"0 0 30px rgba(255,255,255,.9)",
      duration:.4
    })

    gsap.to(year,{
      color:"#ffffff",
      opacity:1,
      duration:.4
    })

    gsap.to(title,{
      color:"#ffffff",
      duration:.4
    })

    gsap.to(text,{
      color:"rgba(255,255,255,.85)",
      duration:.4
    })

    gsap.to(image,{
      scale:1.05,
      duration:.8
    })

  },

  onLeaveBack() {

    gsap.to(dot,{
      scale:1,
      backgroundColor:"rgba(255,255,255,.4)",
      boxShadow:"none"
    })

    gsap.to(year,{
      color:"rgba(255,255,255,.2)"
    })

    gsap.to(title,{
      color:"rgba(255,255,255,.8)"
    })

    gsap.to(text,{
      color:"rgba(255,255,255,.5)"
    })

    gsap.to(image,{
      scale:1
    })

  }

})


})

images?.forEach((image) => {

  gsap.from(image, {

    opacity: 0,

    y: 80,

    scale: 1.08,

    duration: 1.2,

    ease: "power3.out",

    scrollTrigger: {

      trigger: image,

      start: "top 80%",

      toggleActions: "play none none reverse"

    }

  })

})

},section)

return()=>{

ctx.revert()

}



},[])



return(

<section

ref={section}

className="
relative
bg-black
py-20 md:py-40
text-white
"

>


<div

className="
mx-auto
max-w-5xl
px-8
"

>


<p

className="
text-sm
tracking-[0.5em]
text-white/50
"

>
A TRAJETÓRIA
</p>



<h2

className="
mt-6
text-4xl
font-heading
uppercase
sm:text-5xl
md:text-7xl
"

>

Uma vida
de dedicação

</h2>




<div

className="
relative
mt-32
"

>


{/* Linha base */}

<div

className="
absolute
left-5
top-0
h-full
w-[2px]
bg-white/10
md:left-1/2
"

>


<div

data-line

className="
h-0
w-full
bg-white
"

/>


</div>





<div

className="
space-y-16
md:space-y-32
"

>


{
events.map((event,index)=>(


<div

key={index}

className="
timeline-card
relative
grid
gap-8
pl-12
md:pl-0
items-center
md:grid-cols-2
"
>


{/* ponto */}

<div
data-dot
className="
absolute
left-0
top-4
h-4
w-4
rounded-full
bg-white/40
md:left-1/2
-translate-x-1/2
"
/>



<div
className={`
space-y-6
${index % 2 === 0
 ? "md:order-1 md:text-right"
 : "md:order-2"}

text-left
`}
>

  <h3
    className="
timeline-year
text-4xl
sm:text-5xl
md:text-6xl
font-bold
text-white/20
"
>
    {event.year}
  </h3>

  <h4
    className="
timeline-title
text-2xl
md:text-3xl
font-bold
text-white/80
"
  >
    {event.title}
  </h4>

  <p
    className="
timeline-text
mt-4
text-base
md:text-lg
leading-relaxed
text-white/50
"
  >
    {event.text}
  </p>

</div>
<div
data-image
className={`
overflow-hidden
rounded-2xl
border
border-white/10
shadow-2xl
${index % 2 === 0 ? "md:order-2" : "md:order-1"}
`}
>
  <Image
    src={event.image}
    alt={event.title}
    width={600}
    height={700}
    className="
timeline-image
h-[260px]
sm:h-[320px]
md:h-[420px]
w-full
object-cover
"
  />
</div>
</div>
))

}
</div>
</div>
</div>
</section>
)
}
