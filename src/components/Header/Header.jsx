import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="sticky top-0 z-50 flex flex-col pt-8 pb-5 bg-white shadow-md">
      <header className="flex gap-5 justify-between items-start self-center w-full text-xl tracking-widest max-w-[1176px] max-md:max-w-full">
        <img
          loading="lazy"
          src="Artboard 22@10x.png"
          alt="Logo"
          className="object-contain shrink-0 max-w-full aspect-[3.91] w-[168px]"
        />
        <nav className="flex flex-wrap gap-6 self-stretch my-auto font-medium text-black whitespace-nowrap max-md:max-w-full">
          <img
            loading="lazy"
            src="Group 3107.png"
            alt="Nav Icon"
            className="object-contain grow shrink-0 aspect-[13.7] basis-0 rounded-[45px] w-fit max-md:max-w-full"
          />
          <div className="my-auto cursor-pointer">
            <NavLink
              to="/myBlog"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 border-b ${
                  isActive ? "text-orange-700" : "text-gray-700"
                } border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
              }
            >
              Home
            </NavLink>
          </div>
        </nav>
        <div className="flex gap-4">
          <div className="grow my-auto font-medium cursor-pointer mr-5 text-black">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 border-b ${
                  isActive ? "text-orange-700" : "text-gray-700"
                } border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
              }
            >
              Events
            </NavLink>
          </div>
          <button className="px-7 pt-2 pb-4 font-extrabold text-white bg-blue-400 rounded-[30px] shadow-[5px_7px_6px_rgba(0,0,0,0.23)] max-md:px-5">
            Log in
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
