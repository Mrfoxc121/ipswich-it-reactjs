import React from "react";
import Contact from "../pages/Contact";
import Hero from "./Hero";
import OurClients from "./OurClients";
import Services from "./ServicesHome";
import Visions from "./Visions";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Visions />
      <OurClients />
      <Contact />
    </>
  );
}
