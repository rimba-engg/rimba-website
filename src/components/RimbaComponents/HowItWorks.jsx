/**
 * This code was generated by Builder.io
 */
import React from "react";

const HowItWorks = () => {
  const scrollToGetStarted = () => {
    const getStartedSection = document.getElementById("get-started");
    if (getStartedSection) {
      getStartedSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="mt-40 w-full max-w-[1180px] max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[46%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col items-start self-stretch my-auto w-full max-md:mt-10 max-md:max-w-full">
            <h2 className="text-5xl font-semibold leading-none text-sky-950 max-md:text-4xl">
              How RIMBA Works
            </h2>
            <p className="self-stretch mt-5 text-lg leading-6 text-slate-950 text-opacity-80 max-md:max-w-full">
              Simplifying AI for Everyone. Follow these simple steps to leverage
              the power of AI with RIMBA.
            </p>
            <button
              onClick={scrollToGetStarted}
              className="gap-2.5 self-stretch px-8 py-5 mt-10 text-base font-medium text-center text-white bg-teal-700 rounded-xl min-h-[54px] max-md:px-5"
            >
              Request a Demo
            </button>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[54%] max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1fac84f96f10f709bda40239ae1190861cf91f807bb9be560682f8300f9e61e5?placeholderIfAbsent=true&apiKey=fd087a8e03ab4599addc57757630651c"
            alt="RIMBA workflow illustration"
            className="object-contain grow w-full aspect-[1.82] max-md:mt-10 max-md:max-w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
