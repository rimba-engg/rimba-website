import React from "react";
import {BsTelephoneForward} from 'react-icons/bs'
function Footer() {
  return (
    <footer className="flex flex-col items-center self-stretch w-full text-white bg-slate-950 max-md:max-w-full">
      <div className="self-stretch mt-24 w-full border-2 border-solid border-white border-opacity-10 min-h-[2px] max-md:mt-10 max-md:max-w-full" />
      <div className="flex flex-wrap gap-5 justify-between mt-8 w-full max-w-screen-xl text-base max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a400f1c6ed8161fb2ce1c3e00b3092393caae390371ce93c72bd69aa8612717c?placeholderIfAbsent=true&apiKey=fd087a8e03ab4599addc57757630651c"
          className="object-contain shrink-0 max-w-full aspect-[3.05] w-[122px]"
          alt="Rimba logo"
        />
        <nav className="flex flex-wrap gap-8 items-center my-auto max-md:max-w-full">
          <a href="#" className="self-stretch my-auto">
            Product
          </a>
          <a href="#" className="self-stretch my-auto">
            Solutions
          </a>
          <a href="#" className="self-stretch my-auto">
            Demo
          </a>
          <a href="#" className="self-stretch my-auto">
            FAQ
          </a>
          <a href="#" className="self-stretch my-auto">
            About Us
          </a>
          <a href="#" className="self-stretch my-auto">
            Terms of Service
          </a>
          <a href="#" className="self-stretch my-auto">
            Privacy Policy
          </a>
        </nav>
      </div>
      <div className="shrink-0 mt-6 max-w-full h-0.5 border-2 border-solid border-white border-opacity-10 w-[1280px]" />
      <div className="flex flex-wrap gap-5 justify-between mt-6 w-full max-w-screen-xl text-sm leading-none max-md:max-w-full">
        <div className="my-auto">2024 Rimba AI, Inc All Rights Reserved</div>
        <div className="flex">
          <BsTelephoneForward></BsTelephoneForward>
          <span className="ml-4">
            510-543-1864
            </span>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c503d4866f90b8b21c3e8356ff0101442e9a9bc10015053fd7a180c660435105?placeholderIfAbsent=true&apiKey=fd087a8e03ab4599addc57757630651c"
          className="object-contain shrink-0 max-w-full rounded-none aspect-[3.82] w-[130px]"
          alt="Social media icons"
        />
      </div>
    </footer>
  );
}

export default Footer;
