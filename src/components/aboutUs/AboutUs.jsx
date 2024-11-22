import React from "react";
import AboutHero from "./AboutHero";
import Stats from "./Stats";
import GetStarted from "../common/GetStarted";
import Footer from "../common/Footer";
import ContactUs from "../common/ContactUs";
import FAQ from "../common/FAQ";
import Header from "../common/Header";
function AboutUs() {
  return (
    <main className="flex overflow-hidden flex-col items-center bg-white">
      <Header></Header>
      <AboutHero />
      <Stats />
      <FAQ></FAQ>
      <ContactUs></ContactUs>
      <GetStarted></GetStarted>
      <Footer></Footer>
    </main>
  );
}

export default AboutUs;
