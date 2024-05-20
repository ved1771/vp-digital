import { TbShoppingBag } from "react-icons/tb";
import React, { useState } from "react";
import NavLogo from "../assets/nike-logo.svg";
import { RxHamburgerMenu } from "react-icons/rx";
export default function Nav() {
  const [isMobileMenuShown , setIsMobileMenuShown] = useState(false)
  const root = ["Home", "About", "Service", "Pricing", "Contact"];
  return (
    <nav className="flex flex-wrap justify-between">
      <a href="#">
        <img src={NavLogo} alt="logo" />
      </a>
      <button onClick={() => setIsMobileMenuShown(!isMobileMenuShown)} className={`lg:hidden focus:ring-2 focus:ring-gray-400 p-2 rounded-lg hover:bg-gray-100`}>
        <RxHamburgerMenu size={25} />
      </button>

      <div className="w-full lg:w-auto">
        <ul className={`${!isMobileMenuShown && "hidden" } lg:space-x-8 flex flex-col lg:flex-row bg-gray-50 lg:bg-transparent text-xl border lg:border-none border-gray-100 rounded-lg py-4 px-4`}>
          {root.map((routes, i) => {
            return (
              <li
                className={`py-2 px-3 rounded cursor-pointer ${
                  i === 0 ? "bg-blue-500 text-white lg:bg-transparent lg:text-blue-500" : "hover:bg-gray-100"
                } `}
              >
                {routes}
              </li>
            );
          })}
        </ul>
      </div>
      <div className=" h-12 w-12 rounded-full p-4 bg-white shadow-md fixed left-4 bottom-4 lg:static">
        <TbShoppingBag />
      </div>
    </nav>
  );
}
