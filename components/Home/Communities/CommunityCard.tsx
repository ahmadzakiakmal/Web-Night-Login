import Image from "next/image";

interface PropsInterface {
  image: string;
}

export const CommunityCard = (props: PropsInterface) => {
  return (
    <div className="w-fit aspect-square bg-transparent outline outline-2 p-1 rounded-[20px] grid place-items-center cursor-pointer z-10 hover:shadow-[0_0_10px_1px_#000000] bg-slate-600">
      <Image
        src={props.image}
        width={500}
        height={500}
        alt="Community Logo"
        className="w-3/4"
      />
    </div>
  );
};
