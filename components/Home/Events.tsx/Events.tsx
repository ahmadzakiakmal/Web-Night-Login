import { EventCard } from "./EventCard";
import { EventsLines } from "./EventsLines";

export const Events = () => {
  return (
    <div id="Events" className="h-screen bg-dark-red relative overflow-y-hidden flex flex-col justify-center">
      <EventsLines />
      <h1 className="text-6xl text-white font-bold text-center mb-[80px]" data-aos="fade-right">
        Our Events
      </h1>
      <div className="grid grid-cols-3 place-items-center z-10 px-32 gap-3" data-aos="fade-up" data-aos-delay="500" >
        <EventCard title="Find IT!" image="FindIT.png" desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dignissimos nulla accusantium omnis, similique illo facilis deserunt unde doloribus? Dolores." />
        <EventCard title="AHT" image="AHT.png" desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dignissimos nulla accusantium omnis, similique illo facilis deserunt unde doloribus? Dolores." />
        <EventCard title="Internal Workshop" image="InternalWorkshop.png" desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dignissimos nulla accusantium omnis, similique illo facilis deserunt unde doloribus? Dolores." />
      </div>
      <div className="mt-[20px]">
        <div data-aos="fade-right" className="button bg-white text-dark-red w-fit mx-auto text-[25px] px-[15px] py-[5px] rounded font-bold font-Lato">See More</div>
      </div>
    </div>
  );
};
