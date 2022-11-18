import { title } from "process";

interface PropsInterface  {
  title: string;
  desc: string;
  image: string;
}

export const EventCard = (props:PropsInterface) => {
  return (
    <div className="bg-white rounded-[11px] px-[30px] py-[10px] z-10">
      <div className="bg-black aspect-[2/1] rounded-[11px] mt-[-10%]"></div>
      <h2 className="font-bold text-[20px] mt-[10px] text-center">{props.title}</h2>
      <p className="mb-[5px] font-OpenSans max-w-[90%] md:max-w-[75%] mx-auto text-center" >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
        dignissimos nulla accusantium omnis.
      </p>
    </div>
  );
};
