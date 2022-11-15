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
        <Card name="Samatha Marhaendra P" position="President"/>
        <Card name="Christian Ale Perdana" position="Vice" />
      </div>
      <div className="flex justify-center gap-5">
        <Card name="Sagara Aldavy" position="Head of Public Relation" />
        <Card name="Arifah Amelia T" position="Head of Creative Media" />
        <Card name="Gerrit Ezra Yudi K" position="Head of Administration" />
      </div>
    </div>
  );
};
