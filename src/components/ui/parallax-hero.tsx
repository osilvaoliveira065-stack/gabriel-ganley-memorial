"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Lenis from "@studio-freight/lenis"


export function ParallaxHero(){

const container = useRef<HTMLDivElement>(null)


useEffect(() => {

gsap.registerPlugin(ScrollTrigger)


const ctx = gsap.context(() => {


const background =
container.current?.querySelector<HTMLElement>(
"[data-layer='background']"
)

const smoke =
container.current?.querySelector<HTMLElement>(
"[data-layer='smoke']"
)

const gabriel =
container.current?.querySelector<HTMLElement>(
"[data-layer='gabriel']"
)

const text =
container.current?.querySelector<HTMLElement>(
"[data-layer='text']"
)

if (!background || !smoke || !gabriel || !text) return

const intro = gsap.timeline()


intro
.from(background,{
opacity:0,
scale:1.1,
duration:2,
ease:"power3.out"
})


.from(smoke,{
opacity:0,
scale:1.3,
duration:2,
ease:"power3.out"
},"-=1.5")


.from(gabriel,{
opacity:0,
x:120,
duration:1.8,
ease:"power4.out"
},"-=1")


.from(text,{
opacity:0,
x:-80,
duration:1.5,
ease:"power4.out"
},"-=1")

gsap.to(smoke,{
xPercent:10,
duration:20,
repeat:-1,
yoyo:true,
ease:"sine.inOut"
})

// Fundo

gsap.to(background,{
  yPercent:15,
  scale: 1.10,
  ease:"none",

  scrollTrigger:{
    trigger:container.current,
    start:"top top",
    end:"bottom top",
    scrub:1
  }

})


// Gabriel

gsap.to(gabriel,{
yPercent:8,
scale:1.05,
ease:"none",

scrollTrigger:{
trigger:container.current,
start:"top top",
end:"bottom top",
scrub:1
}

})

// Texto

gsap.to(text,{
yPercent:-10,
ease:"none",
scrollTrigger:{
trigger:container.current,
start:"70% top",
end: "100% top",
scrub:1.5
}

})


},container)



const lenis = new Lenis({

duration:1.2,

smoothWheel:true

})


lenis.on(
"scroll",
ScrollTrigger.update
)


gsap.ticker.add((time)=>{

lenis.raf(time * 1000)

})


return()=>{

ctx.revert()

lenis.destroy()

}


},[])



return(

<section
ref={container}
className="
relative
h-[180vh]
bg-black
"
>

    <div
className="
sticky
top-0
h-screen
overflow-hidden
"
>

{/* BACKGROUND */}

<img

data-layer="background"

src="/images/memorial/background.webp"

className="
absolute
inset-0
h-full
w-full
object-cover
"

/>



{/* LIGHT */}

<img
data-layer="smoke"

src="/images/memorial/smoke.webp"

className="
absolute
inset-0
h-full
w-full
object-cover
opacity-70
"

/>



{/* GABRIEL */}

<img

data-layer="gabriel"

src="/images/memorial/gabriel.webp"

className="
absolute
bottom-0
right-0
z-20
h-[85%]
object-contain
md:right-10
"

/>



{/* TEXTO */}

<div

data-layer="text"

className="
relative
z-30
flex
h-full
items-center
justify-start
px-8
md:px-20
"

>


<div
className="
max-w-xl
text-center
"
>


<p

className="
text-sm
tracking-[0.6em]
text-white/60
"

>
2004 — 2026
</p>



<h1

className="
mt-6
font-heading
text-7xl
uppercase
leading-none
text-white
md:text-9xl
"

>

Gabriel
<br/>
Ganley

</h1>



<p

className="
mt-8
text-xl
text-white/70
"

>

Um legado que permanece.

</p>


</div>


</div>

</div>

</section>

)


}