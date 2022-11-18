import { HeroMain } from "./HeroMain";
import { HeroLines } from "./HeroLines";

export const Hero = () => {
  return (
    <div className="bg-white min-h-[92vh] mt-[8vh] w-full relative flex justify-center items-center">
      {/* png / svg  */}
      <HeroLines />
      {/* logo + text */}
      <HeroMain />
    </div>
  );
};
