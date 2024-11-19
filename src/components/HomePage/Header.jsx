/**
 * This code was generated by Builder.io
 */
import React from "react";

function Header() {
  return (
    <header className="flex flex-wrap gap-5 justify-between self-stretch px-20 py-4 w-full bg-white bg-opacity-40 shadow-[0px_4px_20px_rgba(209,234,232,0.3)] max-md:px-5 max-md:max-w-full">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8e49f884a54337781454ce8d21c6fa0c281e0e6c5e3ca6cc2562ffe4f58afdb9?placeholderIfAbsent=true&apiKey=fd087a8e03ab4599addc57757630651c"
        className="object-contain shrink-0 self-start max-w-full aspect-[3.04] w-[140px]"
        alt="Company logo"
      />
      <nav className="flex flex-wrap gap-8 justify-center items-center my-auto text-base text-slate-950 text-opacity-60 max-md:max-w-full">
        <a href="/" className="self-stretch my-auto font-bold text-teal-700">
          Home
        </a>
        <a href="/how-it-works" className="self-stretch my-auto">
          How it Works
        </a>
        <a href="#" className="self-stretch my-auto">
          Free Resources
        </a>
        <a href="/case-studies" className="self-stretch my-auto">
          Case Studies
        </a>
        <a href="#" className="self-stretch my-auto">
          About Us
        </a>
      </nav>
      <button className="gap-2.5 self-stretch py-4 px-6 text-sm font-medium text-center text-white bg-teal-700 rounded-xl min-h-[48px] max-md:px-5">
        Request A Demo
      </button>
    </header>
  );
}

export default Header;
