import { CommunityNavbar } from "../components/CommunityPage/CommunityNavbar";
import { Cover } from "../components/CommunityPage/Cover/Cover";
import { PageHead } from "../components/CommunityPage/PageHead";
import { EventCard } from "../components/Home/Events.tsx/EventCard";
import { EventsLines } from "../components/Home/Events.tsx/EventsLines";

export default function NWDC() {
  const about =
    "Merupakan komunitas bagi mahasiswa yang memiliki ketertarikan pada web baik itu web development maupun web design.";
  return (
    <div>
      <PageHead communityName="Web Development" shortName="NWDC" />
      <main>
        {/* Navbar */}
        <CommunityNavbar page="NWDC" />
        {/* Cover */}
        <Cover
          shortName="NWDC"
          communityName="Web Development"
          about={about}
          accentColor="bg-[#8CCBED]"
          headName="Aldo Arya Saka Mukti"
          viceName="Alphonsus Jovian Joy Reynaldo"
        />
        {/* Content */}
        <div className="min-h-screen w-full bg-[#3D81A5] relative">
          <EventsLines />
          <div className="py-10 md:py-32">
            {/* Projects Showcase */}
            <div className="min-h-[500px] py-10">
              <h1
                className="text-5xl md:text-6xl font-bold tracking-wide text-center text-[#FCFFFE]"
                data-aos="fade-right"
              >
                Projects Showcase
              </h1>
              <div
                className="grid grid-cols-1 md:grid-cols-3 pt-16 pb-8 place-items-center px-[10%] md:px-[5%] gap-10 md:gap-3"
                data-aos="fade-up"
              >
                <EventCard title="Project 1" desc="" image="" />
                <EventCard title="Project 2" desc="" image="" />
                <EventCard title="Project 3" desc="" image="" />
              </div>
              <div
                className="button bg-white text-[#C5BA8E] w-fit mx-auto text-[25px] px-[15px] py-[5px] rounded font-bold font-Lato"
                data-aos="fade-right"
              >
                See More
              </div>
            </div>
            {/* Events */}
            <div className="min-h-[500px] pt-16 pb-8">
              <h1
                className="text-5xl md:text-6xl font-bold tracking-wide text-center text-[#FCFFFE]"
                data-aos="fade-right"
              >
                Community Events
              </h1>
              <div
                className="grid grid-cols-1 md:grid-cols-3 py-16 place-items-center px-[10%] md:px-[5%] gap-10 md:gap-3"
                data-aos="fade-up"
              >
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
