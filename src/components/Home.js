import React from "react";
import Contact from "../pages/Contact";
import Hero from "./Hero";
import Fade from "react-reveal";
import OurClients from "./OurClients";
import Services from "./ServicesHome";
import Visions from "./Visions";

export default function Home() {
  return (
    <div>
      <Hero />
      <Fade>
        <Services />
      </Fade>
      <Fade>
        <Visions />
      </Fade>
      <Fade>
        <OurClients />
      </Fade>
      <Fade>
        <Contact />
      </Fade>
    </div>
  );
}
