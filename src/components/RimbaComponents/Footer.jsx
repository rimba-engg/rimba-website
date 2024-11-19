/**
 * This code was generated by Builder.io
 */
import React from "react";

const Footer = () => {
  const links = [
    "Product",
    "Solutions",
    "Demo",
    "FAQ",
    "About Us",
    "Terms of Service",
    "Privacy Policy",
  ];

  return (
    <footer className="self-stretch mt-24 w-full text-white max-md:mt-10 max-md:max-w-full">
      <div className="border-t-2 border-solid border-white border-opacity-10 max-md:max-w-full" />
      <div className="flex flex-wrap gap-5 justify-between mt-8 w-full max-w-screen-xl text-base max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9dff932d386e264bf5302cbf1b381fa46b13384da21009f60bd8abf52f1d83dc?placeholderIfAbsent=true&apiKey=fd087a8e03ab4599addc57757630651c"
          alt="Rimba logo"
          className="object-contain shrink-0 max-w-full aspect-[3.05] w-[122px]"
        />
        <nav className="flex flex-wrap gap-8 items-center my-auto max-md:max-w-full">
          {links.map((link, index) => (
            <a key={index} href="#" className="self-stretch my-auto">
              {link}
            </a>
          ))}
        </nav>
      </div>
      <div className="border-t-2 border-solid border-white border-opacity-10 mt-6 max-w-full w-[1280px]" />
      <div className="flex flex-wrap gap-5 justify-between mt-6 w-full max-w-screen-xl text-sm leading-none max-md:max-w-full">
        <div className="my-auto">2024 Rimba AI, Inc All Rights Reserved</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c503d4866f90b8b21c3e8356ff0101442e9a9bc10015053fd7a180c660435105?placeholderIfAbsent=true&apiKey=fd087a8e03ab4599addc57757630651c"
          alt="Social media icons"
          className="object-contain shrink-0 max-w-full rounded-none aspect-[3.82] w-[130px]"
        />
      </div>
    </footer>
  );
};

export default Footer;