import { HeroMain } from "./HeroMain";
import { HeroLines } from "./HeroLines";

export const Hero = () => {
  return (
    <div className="bg-white h-[92vh] w-full relative flex justify-center items-center">
      {/* png / svg  */}
      <HeroLines />
      {/* logo + text */}
      <HeroMain />
    </div>
  );
};
