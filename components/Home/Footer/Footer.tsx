import Image from "next/image";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaInstagram,
  FaGooglePlus,
  FaPinterest,
  FaRss,
} from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiFillPrinter } from "react-icons/ai";

export const Footer = () => {
  return (
    <div className="bg-black px-[10%] md:px-16 py-8">
      <div className="line bg-white bg-opacity-70 my-5"></div>
      <div className="flex flex-col md:flex-row justify-between mb-3 md:mb-10 h-fit">
        <a href="#" className="button w-[80px] md:w-[150px] m-4 shadow-[8px_8px_0] shadow-slate-600 rounded-[20%]">
          <Image
            src="/NL Assets/Night Login/square.png"
            width={500}
            height={500}
            alt="NL Logo"
          />
        </a>
        <div className="text-white h-fit flex flex-col w-fit justify-between m-4 mb-5 md:mb-4 gap-3">
          <div className="flex items-center gap-2" ><IoLocationSharp/> Depok, Sleman, Yogyakarta</div>
          <div className="flex flex-col md:flex-row gap-2 justify-between">
            <div className="flex items-center gap-2"><BsFillTelephoneFill/> (123) 456-7890</div>
            <div className="flex items-center gap-2"><AiFillPrinter /> (123) 456-7890</div>
          </div>
          <div className="flex gap-5 mt-8 flex-wrap md:pb-0">
            <h1 className="mr-10 hidden lg:block">Social Media</h1>
            <a href="#!" className="button p-1 hover:text-red-600">
              <FaFacebook />
            </a>
            <a href="#!" className="button p-1 hover:text-red-600">
              <FaTwitter />
            </a>
            <a href="#!" className="button p-1 hover:text-red-600">
              <FaLinkedin />
            </a>
            <a href="#!" className="button p-1 hover:text-red-600">
              <FaYoutube />
            </a>
            <a href="#!" className="button p-1 hover:text-red-600">
              <FaInstagram />
            </a>
            <a href="#!" className="button p-1 hover:text-red-600">
              <FaGooglePlus />
            </a>
            <a href="#!" className="button p-1 hover:text-red-600">
              <FaPinterest />
            </a>
            <a href="#!" className="button p-1 hover:text-red-600">
              <FaRss />
            </a>
          </div>
        </div>
      </div>
      <div className="text-white flex flex-col md:flex-row justify-between ">
        <div className="flex w-full md:w-[40%] justify-between mb-2 md:mb-0">
          <a href="#About" className="hover:text-red-600">ABOUT</a>
          <a href="#Events" className="hover:text-red-600">EVENTS</a>
          <a href="#Communities" className="hover:text-red-600">COMMUNITIES</a>
        </div>
        <div className="line bg-white bg-opacity-70 my-5 md:hidden"></div>
        <div className="text-center">Copyright &copy; 2022 | Night Login.</div>
      </div>
      <div className="line bg-white bg-opacity-70 my-5 hidden md:block"></div>
    </div>
  );
};
