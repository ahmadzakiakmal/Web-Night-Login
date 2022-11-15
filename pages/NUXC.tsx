import { CommunityNavbar } from "../components/CommunityPage/CommunityNavbar";
import { Cover } from "../components/CommunityPage/Cover/Cover";
import { PageHead } from "../components/CommunityPage/PageHead";
import { EventCard } from "../components/Home/Events.tsx/EventCard";
import { EventsLines } from "../components/Home/Events.tsx/EventsLines";

export default function NUXC() {
  const about =
    "Merupakan komunitas bagi mahasiswa yang menyukai ataupun ingin menggeluti bidang User Experience dan Design.";
  return (
    <div>
      <PageHead communityName="User Experience" shortName="NUXC" />
      <main>
        {/* Navbar */}
        <CommunityNavbar page="NUXC" />
        {/* Cover */}
        <Cover
          communityName="User Experience"
          shortName="NUXC"
          about={about}
          accentColor="bg-[#D17E88]"
          headName="Tiara Kesuma Putri"
          viceName="Annisa Somaningtyas"
        />
        {/* Content */}
        <div className="min-h-screen w-full bg-[#A52A3A] bg-opacity-90 relative">
          <EventsLines />
          <div className="py-32">
            {/* Projects Showcase */}
            <div className="min-h-[500px] py-10">
              <h1
                className="text-6xl font-bold tracking-wide text-center text-[#FCFFFE]"
                data-aos="fade-right"
              >
                Projects Showcase
              </h1>
              <div
                className="grid grid-cols-3 pt-16 pb-8 place-items-center px-[5%] gap-3"
                data-aos="fade-up"
              >
                <EventCard title="Project 1" desc="" image="" />
                <EventCard title="Project 2" desc="" image="" />
                <EventCard title="Project 3" desc="" image="" />
              </div>
              <div
                className="button bg-white text-[#A52A3A] w-fit mx-auto text-[25px] px-[15px] py-[5px] rounded font-bold font-Lato"
                data-aos="fade-right"
              >
                See More
              </div>
            </div>
            {/* Events */}
            <div className="min-h-[500px] pt-16 pb-8">
              <h1 className="text-6xl font-bold tracking-wide text-center text-[#FCFFFE]" data-aos="fade-right">
                Community Events
              </h1>
              <div className="grid grid-cols-3 py-12 place-items-center px-[5%] gap-3" data-aos="fade-up">
                <EventCard title="NL Web Competition" desc="" image="" />
                <EventCard title="Internal Workshop" desc="" image="" />
                <EventCard title="Projects Competition" desc="" image="" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
