import { Cover } from "../components/CommunityPage/Cover/Cover";
import { PageHead } from "../components/CommunityPage/PageHead";
import { Navbar } from "../components/Navbar";

export default function NUXC() {
  const about = "Merupakan komunitas bagi mahasiswa yang memiliki ketertarikan pada web baik itu web development maupun web design."
  return (
    <div>
      <PageHead communityName="User Experience" shortName="NUXC" />
      <main>
        {/* Navbar */}
        <Navbar />
        {/* Cover */}
        <Cover communityName="User Experience" shortName="NUXC" about={about}/>
      </main>
    </div>
  );
}