/**
 * This code was generated by Builder.io
 */
import React from "react";

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

function CaseStudyCard({ image, title, description }) {
  return (
    <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow pb-8 w-full text-base rounded-3xl bg-white bg-opacity-40 shadow-[0px_0px_20px_rgba(209,234,232,0.5)] max-md:mt-10">
        <img
          loading="lazy"
          src={image}
          className="object-contain w-full aspect-[1.41] rounded-[30px_30px_0px_0px]"
          alt={title}
        />
        <div className="flex flex-col items-start px-8 mt-8 w-full max-md:px-5">
          <h3 className="text-xl font-semibold leading-8 text-stone-900">
            {title}
          </h3>
          <p className="self-stretch mt-3.5 leading-6 text-black text-opacity-60">
            {description}
          </p>
          <div className="flex gap-2.5 mt-5 font-medium text-teal-700">
            <div className="grow">View Details</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e7e752addf5fb093d4463d69d5bacc21e3958ff5cb378ba3dbcf141c4c078695?placeholderIfAbsent=true&apiKey=fd087a8e03ab4599addc57757630651c"
              className="object-contain shrink-0 my-auto aspect-[1.21] w-[17px]"
              alt="View details arrow"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function CaseStudies() {
  return (
    <section className="mt-24 max-w-[1180px] max-md:mt-10 max-md:max-w-full">
      <h2 className="text-3xl font-semibold text-center text-slate-950">
        Case Studies
      </h2>
      <p className="mt-5 text-lg leading-none text-center text-slate-950 text-opacity-80">
        How we could help you
      </p>
      <div className="mt-16 w-full max-w-[1180px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={index} {...study} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CaseStudies;
