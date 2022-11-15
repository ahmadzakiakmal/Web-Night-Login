interface PropsInterface {
  bgColor: string;
  name: string;
  position: string;
}

export const CommunityTeam = (props:PropsInterface) => {
  return (
    <div className="flex gap-3 items-center text-[#4e4e4e] w-max">
      <div className={`rounded-full ${props.bgColor} bg-opacity-75 h-[60px] aspect-square`}></div>
      <div className="flex flex-col justify-center">
        <h1 className="font-bold text-lg max-w-[15ch] leading-tight">{props.name}</h1>
        <h2>{props.position}</h2>
      </div>
    </div>
  );
};
