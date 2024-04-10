import React from "react";

const Navbar = () => {
  return (
    <ul className="md:flex-between flex w-full md:mt-0 -mt-10 flex-col item-start gap-5 md:flex-row">
      <li className="text-primary-500 p-medium-16 whitespace-nowrap flex flex-col items-center md:flex-row md:gap-5 gap-10">
        <a href="#" className="text-primary-500 font-semibold">
          Home
        </a>
        <a href="#about" className="text-primary-500 font-semibold">
          About
        </a>
        <a href="#project" className="text-primary-500 font-semibold">
          Projects
        </a>
        <a href="#contact" className="text-primary-500 font-semibold">
          Contact
        </a>
      </li>
    </ul>
  );
};

export default Navbar;
