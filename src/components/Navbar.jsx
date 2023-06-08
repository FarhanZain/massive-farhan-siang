import IMAGES from "../assets/Images";
import { useState } from "react";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  function toggleMenu() {
    setShowMenu(!showMenu);
  }
  return (
    <>
      <nav className="bg-primary border-gray-200">
        <div className=" flex flex-wrap items-center justify-between px-[30px] md:px-[64px] lg:px-[100px] xl:px-[115px] py-6">
          <a href="#" className="flex items-center">
            <img
              className=" w-3/4 md:w-full"
              src={IMAGES.logo}
              alt="Bubble Bash Logo"
            />
          </a>
          <button
            onClick={() => toggleMenu()}
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-white hover:text-primary rounded-lg lg:hidden hover:bg-gray-100"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            className={` w-full lg:block lg:w-auto ${
              !showMenu ? "hidden" : ""
            }`}
          >
            <ul className="font-medium flex flex-col gap-3 lg:gap-0 p-4 lg:p-0 mt-4 rounded-lg bg-gray-50 lg:flex-row lg:space-x-8 lg:mt-0  lg:bg-transparent">
              <li>
                <a
                  href="#home"
                  className="block py-2 pl-3 pr-4 text-sm md:text-xl font-opensans font-normal text-primary border border-primary hover:bg-primary hover:text-white rounded md:bg-transparent lg:text-white lg:p-0"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="block py-2 pl-3 pr-4 text-sm md:text-xl font-opensans font-normal text-primary border border-primary hover:bg-primary hover:text-white rounded md:bg-transparent lg:text-white lg:p-0"
                >
                  Our Services
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="block py-2 pl-3 pr-4 text-sm md:text-xl font-opensans font-normal text-primary border border-primary hover:bg-primary hover:text-white rounded md:bg-transparent lg:text-white lg:p-0"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#testimonial"
                  className="block py-2 pl-3 pr-4 text-sm md:text-xl font-opensans font-normal text-primary border border-primary hover:bg-primary hover:text-white rounded md:bg-transparent lg:text-white lg:p-0"
                >
                  Testimonial
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="block py-2 pl-3 pr-4 text-sm md:text-xl font-opensans font-normal text-primary border border-primary hover:bg-primary hover:text-white rounded md:bg-transparent lg:text-white lg:p-0"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
