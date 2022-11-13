import { CoverImage } from "./CoverImage";
import Image from "next/image";

interface PropsInterface {
  shortName: string;
  communityName: string;
  about: string;
}

export const Cover = (props: PropsInterface) => {
  return (
    <div className="h-[92vh] relative flex items-center">
      <CoverImage shortName={props.shortName} />
      <div className="flex mt-8 w-fit mx-auto justify-between p-[40px] gap-32">
        {/* Logo */}
        <div className="z-10 grid place-items-center">
          <Image
            src={`/NL Assets/${props.shortName}.png`}
            width={400}
            height={400}
            alt="community logo"
            priority={true}
          />
        </div>
        {/* About */}
        <div className="z-10 flex flex-col justify-center">
          <div className="mb-5">
            <h1 className="text-[90px] font-bold text-[#494949] tracking-widest">
              {props.shortName}
            </h1>
            <h2 className="mt-[-30px]  text-[#4e4e4e] max-w-[40ch]">{`NIGHTLOGIN ${props.communityName.toLocaleUpperCase()} COMMUNITY`}</h2>
          </div>
          <p className="max-w-[30ch] text-[22px]">{props.about}</p>
        </div>
      </div>
    </div>
  );
};
