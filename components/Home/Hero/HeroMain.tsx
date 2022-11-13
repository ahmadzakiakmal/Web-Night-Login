import Image from "next/image";
import styles from "/styles/Hero.module.css";

export const HeroMain = () => {
  return(
    <div className="w-full flex flex-col items-center">
        <div className="flex items-center gap-12 m-auto pr-[10%]">
          <div className="aspect-square w-[300px]">
            <Image
              src="/NL Assets/Night Login/square.png"
              width={2000}
              height={2000}
              alt="Night Login Logo"
              priority={true}
            />
          </div>
          <div className="font-bold font-Poppins text-[100px] z-10 h-[300px] text-dark-red tracking-wider">
            <h1 className={styles.glow_red}>NIGHT</h1>
            <h1 className={styles.glow_red}>LOGIN</h1>
          </div>
        </div>
        <div className="w-3/4 text-right text-[32px] font-Poppins text-[#D2243E] border-b-[2px] border-b-[#D2243E] self-start tracking-wider">
          DTETI FT UGM
        </div>
      </div>
  )
}