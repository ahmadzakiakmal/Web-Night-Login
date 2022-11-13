interface PropsInterface {
  name: string;
  position: string;
}

export const Card = (props:PropsInterface) => {
  return(
    <div className="bg-white min-h-[200px] w-[250px] rounded-2xl shadow-[0px_0px_15px] relative overflow-hidden shadow-[rgba(255,255,255,0.4)]">
      <div className="h-[30%] w-full absolute bottom-0 left-0 z-10 flex flex-col items-center justify-center bg-dark-red p-2">
        <h1 className="text-xl text-white font-bold">{props.name}</h1>
        <h1 className="text-md text-white">{props.position}</h1>
      </div>
    </div>
  )
}