import { Cover } from "../components/CommunityPage/Cover/Cover";
import { PageHead } from "../components/CommunityPage/PageHead";
import { Navbar } from "../components/Navbar";

export default function NCPC() {
  const about = "Merupakan komunitas bagi mahasiswa yang memiliki ketertarikan pada web baik itu web development maupun web design."
  return (
    <div>
      <PageHead communityName="Competitive Programming" shortName="NCPC" />
      <main>
        {/* Navbar */}
        <Navbar />
        {/* Cover */}
        <Cover communityName="Competitive Programming" shortName="NCPC" about={about}/>
      </main>
    </div>
  );
}