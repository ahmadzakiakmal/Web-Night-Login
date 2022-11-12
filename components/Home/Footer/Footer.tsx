import Image from "next/image";

export const Footer = () => {
  return (
    <div className="bg-black p-16">
      <div className="line bg-white my-5"></div>
      <div className="w-[100px] p-4">
        <Image
          src="/NL Assets/Night Login/square.png"
          width={500}
          height={500}
          alt="NL Logo"
        />
      </div>
    </div>
  );
};
