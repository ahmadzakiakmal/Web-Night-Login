import Image from "next/image";
import { AboutUsLines } from "./AboutUsLines";

export const AboutUs = () => {
  return (
    <div
      id="About"
      className="w-full bg-white relative py-[20%] lg:py-0 lg:min-h-[100vh] flex justify-center items-center"
    >
      {/* png / svg  */}
      <div className="md:w-[20%] w-full h-full bg-dark-red absolute top-0 right-0 z-0"></div>
      <AboutUsLines />
      {/* content */}
      <div className="z-10 w-[90%] lg:w-[75%]">
        <div className="flex justify-center items-center flex-col-reverse md:flex-row lg:justify-between">
          <div className="max-w-[60ch] md:text-[#494949] text-white md:pr-5 self-center">
            <h1
              className="text-5xl md:text-6xl font-bold mb-[20px] text-center md:text-left"
              data-aos="fade-right"
            >
              About Us
            </h1>
            <p className="text-[20px] md:text-[22px] lg:text-[24px] text-justify md:text-left" data-aos="fade-right" data-aos-delay="500">
              Night Login merupakan Badan Semi Otonom (BSO) di DTETI FT UGM yang
              bergerak di bidang teknologi informasi. BSO ini merupakan wadah
              bagi mahasiswa DTETI yang memiliki minat di bidang IT untuk
              mengembangkan kemampuan, kreativitas, inovasi, dan memperluas
              wawasan terkait bidang-bidang IT.
            </p>
          </div>
          <div className="w-[200px] lg:w-[250px] flex-shrink-0 aspect-square mb-10 md:mb-0 md:self-center" data-aos="fade-left" >
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
