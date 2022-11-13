import Image from "next/image";

interface PropsInterface {
  shortName : string;
}

export const Cover = (props:PropsInterface) => {
  return(
    <div className="h-[70%] aspect-square">
      <Image src={`/NL Assets/${props.shortName}-cover.png`} width={1000} height={1000} alt="cover image"/>
    </div>
  )
}