import Image from "next/image";
import styles from "../../styles/Hero.module.css";

export const LogoText = () => {
  return (
    <div className="flex flex-row items-center ml-[-200px] gap-12 z-10">
      <div className="aspect-square w-[300px]">
        <Image
          src="/NL Assets/Night Login/square.png"
          width={2000}
          height={2000}
          alt="Night Login Logo"
          priority={true}
        />
      </div>
      <div className="font-bold font-Poppins text-[100px] h-[300px] text-[#B60E13] ">
        <h1 className={styles.glow_red}>NIGHT</h1>
        <h1 className={styles.glow_red}>LOGIN</h1>
      </div>
    </div>
  );
};
