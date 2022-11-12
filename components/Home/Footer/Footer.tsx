import Image from "next/image";

export const Footer = () => {
  return (
    <div className="bg-black px-16 py-8">
      <div className="line bg-white my-5"></div>
      <div className="flex justify-between mb-10 h-max">
        <div className="w-[150px] m-4 shadow-[8px_8px_0] shadow-slate-600 rounded-[30px]">
          <Image
            src="/NL Assets/Night Login/square.png"
            width={500}
            height={500}
            alt="NL Logo"
          />
        </div>
        <div className="text-white h-[150px] flex flex-col w-fit justify-between m-4 gap-3">
          <div>Depok, Sleman, Yogyakarta</div>
          <div className="flex justify-between">
            <div>(123) 456-7890</div>
            <div>(123) 456-7890</div>
          </div>
          <div className="flex gap-5 mt-8">
            <h1 className="mr-10">Social Media</h1>
            <div>
              FB
            </div>
            <div>
              FB
            </div>
            <div>
              FB
            </div>
            <div>
              FB
            </div>
            <div>
              FB
            </div>
            <div>
              FB
            </div>
            <div>
              FB
            </div>
            <div>
              FB
            </div>
          </div>
        </div>
      </div>
      <div className="text-white flex justify-between">
        <div className="flex w-[40%] justify-between">
          <h1>ABOUT</h1>
          <h1>EVENTS</h1>
          <h1>COMMUNITIES</h1>
        </div>
        <div>
          Copyright &copy; 2022 | Night Login.
        </div>
      </div>
      <div className="line bg-white my-5"></div>
    </div>
  );
};
