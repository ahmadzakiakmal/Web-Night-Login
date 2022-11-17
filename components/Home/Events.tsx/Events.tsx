import { EventCard } from "./EventCard";
import { EventsLines } from "./EventsLines";

export const Events = () => {
  return (
    <div
      id="Events"
      className="p-[3%] lg:min-h-screen py-16 h-fit overflow-hidden bg-dark-red relative overflow-y-hidden flex flex-col justify-center"
    >
      <EventsLines />
      <h1
        className="text-5xl md:text-6xl text-white font-bold text-center mb-[40px] md:mb-[80px]"
        data-aos="fade-right"
      >
        Our Events
      </h1>
      <div
        className="min-h-fit grid grid-flow-row lg:grid-cols-3 place-items-center z-10 px-[10%] md:px-[20%] lg:px-[5%] gap-10 md:gap-24 lg:gap-3"
        data-aos="fade-up"
        // data-aos-delay="500"
      >
        <EventCard
          title="Find IT!"
          image="FindIT.png"
          desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dignissimos nulla accusantium omnis, similique illo facilis deserunt unde doloribus? Dolores."
        />
        <EventCard
          title="AHT"
          image="AHT.png"
          desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dignissimos nulla accusantium omnis, similique illo facilis deserunt unde doloribus? Dolores."
        />
        <EventCard
          title="Internal Workshop"
          image="InternalWorkshop.png"
          desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dignissimos nulla accusantium omnis, similique illo facilis deserunt unde doloribus? Dolores."
        />
      </div>
      <div className="mt-[20px]">
        <div
          data-aos="fade-right"
          className="button bg-white text-dark-red w-fit mx-auto text-[25px] px-[15px] py-[5px] rounded font-bold font-Lato"
        >
          See More
        </div>
      </div>
    </div>
  );
};
