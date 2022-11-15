import { Cover } from "../components/CommunityPage/Cover/Cover";
import { PageHead } from "../components/CommunityPage/PageHead";
import { Navbar } from "../components/Navbar";
import { EventCard } from "../components/Home/Events.tsx/EventCard";
import { EventsLines } from "../components/Home/Events.tsx/EventsLines";
import { CommunityNavbar } from "../components/CommunityPage/CommunityNavbar";

export default function NADC() {
  const about =
    "Merupakan komunitas bagi mahasiswa yang memiliki ketertarikan pada Application Development, baik itu Android, iOS, maupun cross-platform.";
  return (
    <div>
      <PageHead communityName="Application Development" shortName="NADC" />
      <main>
        {/* Navbar */}
        <CommunityNavbar page="NADC" />
        {/* Cover */}
        <Cover
          communityName="Application Development"
          shortName="NADC"
          about={about}
          accentColor="bg-[#EBE7D6]"
          headName="Firdaus Bisma Suryakusuma"
          viceName="Muhammad Hasan Chamdany"
        />
        {/* Content */}
        <div className="min-h-screen w-full bg-[#b0afa5] relative">
          <EventsLines />
          <div className="py-32">
            {/* Projects Showcase */}
            <div className="min-h-[500px] py-10">
              <h1 className="text-6xl font-bold tracking-wide text-center text-[#FCFFFE]">
                Projects Showcase
              </h1>
              <div className="grid grid-cols-3 pt-16 pb-8 place-items-center px-[5%] gap-3">
                <EventCard title="Project 1" desc="" image="" />
                <EventCard title="Project 2" desc="" image="" />
                <EventCard title="Project 3" desc="" image="" />
              </div>
              <div className="button bg-white text-[#9a988e] w-fit mx-auto text-[25px] px-[15px] py-[5px] rounded font-bold font-Lato">
                See More
              </div>
            </div>
            {/* Events */}
            <div className="min-h-[500px] pt-16 pb-8">
              <h1 className="text-6xl font-bold tracking-wide text-center text-[#FCFFFE]">
                Community Events
              </h1>
              <div className="grid grid-cols-3 py-12 place-items-center px-[5%] gap-3">
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
