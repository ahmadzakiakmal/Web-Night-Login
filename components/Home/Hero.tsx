import { HeroLines } from "./HeroLines"
import { LogoText } from "./LogoText"

export const Hero = () => {
  return(
    <div className="bg-white h-screen w-full flex justify-center items-center">
      <HeroLines />
      <LogoText />
    </div>
  )
}