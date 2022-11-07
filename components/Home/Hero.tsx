import { HeroLines } from "./HeroLines"
import { HeroMain } from "./HeroMain"

export const Hero = () => {
  return(
    <div className="bg-white h-[92vh] w-full relative">
      <HeroLines />
      <HeroMain />
    </div>
  )
}