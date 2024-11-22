/**
 * This code was generated by Builder.io
 */
import React from "react";

function GetStarted() {
  return (
    <section className="flex flex-col items-center self-stretch pt-24 pb-8 mt-24 w-full text-white bg-slate-950 max-md:mt-10 max-md:max-w-full">
      <div className="flex  gap-5 justify-between w-full max-w-[1180px] max-md:max-w-full">
        <h2 className="my-auto text-5xl font-semibold leading-[72px] max-md:text-4xl max-md:leading-[64px]">
          Get Compliant, Streamline your process today
        </h2>
        <form className="w-2/3 flex flex-col p-11 font-medium rounded-3xl bg-white bg-opacity-10 max-md:px-5 max-md:max-w-full">
          <h3 className="self-start text-3xl font-semibold">Get Started</h3>
          <label htmlFor="email" className="self-start mt-10 text-lg">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="px-5 py-5 mt-5 text-sm bg-white rounded-xl text-neutral-400 max-md:max-w-full"
            placeholder="Enter your email"
          />
          <button
            type="submit"
            className="gap-2.5 self-stretch px-8 py-5 mt-8 text-base text-center text-white bg-teal-700 rounded-xl min-h-[54px] max-md:px-5"
          >
            Request A Demo
          </button>
        </form>
      </div>
    </section>
  );
}

export default GetStarted;