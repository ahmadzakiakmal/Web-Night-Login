import { CommunitiesLines } from "./CommunitiesLines";
import { CommunityCard } from "./CommunityCard";

export const Communities = () => {
  const communities = ["NLNC", "NUXC", "NCPC", "NADC", "NWDC", "NDDC"];
  return (
    <div id="Communities" className="h-screen bg-white relative flex flex-col items-center justify-center gap-5">
      <CommunitiesLines />
      <h1 className="text-6xl text-[#53585F] font-bold text-center z-10">
        Our Communities
      </h1>
      <div className="grid grid-cols-3 mx-[22%] gap-x-4 gap-y-5 relative z-10">
        {communities.map((community) => {
          return <CommunityCard image={`/NL Assets/${community}.png`} />;
        })}
        {/* <div className="bg-dark-red h-[50%] w-full absolute bottom-0 left-0 z-1"></div> */}
      </div>
    </div>
  );
};
