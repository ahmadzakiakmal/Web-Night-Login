import { CommunitiesLines } from "./CommunitiesLines"
import { CommunityCard } from "./CommunityCard"

export const Communities = () => {
  const communities = ["NLNC", "NUXC", "NCPC", "NADC", "NWDC", "NDDC"]
  return(
    <div className="h-screen bg-white relative">
      <CommunitiesLines />
      <h1 className="text-6xl text-[#53585F] font-bold text-center mb-[80px]">Our Communities</h1>
      <div className="grid grid-cols-3 px-[15%]">
        {
          communities.map((community) => {
            return(
              <CommunityCard image={`/NL Assets/${community}.png`} />
            )
          })
        }
      </div>
    </div>
  )
}