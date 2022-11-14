import { Cover } from "../components/CommunityPage/Cover/Cover";
import { PageHead } from "../components/CommunityPage/PageHead";
import { Navbar } from "../components/Navbar";

export default function NLNC() {
  const about = "Merupakan komunitas bagi mahasiswa yang memiliki ketertarikan pada web baik itu web development maupun web design."
  return (
    <div>
      <PageHead communityName="LINUX AND NETWORKING" shortName="NLNC" />
      <main>
        {/* Navbar */}
        <Navbar />
        {/* Cover */}
        <Cover shortName="NLNC" communityName="Linux and Networking" about={about} accentColor="bg-[#9E9D94]"/>
      </main>
    </div>
  );
}