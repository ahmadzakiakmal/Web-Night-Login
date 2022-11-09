import Image from "next/image";
import { AboutUsLines } from "./AboutUsLines";

export const AboutUs = () => {
  return (
    <div className="w-full bg-white relative h-[100vh] flex justify-center items-center">
      {/* png / svg  */}
      <div className="w-[20%] h-[100vh] bg-dark-red absolute top-0 right-0 z-0"></div>
      <AboutUsLines />
      {/* content */}
      <div className="z-10 w-[90%]">
        <div className="flex text-[24px] justify-center">
          <p className="max-w-[50ch] pr-5 self-center">
            <h1 className="text-6xl text-[#494949] font-bold mb-[20px] w-fit">
              About Us
            </h1>
            Night Login merupakan Badan Semi Otonom (BSO) di DTETI FT UGM yang
            bergerak di bidang teknologi informasi. BSO ini merupakan wadah bagi
            mahasiswa DTETI yang memiliki minat di bidang IT untuk mengembangkan
            kemampuan, kreativitas, inovasi, dan memperluas wawasan terkait
            bidang-bidang IT.
          </p>
          <div className="h-[300px] aspect-square">
            <Image
              src="/NL Assets/Night Login/square.png"
              width={2000}
              height={1000}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
