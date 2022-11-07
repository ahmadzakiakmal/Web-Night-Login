import Image from "next/image";

export const Navbar = () => {
  return (
    <div className="bg-black h-[8vh] flex justify-between w-full px-5">
      {/* Logo */}
      <div className="h-full flex items-center gap-3">
        <div className="h-[70%] aspect-square">
          <Image
            src="/NL Assets/Night Login/square.png"
            width={2000}
            height={2000}
            alt="Night Login Logo"
            priority={true}
          />
        </div>
        <div className="font-bold font-Poppins text-dark-red">
          <h1>NIGHT</h1>
          <h1>LOGIN</h1>
        </div>
      </div>
      {/* Nav Links */}
      <div className="flex gap-12 text-white items-center">
        <p>About</p>
        <p>About</p>
        <p>About</p>
      </div>
      {/* Search */}
      <div className="flex items-center">
        <form onSubmit={(e) => {e.preventDefault} }>
          <input className="rounded px-1" type="text" placeholder="🔍 Search" />
        </form>
      </div>
    </div>
  );
};
