import Image from "next/image";
import Link from "next/link";

interface PropsInterface {
  name: string;
  delay: string;
}

export const CommunityCard = (props: PropsInterface) => {
  return (
    <Link href={`/${props.name}`} className="w-fit aspect-square bg-transparent outline outline-2 p-1 rounded-[20px] grid place-items-center cursor-pointer z-10 hover:shadow-[0_0_10px_1px_#000000] bg-slate-600 hover:bg-opacity-95 bg-opacity-100" data-aos="fade-up"
    data-aos-delay={props.delay}>
      <Image
        src={`/NL Assets/${props.name}.png`}
        width={500}
        height={500}
        alt="Community Logo"
        className="w-3/4"
      />
    </Link>
  );
};
