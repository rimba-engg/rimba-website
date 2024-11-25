/**
 * This code was generated by Builder.io
 */
import React from "react";

const features = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/de325b9a-ae44-4657-9ff8-c2cb3286565d?placeholderIfAbsent=true&apiKey=fd087a8e03ab4599addc57757630651c",
    title: "Track",
    description: "Automate supply chain traceability from feedstock to fuels.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/49ee668d-5b53-4e24-a963-d91c23af5408?placeholderIfAbsent=true&apiKey=fd087a8e03ab4599addc57757630651c",
    title: "Measure",
    description: "Simplify process to test and measure carbon intensity.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b58a88f1-a087-4723-87a2-211a88a2107b?placeholderIfAbsent=true&apiKey=fd087a8e03ab4599addc57757630651c",
    title: "Report",
    description:
      "Automate data processing and detect anomalies, gaps in your data.",
  },
];

function FeatureItem({ icon, title, description }) {
  return (
    <div className="flex gap-6 mt-12 max-md:mt-10">
      <img
        loading="lazy"
        src={icon}
        className="object-contain shrink-0 self-start rounded-xl aspect-square bg-white bg-opacity-40 h-[62px] shadow-[0px_0px_20px_rgba(209,234,232,0.5)] w-[62px]"
        alt={`${title} icon`}
      />
      <div className="flex flex-col grow shrink-0 basis-0 w-fit">
        <h3 className="self-start text-xl font-semibold text-slate-950">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-loose text-slate-950 text-opacity-80">
          {description}
        </p>
      </div>
    </div>
  );
}

function AboutUs() {
  return (
    <section className="flex flex-col justify-center items-center self-stretch px-16 py-24 mt-24 w-full  shadow-[0px_4px_20px_rgba(209,234,232,0.3)] max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="w-full max-w-[1180px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col w-full text-base leading-7 text-slate-950 text-opacity-80 max-md:mt-10 max-md:max-w-full">
              <h2 className="self-start text-4xl font-semibold leading-none text-slate-950">
                About Us
              </h2>
              <p className="mt-5 max-md:max-w-full">
                Rimba simplifies sustainability compliance by transforming data
                from any source—documents like bills of lading or electricity
                bills, and instruments like flow meters or chromatographs—into
                the reporting formats required by standards such as LCFS, RFS,
                and ISCC.
              </p>
              <p className="mt-4 max-md:max-w-full">
                In an industry driven by mandates and incentives, compliance is
                crucial for stacking credits and maximizing revenue. However,
                the complexity of reporting often results in costly mistakes or
                the significant expense of hiring internal or external experts.
                That's why we built Rimba: to streamline compliance, help you
                secure more off-takes, get projects funded, and effortlessly
                generate credits.
              </p>
              <button className="gap-2.5 self-start px-8 py-4 mt-8 text-sm font-medium text-center text-white bg-teal-700 rounded-xl min-h-[48px] max-md:px-5">
                Learn More
              </button>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-start self-stretch my-auto w-full max-md:mt-10 max-md:max-w-full">
              {features.map((feature, index) => (
                <FeatureItem key={index} {...feature} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
