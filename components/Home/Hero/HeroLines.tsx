import Image from "next/image";

export const HeroLines = () => {
  return (
    <div className="absolute top-0 right-0 w-[41%] h-1/2">
      <Image src="/HeroLines.png" width={2000} height={2000} alt="Lines" />
    </div>
  );
};
