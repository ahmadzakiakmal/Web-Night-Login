import Image from "next/image";
import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";
import { MdOutlineMenu } from "react-icons/md";
import { NavSlider } from "./NavSlider";
import { useState } from "react";

export const Navbar = () => {
  const [openNavSlider, setOpenNavSlider] = useState(false); 
  return (
    <div className="bg-black h-[8vh] shadow-[0_0_10px_#B60E13] flex justify-between w-full px-[5%] md:px-5 fixed top-0 left-0 z-30">
      {/* Logo */}
      <div className="h-full flex items-center gap-3">
        <Link
          href="/"
          className="h-[70%] aspect-square flex items-center gap-3"
        >
          <Image
            src="/NL Assets/Night Login/square.png"
            width={2000}
            height={2000}
            alt="Night Login Logo"
            priority={true}
          />
          <div className="font-bold font-Poppins text-dark-red ">
            <h1>NIGHT</h1>
            <h1>LOGIN</h1>
          </div>
        </Link>
      </div>
      {/* Nav Links */}
      <div className="text-white text-3xl ssm:hidden h-full flex items-center button" onClick={() => {setOpenNavSlider(!openNavSlider)}}>
        <MdOutlineMenu />
      </div>
      <div className="ssm:flex gap-12 text-white items-center hidden">
        <a href="#About" className="hover:text-red-600">
          About
        </a>
        <a href="#Events" className="hover:text-red-600">
          Events
        </a>
        <a href="#Communities" className="hover:text-red-600">
          Communities
        </a>
      </div>
      {/* Search */}
      <div className="lg:flex items-center hidden ">
        <form
          onSubmit={(e) => {
            e.preventDefault;
          }}
          className="flex items-center gap-2"
        >
          <input className="rounded px-1" type="text" placeholder="Search" />
          <div className="text-white button hover:text-red-600 p-3">
            <AiOutlineSearch />
          </div>
        </form>
      </div>
      {/* Menu Slider */}
      <NavSlider isOpen={openNavSlider} setOpen={setOpenNavSlider}/>
    </div>
  );
};
