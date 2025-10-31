import Hero from '../Hero'
import heroImage from '@assets/generated_images/Peaceful_bedroom_twilight_scene_ec765815.png'

export default function HeroExample() {
  return (
    <Hero
      title="Better Sleep Starts Here"
      subtitle="Advanced sleep tracking technology powered by science to help you achieve optimal rest and wellness."
      primaryCta={{ text: "Explore Technology", href: "/products" }}
      secondaryCta={{ text: "Learn More", href: "/about" }}
      backgroundImage={heroImage}
    />
  )
}
