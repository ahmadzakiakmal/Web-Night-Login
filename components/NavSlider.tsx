import Link from "next/link";

interface PropsInterface {
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NavSlider = (props: PropsInterface) => {
  if (props.isOpen) {
    return (
      <div className="text-white ssm:hidden fixed rounded-tl-2xl rounded-bl-2xl rounded-br-2xl shadow-[0_0_4px_white] text-[18px] mt-[10vh] m-5 top-0 right-0 bg-gradient-to-br from-[#D42440] to-[#B32432] flex flex-col z-20 p-[10%]">
        <Link
          href="#About"
          className="hover:underline hover:underline-offset-2"
          onClick={() => { props.setOpen(false) }}
        >
          About
        </Link>
        <Link
          href="#Events"
          className="hover:underline hover:underline-offset-2"
          onClick={() => { props.setOpen(false) }}
        >
          Events
        </Link>
        <Link
          href="#Communities"
          className="hover:underline hover:underline-offset-2"
          onClick={() => { props.setOpen(false) }}
        >
          Communities
        </Link>
        {/* <div className="bg-[#B32432] w-[200%] h-[200px] rotate-[-60deg] origin-left absolute bottom-[-40%] right-[-150%]"></div> */}
      </div>
    );
  } else {
    return(<></>)
  }
};
