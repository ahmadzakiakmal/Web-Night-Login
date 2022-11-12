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
    <div className="bg-black px-16 py-8">
      <div className="line bg-white bg-opacity-70 my-5"></div>
      <div className="flex justify-between mb-10 h-max">
        <a href="#" className="button w-[150px] m-4 shadow-[8px_8px_0] shadow-slate-600 rounded-[30px]">
          <Image
            src="/NL Assets/Night Login/square.png"
            width={500}
            height={500}
            alt="NL Logo"
          />
        </a>
        <div className="text-white h-[150px] flex flex-col w-fit justify-between m-4 gap-3">
          <div className="flex items-center gap-2" ><IoLocationSharp/> Depok, Sleman, Yogyakarta</div>
          <div className="flex justify-between">
            <div className="flex items-center gap-2"><BsFillTelephoneFill/> (123) 456-7890</div>
            <div className="flex items-center gap-2"><AiFillPrinter /> (123) 456-7890</div>
          </div>
          <div className="flex gap-5 mt-8">
            <h1 className="mr-10">Social Media</h1>
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
      <div className="text-white flex justify-between">
        <div className="flex w-[40%] justify-between">
          <a href="#About" className="hover:text-red-600">ABOUT</a>
          <a href="#Events" className="hover:text-red-600">EVENTS</a>
          <a href="#Communities" className="hover:text-red-600">COMMUNITIES</a>
        </div>
        <div>Copyright &copy; 2022 | Night Login.</div>
      </div>
      <div className="line bg-white bg-opacity-70 my-5"></div>
    </div>
  );
};
