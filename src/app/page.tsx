import { ParallaxHero } from "@/components/ui/parallax-hero"
import { Timeline } from "@/components/sections/timeline"
import { Legacy } from "@/components/sections/legacy"
import { Gallery } from "@/components/sections/gallery"
import { VideoSection } from "@/components/sections/video"
import { MusicPlayer } from "@/components/sections/music-player"
import { MemorialFooter } from "@/components/sections/Footer"

export default function Home(){

return(
<main>
    
<ParallaxHero />
<Timeline />
<Legacy />
<Gallery />
<VideoSection />
<MemorialFooter />
<MusicPlayer />
</main>
)
}