/**
 * This code was generated by Builder.io
 */
import React from "react";

const ContactSection = () => {
  return (
    <section className="flex flex-wrap gap-5 justify-between p-12 mt-20 w-full bg-white rounded-3xl max-w-[1180px] shadow-[0px_4px_20px_rgba(209,234,232,0.3)] max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col max-md:max-w-full">
        <h2 className="self-start text-2xl font-bold leading-none text-slate-950">
          Still have questions?
        </h2>
        <p className="mt-4 text-lg leading-none text-slate-950 text-opacity-80 max-md:max-w-full">
          Reach out to us at{" "}
          <span className="font-medium text-teal-700">start@rimba.ai</span>.
          We're here to help!
        </p>
      </div>
      <button className="gap-2.5 self-stretch px-8 py-5 my-auto text-base font-medium text-center text-white bg-teal-700 rounded-xl min-h-[54px] max-md:px-5">
        Get In Touch
      </button>
    </section>
  );
};

export default ContactSection;
