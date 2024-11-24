/**
 * This code was generated by Builder.io
 */
import React from "react";

function Hero() {
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
          <div className="flex flex-col w-full max-md:mt-10 max-md:max-w-full">
            <h1 className="text-5xl font-semibold text-slate-950 max-md:max-w-full max-md:text-4xl">
              Simplifying Compliance Reporting for Bioenergy Projects
            </h1>
            <p className="mt-9 mr-11 text-lg leading-6 text-slate-950 text-opacity-80 max-md:mr-2.5 max-md:max-w-full">
              Automate data processing, carbon intensity calculation, and
              streamline verification preparation
            </p>
            <button
              onClick={scrollToGetStarted}
              className="gap-2.5 self-start px-8 py-5 mt-10 text-base font-medium text-center text-white bg-teal-700 rounded-xl min-h-[54px] max-md:px-5 max-md:mt-10"
            >
              Request A Demo
            </button>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9f629309ecda7cc458a91d4f6227f3c2e0c15a4844c6a9b294a8e3305b5e1d21?placeholderIfAbsent=true&apiKey=fd087a8e03ab4599addc57757630651c"
            className="object-contain self-stretch my-auto w-full aspect-[1.82] max-md:mt-10 max-md:max-w-full"
            alt="Bioenergy project illustration"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
