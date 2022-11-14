import Image from "next/image";
import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";

export const Navbar = () => {
  return (
    <div className="bg-black h-[8vh] flex justify-between w-full px-5">
      {/* Logo */}
      <div className="h-full flex items-center gap-3">
        <Link href="/" className="h-[70%] aspect-square flex items-center gap-3">
          <Image
            src="/NL Assets/Night Login/square.png"
            width={2000}
            height={2000}
            alt="Night Login Logo"
            priority={true}
          />
          <div className="font-bold font-Poppins text-dark-red">
            <h1>NIGHT</h1>
            <h1>LOGIN</h1>
          </div>
        </Link>
      </div>
      {/* Nav Links */}
      <div className="flex gap-12 text-white items-center">
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
      <div className="flex items-center">
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
    </div>
  );
};
