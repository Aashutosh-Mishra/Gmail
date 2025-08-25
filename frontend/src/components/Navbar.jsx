import React from "react";
import Avatar from "react-avatar";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearchengin } from "react-icons/fa";
import { FaQuestion } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { FaSlidersH } from "react-icons/fa";
import { TbGridDots } from "react-icons/tb";
import { assets } from "../assets/assets";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between mx-3 h-16">
      {/* left side - hamburger menu and logo */}
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-2">
          <div className="p-3 hover:bg-gray-200 rounded-lg cursor-pointer">
            <GiHamburgerMenu size={20} />
          </div>
          <img className="w-14" src={assets.gmailLogo} alt="gamilLogo" />
          <h1 className="text-2xl text-gray-500 font-medium">Gmail</h1>
        </div>
      </div>
      {/* //input search bar// */}
      <div className="w-[50%] mr-60">
        <div className="flex items-center justify-between py-2.5 px-10 bg-[#EAF1FB] px-3 py-2 rounded-full">
          <FaSearchengin size={"25px"} className="text-gray-700" />
          <input
            type="text"
            placeholder="Search mail"
            className="rounded-full bg-transparent outline-none px-2  placeholder-gray-600 placeholder:text-lg  placeholder:text-center placeholder-glow placeholder:tracking-widest"
          />
          <FaSlidersH size={"20px"} className="text-gray-700" />
        </div>
      </div>
      {/* right side icons */}
      <div className="flex items-center gap-2">
        <div className="p-3 hover:bg-gray-200 rounded-lg cursor-pointer ">
          <FaQuestion size={"22px"} />
        </div>

        <div className="p-3 hover:bg-gray-200 rounded-lg cursor-pointer ">
          <IoIosSettings size={"22px"} />
        </div>

        <div className="p-3 hover:bg-gray-200 rounded-lg cursor-pointer ">
          <TbGridDots size={"22px"} />
        </div>
        {/* // user profile avatar */}
        <div className="p-[2px] rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 hover:from-blue-500 hover:via-purple-600 hover:to-pink-600 cursor-pointer">
          <div className="p-1 hover:bg-blue-50 rounded-full cursor-pointer bg-white">
          <Avatar 
          src={assets.userProfile}
          size="40" 
          round={true} />
        </div>
        

        </div>
        
      </div>
    </div>
  );
};

export default Navbar;
