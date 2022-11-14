import { Cover } from "../components/CommunityPage/Cover/Cover";
import { PageHead } from "../components/CommunityPage/PageHead";
import { Navbar } from "../components/Navbar";

export default function NDDC() {
  const about = "Merupakan komunitas bagi mahasiswa yang memiliki ketertarikan pada web baik itu web development maupun web design."
  return (
    <div>
      <PageHead communityName="Data Science and Data Analytics" shortName="NDDC" />
      <main>
        {/* Navbar */}
        <Navbar />
        {/* Cover */}
        <Cover communityName="Data Science and Data Analytics" shortName="NDDC" about={about} accentColor="bg-[#858485]" />
      </main>
    </div>
  );
}