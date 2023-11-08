import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div
      className={`fixed z-30 top-0 left-0 w-[100vw] backdrop-blur-sm  bg-[#28282B]`}
    >
      <ul className="bg-blur-sm my-7 font-medium flex items-center justify-between gap-6 max-w-[1080px] mx-auto">
        <li className="flex items-center cursor-pointer">
          <NavLink to="/">
            <img
              src={
                "https://cdn.thecodehelp.in/ycims1tnymx4ntzpwwzr_0e4e0effb5.svg"
              }
              alt="Logo"
              className="lg:w-60 w-32 lg:ml-0 ml-3"
            />
          </NavLink>
        </li>
        <div className=" gap-6 mr-6 text-[0.86rem] lg:flex hidden">
          <li className="cursor-pointer hover:text-[#6747c8] text-white transition-font duration-200">
            <NavLink
              className={({ isActive }) =>
                `${isActive ? "text-[#6747c8]" : "text-white"}`
              }
              to="/"
            >
              Courses
            </NavLink>
          </li>
          <li className="cursor-pointer hover:text-[#6747c8] text-white transition-font duration-200">
            <NavLink
              className={({ isActive }) =>
                `${isActive ? "text-[#6747c8]" : "text-white"}`
              }
              to="/dashboard"
            >
              Dashboard
            </NavLink>
          </li>
        </div>
        <div className="lg:hidden">
          {openMenu ? (
            <RxCross1
              onClick={() => setOpenMenu(false)}
              className="text-[30px] text-white mr-3"
            />
          ) : (
            <GiHamburgerMenu
              onClick={() => setOpenMenu(true)}
              className="text-[30px] text-white mr-3"
            />
          )}
        </div>
        {openMenu && (
          <div className="bottomanimationUp  flex flex-col justify-center items-center h-fit w-fit absolute top-16 gap-3 bg-[#28282B] shadow-[0_15px_30px_-15px_#6b6b72] px-5 py-2 rounded-md right-12">
            <ul>
              <li className="cursor-pointer hover:text-[#6747c8] text-white transition-font duration-200">
                <NavLink
                  onClick={() => setOpenMenu(false)}
                  className={({ isActive }) =>
                    `${isActive ? "text-[#6747c8]" : "text-white"}`
                  }
                  to="/"
                >
                  Courses
                </NavLink>
              </li>
              <li className="cursor-pointer hover:text-[#6747c8] text-white transition-font duration-200">
                <NavLink
                  onClick={() => setOpenMenu(false)}
                  className={({ isActive }) =>
                    `${isActive ? "text-[#6747c8]" : "text-white"}`
                  }
                  to="/dashboard"
                >
                  Dashboard
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </ul>
    </div>
  );
};

export default NavBar;
