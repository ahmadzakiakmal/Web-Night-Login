import Head from "next/head";
import Image from "next/image";
import { AboutUs } from "../components/Home/AboutUs/AboutUs";
import { Communities } from "../components/Home/Communities/Communities";
import { Events } from "../components/Home/Events.tsx/Events";
import { Footer } from "../components/Home/Footer/Footer";
import { Hero } from "../components/Home/Hero/Hero";
import { OurTeam } from "../components/Home/OurTeam/OurTeam";
import { Navbar } from "../components/Navbar";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Night Login</title>
        <meta name="description" content="Night Login DTETI UGM Website" />
        <link rel="icon" href="/NL Assets/Night Login/square.png" />
      </Head>

      <main className="overflow-x-hidden">
        <Navbar />
        <Hero />
        <AboutUs />
        <Events />
        <Communities />
        {/* <OurTeam /> */}
      </main>

      <footer className="">
        <Footer />
      </footer>
    </div>
  );
}
