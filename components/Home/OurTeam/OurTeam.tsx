import { AboutUsLines } from "../AboutUs/AboutUsLines";
import { Card } from "./Card";

export const OurTeam = () => {
  return (
    <div className="bg-dark-red h-[110vh] relative flex flex-col justify-center">
      <AboutUsLines />
      <h1 className="text-6xl text-white font-bold text-center z-10 mb-10">
        Our Team
      </h1>
      <div className="flex justify-center gap-10 mb-10">
        <Card name="Lorem Ipsum" position="President"/>
        <Card name="Lorem Ipsum" position="Vice" />
      </div>
      <div className="flex justify-center gap-5">
        <Card name="Lorem Ipsum" position="Head of Public Relation" />
        <Card name="Lorem Ipsum" position="Head of Creative Media" />
        <Card name="Lorem Ipsum" position="Head of Administration" />
      </div>
    </div>
  );
};
