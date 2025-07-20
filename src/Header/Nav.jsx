import React, { useContext } from "react";
import { LuSunMedium } from "react-icons/lu";

import { theme } from "../Theme";

function Nav() {
  let navList1 = ["Docs", "Setup", "Try it out", "Videos", "Blog"];
  let navList2 = ["Donate", "Team", "GitHub"];
  let {tm,toogleTheme}=useContext(theme)
  return (
    <>
      <header className="h-13 w-full bg-[#323330] fixed z-10">
        <nav className="flex items-center justify-between h-full w-[98%] m-auto pr-5 md:pl-0">
          <div className="flex items-center">
            <i class="ri-menu-line text-2xl text-white md:hidden inline-block cursor-pointer"></i>
            <img src="https://d33wubrfki0l68.cloudfront.net/7a197cfe44548cc1a3f581152af70a3051e11671/78df8/img/babel.svg" alt="" className="h-[30px] cursor-pointer" />
          </div>
          <div className="flex text-amber-50 gap-10 items-center">
            <ul className="md:flex items-center gap-5 hidden">
              {navList1.map((list) => (
                <li className="hover:text-amber-300 transition-all cursor-pointer">{ list}</li>
              ))}
            </ul>
            <div className="md:flex items-center bg-[#282926] cursor-pointer p-2 rounded-4xl px-5 hover:border-2 hover:border-amber-300 hidden ">
              <svg width="20" height="20" className="DocSearch-Search-Icon transform" viewBox="0 0 20 20"><path d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" ></path></svg> &nbsp;
              <input type="text" name="text" id="nav_text" placeholder="Search" className="w-15"/>
              <span><svg width="15" height="15" className="DocSearch-Control-Key-Icon bg-[#434666] "><path d="M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953" stroke-width="1.2" stroke="currentColor" fill="none" stroke-linecap="square"></path></svg></span>
              <span className="bg-[#434666] text-[10px]">k</span>
            </div>
            <ul className="md:flex items-center gap-5 hidden">
              {navList2.map((list) => (
                <li className="hover:text-amber-400 transition-all cursor-pointer">{ list}</li>
              ))}
            </ul>
            <i class="ri-search-line bg-[#21211f] text-2xl px-1 py-0.3
            rounded-full md:hidden inline-block cursor-pointer"></i>
            <i className={`${tm === 'light' ? 'ri-moon-line' :'ri-sun-line'}  hidden md:inline-block cursor-pointer hover:bg-gray-600 px-1.5 py-0.5 rounded-full`} onClick={toogleTheme}></i>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Nav;
