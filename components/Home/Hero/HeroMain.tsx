import Image from "next/image";
import styles from "/styles/Hero.module.css";

export const HeroMain = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex flex-col ssm:flex-row items-center gap-5 ssm:gap-12 m-auto lg:pr-[10%] h-fit">
        <div
          className="aspect-square max-w-[200px] ssm:max-w-[300px]"
          data-aos="fade-up"
        >
          <Image
            src="/NL Assets/Night Login/square.png"
            width={2000}
            height={2000}
            alt="Night Login Logo"
            priority={true}
          />
        </div>
        <div className="font-bold font-Poppins md:text-[100px] text-[70px] z-10 max-h-[300px] text-dark-red tracking-wider">
          <h1
            className={styles.glow_red}
            data-aos="fade-up"
            data-aos-delay="500"
          >
            NIGHT
          </h1>
          <h1
            className={styles.glow_red}
            data-aos="fade-up"
            data-aos-delay="1000"
          >
            LOGIN
          </h1>
        </div>
      </div>
      <div
        className="w-3/4 text-right text-[32px] font-Poppins text-[#D2243E] border-b-[2px] border-b-[#D2243E] self-start tracking-wider mt-[20px]"
        data-aos="fade-right"
        data-aos-delay="1500"
        data-aos-once="true"
        data-aos-offset="-300"
      >
        DTETI FT UGM
      </div>
    </div>
  );
};
