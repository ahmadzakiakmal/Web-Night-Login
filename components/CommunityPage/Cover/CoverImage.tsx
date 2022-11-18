import Image from "next/image";

interface PropsInterface {
  shortName: string;
}

export const CoverImage = (props: PropsInterface) => {
  return (
    <div className="w-[70%] lg:h-[80%] lg:w-auto aspect-square absolute top-0 left-0 z-0">
      <Image
        src={`/NL Assets/${props.shortName}-cover.png`}
        width={1000}
        height={1000}
        alt="cover image"
        priority={true}
      />
    </div>
  );
};
