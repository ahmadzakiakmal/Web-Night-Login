import Image from "next/image"

interface PropsInterface {
  image:string
}

export const CommunityCard = (props:PropsInterface) => {
  return(
    <div className="w-fit aspect-square bg-white outline p-4 rounded-[20px] grid place-items-center">
      <Image src={props.image} width={500} height={500} alt="Community Logo" className="w-[50%]"/>
    </div>
  )
}