import Link from "next/link";

interface PropsInterface {
  page: string;
  openSlider: boolean;
}

export const CommunityNavSlider = (props: PropsInterface) => {
  let navBG;
  switch (props.page) {
    case "NWDC":
      navBG =
        "fixed top-[8vh] right-0 bg-[#3D81A5] z-10 shadow-[0_0_4px_white] m-5 p-10 text-white rounded-tl-2xl rounded-bl-2xl rounded-br-2xl md:hidden";
      break;
    case "NADC":
      navBG = "fixed top-[8vh] right-0 bg-[#B0AFA5] z-10 shadow-[0_0_4px_white] m-5 p-10 text-white rounded-tl-2xl rounded-bl-2xl rounded-br-2xl md:hidden";
      break;
    case "NCPC":
      navBG = "fixed top-[8vh] right-0 bg-[#30A758] z-10 shadow-[0_0_4px_white] m-5 p-10 text-white rounded-tl-2xl rounded-bl-2xl rounded-br-2xl md:hidden";
      break;
    case "NUXC":
      navBG = "fixed top-[8vh] right-0 bg-[#A52A3A] z-10 shadow-[0_0_4px_white] m-5 p-10 text-white rounded-tl-2xl rounded-bl-2xl rounded-br-2xl md:hidden";
      break;
    case "NDDC":
      navBG = "fixed top-[8vh] right-0 bg-[#312F2F] z-10 shadow-[0_0_4px_white] m-5 p-10 text-white rounded-tl-2xl rounded-bl-2xl rounded-br-2xl md:hidden";
      break;
    case "NLNC":
      navBG = "fixed top-[8vh] right-0 bg-[#59574A] z-10 shadow-[0_0_4px_white] m-5 p-10 text-white rounded-tl-2xl rounded-bl-2xl rounded-br-2xl md:hidden";
      break;
  }

  if (props.openSlider) {
    return (
      <div className={navBG}>
        <Link href="/#Communities">Communities</Link>
        <div className="line bg-white"></div>
        <div className="flex flex-col pt-2">
          <Link href="/NLNC">NLNC</Link>
          <Link href="/NUXC">NUXC</Link>
          <Link href="/NCPC">NCPC</Link>
          <Link href="/NADC">NADC</Link>
          <Link href="/NWDC">NWDC</Link>
          <Link href="/NDDC">NDDC</Link>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};
