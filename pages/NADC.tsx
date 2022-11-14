import { Cover } from "../components/CommunityPage/Cover/Cover";
import { PageHead } from "../components/CommunityPage/PageHead";
import { Navbar } from "../components/Navbar";

export default function NADC() {
  const about = "Merupakan komunitas bagi mahasiswa yang memiliki ketertarikan pada web baik itu web development maupun web design."
  return (
    <div>
      <PageHead communityName="Application Development" shortName="NADC" />
      <main>
        {/* Navbar */}
        <Navbar />
        {/* Cover */}
        <Cover communityName="Application Development" shortName="NADC" about={about} accentColor="bg-[#EBE7D6]"/>
      </main>
    </div>
  );
}