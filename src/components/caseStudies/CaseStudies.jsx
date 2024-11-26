import React from "react";
import { CaseStudyCard } from "./CaseStudyCard";
import FAQ from "../common/FAQ";

const caseStudies = [
  {
    id:1,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/a88861822e83dccdb999843aa990405094498b9a1df7019c4fc78c9f8e494e84?placeholderIfAbsent=true&apiKey=fd087a8e03ab4599addc57757630651c",
    title: "Streamlining Compliance for an RNG Project",
    description:
      "Renewable Natural Gas (RNG) is a key player in reducing carbon emissions, offering a low-carbon fuel alternative...",
  },
  {
    id:2,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/f247da39c22b870ad8fd224f5d2e6d9712f321e843cbb4c5dae56013c3789eb7?placeholderIfAbsent=true&apiKey=fd087a8e03ab4599addc57757630651c",
    title: "Streamlining Feedstock Traceability for Biofuel Traders",
    description:
      "Feedstock traders play a crucial role in the biofuels industry by ensuring a steady supply of raw materials to biofu...",
  },
  {
    id:3,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/54529823d15e79091fb89da40f1a3854c00aac90ca04a267c46c6bf6e1576c53?placeholderIfAbsent=true&apiKey=fd087a8e03ab4599addc57757630651c",
    title: "Transforming UCO Traceability with Rimba",
    description:
      "Used Cooking Oil (UCO) has become an invaluable resource for biofuel production due to its numerous advan...",
  },
];

function CaseStudies() {
  const scrollToGetStarted = () => {
    const getStartedSection = document.getElementById("get-started");
    if (getStartedSection) {
      getStartedSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex overflow-hidden flex-col bg-white">
      <main className="flex flex-col items-start self-center mt-10 ml-4 w-full max-w-[1210px] max-md:max-w-full">
        <nav
          aria-label="Breadcrumb"
          className="flex gap-2.5 text-sm leading-none"
        >
          <a href="/" className="grow text-slate-950">
            Home
          </a>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/48fb4e81b9b003e5797c7a90dda0d46d0451a1b2318468fa6001c5250a48c796?placeholderIfAbsent=true&apiKey=fd087a8e03ab4599addc57757630651c"
            alt=""
            className="object-contain shrink-0 my-auto aspect-[0.56] w-[5px]"
          />
          <span className="font-medium text-teal-700">Case Studies</span>
        </nav>

        <section className="flex gap-5 justify-between mt-28 w-full max-w-[1180px] max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col items-start my-auto">
            <h1 className="self-stretch text-5xl font-semibold leading-none text-sky-950 max-md:text-4xl">
              Case Studies
            </h1>
            <p className="mt-5 text-lg leading-none text-slate-950 text-opacity-80">
              How we could help you
            </p>
            <button
              onClick={scrollToGetStarted}
              className="gap-2.5 self-stretch px-8 py-5 mt-10 text-base font-medium text-center text-white bg-teal-700 rounded-xl min-h-[54px] max-md:px-5"
            >
              Request a Demo
            </button>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/966e147ecc70cfdf7d83541750bda9c3e2af76c75e6b07f19d31d64e44f89fa4?placeholderIfAbsent=true&apiKey=fd087a8e03ab4599addc57757630651c"
            alt="Case Studies Hero Image"
            className="object-contain aspect-[1.82] max-md:max-w-full w-1/2"
          />
        </section>

        <section className="w-full">
          <h2 className="self-center mt-44 text-3xl font-semibold text-center text-slate-950 max-md:mt-10">
            Other Case Studies
          </h2>
          <p className="self-center mt-5 text-lg leading-none text-center text-slate-950 text-opacity-80">
            How we could help you
          </p>

          <div className="self-end mt-16 w-full max-w-[1180px] max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              {caseStudies.map((study, index) => (
                <CaseStudyCard key={index} {...study} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default CaseStudies;
