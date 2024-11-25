/**
 * This code was generated by Builder.io
 */
import React from "react";
import Features from './Features'

function AboutHero() {
  const scrollToGetStarted = () => {
    const getStartedSection = document.getElementById("get-started");
    if (getStartedSection) {
      getStartedSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="mt-24 w-full max-w-[1180px] max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col items-start w-full max-md:mt-10 max-md:max-w-full">
            <h1 className="text-5xl font-semibold leading-none text-slate-950 max-md:text-4xl">
              About Us
            </h1>
            <p className="self-stretch mt-5 text-lg leading-7 text-slate-950 text-opacity-80 max-md:max-w-full">
              Rimba transforms data from any documents (bill of lading,
              electricity bill) and instruments (flow meter, chromatograph) to a
              reporting format required by compliance standards like LCFS, RFS,
              and ISCC.
              <br />
              <br />
              As bioenergy is fueled by mandates or incentives (credits),
              compliance has become exceedingly important for companies to
              operate and stack credits to optimize revenue. Because of
              reporting complexity, companies experience costly mistakes due to
              human error. This is why we build Rimba to streamline compliance
              so you could get more off-takes, get projects funded, and reduce
              effort to generate credits.
            </p>
            <button 
              onClick={scrollToGetStarted}
              className="gap-2.5 self-stretch px-8 py-5 mt-10 text-base font-medium text-center text-white bg-teal-700 rounded-xl min-h-[54px] max-md:px-5"
            >
              Request a Demo
            </button>
          </div>
        </div>
        <Features />
      </div>
    </section>
  );
}

export default AboutHero;
