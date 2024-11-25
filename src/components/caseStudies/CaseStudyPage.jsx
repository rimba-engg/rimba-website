/**
 * This code was generated by Builder.io
 */
import React from "react";
import { CaseStudyHeader } from "./CaseStudyHeader";
import { CaseStudyCard } from "./CaseStudyCard";
// import { Footer } from "./Footer";

const caseStudies = [
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/a88861822e83dccdb999843aa990405094498b9a1df7019c4fc78c9f8e494e84?placeholderIfAbsent=true&apiKey=fd087a8e03ab4599addc57757630651c",
    title: "Streamlining Compliance for an RNG Project",
    description:
      "Renewable Natural Gas (RNG) is a key player in reducing carbon emissions, offering a low-carbon fuel alternative...",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/f247da39c22b870ad8fd224f5d2e6d9712f321e843cbb4c5dae56013c3789eb7?placeholderIfAbsent=true&apiKey=fd087a8e03ab4599addc57757630651c",
    title: "Streamlining Feedstock Traceability for Biofuel Traders",
    description:
      "Feedstock traders play a crucial role in the biofuels industry by ensuring a steady supply of raw materials to biofu...",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/54529823d15e79091fb89da40f1a3854c00aac90ca04a267c46c6bf6e1576c53?placeholderIfAbsent=true&apiKey=fd087a8e03ab4599addc57757630651c",
    title: "Transforming UCO Traceability with Rimba",
    description:
      "Used Cooking Oil (UCO) has become an invaluable resource for biofuel production due to its numerous advan...",
  },
];

export const CaseStudyPage = () => {
  return (
    <div className="flex overflow-hidden flex-col bg-white">
      <CaseStudyHeader />
      <main className="flex flex-col items-start self-center mt-10 w-full max-w-[1180px] max-md:max-w-full">
        <nav className="flex gap-2.5 text-sm leading-none text-slate-950">
          <a href="#">Home</a>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/48fb4e81b9b003e5797c7a90dda0d46d0451a1b2318468fa6001c5250a48c796?placeholderIfAbsent=true&apiKey=fd087a8e03ab4599addc57757630651c"
            alt=""
            className="object-contain shrink-0 my-auto aspect-[0.56] w-[5px]"
          />
          <a href="#">Case Studies</a>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/48fb4e81b9b003e5797c7a90dda0d46d0451a1b2318468fa6001c5250a48c796?placeholderIfAbsent=true&apiKey=fd087a8e03ab4599addc57757630651c"
            alt=""
            className="object-contain shrink-0 my-auto aspect-[0.56] w-[5px]"
          />
          <span className="font-medium text-teal-700 basis-auto">
            Streamlining Compliance for an RNG Project
          </span>
        </nav>

        {/* Rest of the case study content */}
        <h1 className="mt-20 text-5xl font-semibold leading-[60px] text-slate-950 w-[727px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[56px]">
          Streamlining Compliance for an RNG Project
        </h1>

        <section className="self-stretch mt-12 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[70%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-2xl font-semibold whitespace-nowrap text-slate-950 max-md:mt-8 max-md:max-w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/4bad85237ad8a66b35311b537b97c2322dc5a176b926e95788cb76d029a57fad?placeholderIfAbsent=true&apiKey=fd087a8e03ab4599addc57757630651c"
                  alt="RNG Project Overview"
                  className="object-contain w-full rounded-3xl aspect-[1.82] max-md:max-w-full"
                />
                <h2 className="self-start mt-10">Background</h2>
              </div>
            </div>
            <aside className="flex flex-col ml-5 w-[30%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col max-md:mt-8">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/64203da4aa85e0b8cb922240d8b7f81a453dade3acc1a7c4ecc83a36f1e09459?placeholderIfAbsent=true&apiKey=fd087a8e03ab4599addc57757630651c"
                  alt="Additional Project Details"
                  className="object-contain w-full rounded-3xl aspect-[1.71]"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e8753813d9bc56f6a0539f5beca6486bc1f5e060c9d026bbb10cf13f08b0388c?placeholderIfAbsent=true&apiKey=fd087a8e03ab4599addc57757630651c"
                  alt="Project Implementation"
                  className="object-contain mt-8 w-full rounded-3xl aspect-[1.71]"
                />
              </div>
            </aside>
          </div>
        </section>

        {/* Case study content sections */}
        <section className="self-center mt-24 text-3xl font-semibold text-center text-slate-950 max-md:mt-10">
          <h2>Other Case Studies</h2>
          <p className="self-center mt-5 text-lg leading-none text-center text-slate-950 text-opacity-80">
            How we could help you
          </p>
          <div className="self-stretch mt-16 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              {caseStudies.map((study, index) => (
                <div
                  key={index}
                  className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full"
                >
                  <CaseStudyCard {...study} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      {/* <Footer /> */}
    </div>
  );
};
