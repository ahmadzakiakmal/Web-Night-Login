import { CommunitiesLines } from "./CommunitiesLines";
import { CommunityCard } from "./CommunityCard";

export const Communities = () => {
  const communities = ["NLNC", "NUXC", "NCPC", "NADC", "NWDC", "NDDC"];
  return (
    <div id="Communities" className="h-screen bg-white relative flex flex-col items-center justify-center gap-5">
      {/* <div className="h-full w-[15%] bg-dark-red absolute top-0 left-0 z-0"></div> */}
      <CommunitiesLines />
      <h1 className="text-6xl text-[#53585F] font-bold text-center z-10">
        Our Communities
      </h1>
      <div className="grid grid-cols-3 mx-[22%] gap-x-4 gap-y-5 relative z-10">
        {communities.map((community, index) => {
          let delay= "0";
          switch (index) {
            case 0:
              delay = "0";
              break;
            case 1:
              delay = "300";
              break;
            case 2:
              delay = "600";
              break;
            case 3:
              delay = "900";
              break;
            case 4:
              delay = "1200";
              break;
            case 5:
              delay = "1500";
              break;
          }
          return <CommunityCard name={community} key={index} delay={delay} />;
        })}
        {/* <div className="bg-dark-red h-[50%] w-full absolute bottom-0 left-0 z-1"></div> */}
      </div>
    </div>
  );
};
