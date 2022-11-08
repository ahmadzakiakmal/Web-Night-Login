import { AboutUsLines } from "./AboutUsLines";

export const AboutUs = () => {
  return (
    <div className="w-full bg-white relative h-[100vh] flex justify-center items-center">
      {/* png / svg  */}
      <div className="w-[20%] h-[100vh] bg-dark-red absolute top-0 right-0 z-0"></div>
      <AboutUsLines />
      {/* content */}
      <div className="z-10 w-3/4">
        <span className="text-6xl text-[#494949] font-bold">About Us</span>
        <div className="flex max-w-[50ch] text-[24px]">
          <p>
            Night Login merupakan Badan Semi Otonom (BSO) di DTETI FT UGM yang
            bergerak di bidang teknologi informasi. BSO ini merupakan wadah bagi
            mahasiswa DTETI yang memiliki minat di bidang IT untuk mengembangkan
            kemampuan, kreativitas, inovasi, dan memperluas wawasan terkait
            bidang-bidang IT.
          </p>
          <div></div>
        </div>
      </div>
    </div>
  );
};
