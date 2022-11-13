import { Cover } from "../components/CommunityPage/Cover/Cover";
import { PageHead } from "../components/CommunityPage/PageHead";
import { Navbar } from "../components/Navbar";

export default function NWDC() {
  const about = "Merupakan komunitas bagi mahasiswa yang memiliki ketertarikan pada web baik itu web development maupun web design."
  return (
    <div>
      <PageHead communityName="Web Development" shortName="NWDC" />
      <main>
        {/* Navbar */}
        <Navbar />
        {/* Cover */}
        <Cover shortName="NWDC" communityName="Web Development" about={about}/>
      </main>
    </div>
  );
}
