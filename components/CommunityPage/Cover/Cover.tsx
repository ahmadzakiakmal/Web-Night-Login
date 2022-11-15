import { CoverImage } from "./CoverImage";
import Image from "next/image";
import { CommunityTeam } from "./CommunityTeam";

interface PropsInterface {
  shortName: string;
  communityName: string;
  about: string;
  accentColor: string;
  headName: string;
  viceName: string;
}

export const Cover = (props: PropsInterface) => {
  return (
    <div className="min-h-[92vh] relative flex items-center bg-[#FCFFFE]">
      <CoverImage shortName={props.shortName} />
      <div className="flex mt-8 mx-auto justify-between w-[70%] gap-16">
        {/* Logo */}
        <div className="z-10 grid place-items-center" data-aos="fade-right">
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
            <h1
              className="text-[90px] mt-[-30px] font-bold text-[#494949] tracking-widest"
              data-aos="fade-left"
            >
              {props.shortName}
            </h1>
            <h2
              className="mt-[-30px]  text-[#4e4e4e] max-w-[40ch]"
              data-aos="fade-left"
              data-aos-delay="300"
            >{`NIGHTLOGIN ${props.communityName.toLocaleUpperCase()} COMMUNITY`}</h2>
          </div>
          <p
            className="max-w-[35ch] text-[22px] text-[#4e4e4e] mb-10"
            data-aos="fade-left"
            data-aos-delay="600"
          >
            {props.about}
          </p>
          <div
            className="flex justify-between gap-3"
            data-aos="fade-left"
            data-aos-delay="900"
          >
            <CommunityTeam
              name={props.headName}
              position="Head"
              bgColor={props.accentColor}
            />
            <CommunityTeam
              name={props.viceName}
              position="Vice"
              bgColor={props.accentColor}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
