import { Cover } from "../components/CommunityPage/Cover/Cover";
import { PageHead } from "../components/CommunityPage/PageHead";
import { EventsLines } from "../components/Home/Events.tsx/EventsLines";
import { Navbar } from "../components/Navbar";

export default function NWDC() {
  const about =
    "Merupakan komunitas bagi mahasiswa yang memiliki ketertarikan pada web baik itu web development maupun web design.";
  return (
    <div>
      <PageHead communityName="Web Development" shortName="NWDC" />
      <main>
        {/* Navbar */}
        <Navbar />
        {/* Cover */}
        <Cover shortName="NWDC" communityName="Web Development" about={about} accentColor="bg-[#8CCBED]" />
        {/* Content */}
        <div className="min-h-screen w-full bg-[#3D81A5] relative">
          <EventsLines />
          <div>
            <h1>Projects Highlights</h1>
          </div>
        </div>
      </main>
    </div>
  );
}
