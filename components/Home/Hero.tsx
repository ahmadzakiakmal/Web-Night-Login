import { HeroLines } from "./HeroLines"
import { LogoText } from "./LogoText"

export const Hero = () => {
  return(
    <div className="bg-white h-[92vh] w-full flex justify-center items-center relative">
      <HeroLines />
      <LogoText />
    </div>
  )
}