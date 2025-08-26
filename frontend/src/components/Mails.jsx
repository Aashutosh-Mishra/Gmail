import React from "react";
import { useState } from "react";
import { FaCaretDown, FaUserFriends } from "react-icons/fa";
import { GiOnTarget } from "react-icons/gi";
import { IoMdMore, IoMdRefresh } from "react-icons/io";
import { GoTag } from "react-icons/go";
import {
  MdCropSquare,
  MdInbox,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from "react-icons/md";
import Emails from "./Emails";

const mailTypes = [
  {
    icon: <MdInbox size={"20px"} />,
    title: "Primary",
  },
  {
    icon: <GoTag size={"20px"} />,
    title: "Promotions",
  },
  {
    icon: <FaUserFriends size={"20px"} />,
    title: "Social",
  },
];

const Mails = () => {
  const [selected, setSelected] = useState(0);
  return (
    <div className="flex-1 bg-white rounded-xl mx-5">
      <div className="flex items-center justify-between px-4 my-1">
        <div className=" flex items-center gap-2  ">
          <div className="flex items-center gap-1 ">
            <MdCropSquare
              size={"20px"}
              className="rounded-sm hover:bg-gray-200 cursor-pointer"
            />
            <FaCaretDown
              size={"15px"}
              className="rounded-sm hover:bg-gray-200 cursor-pointer"
            />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-200 cursor-pointer">
            <IoMdRefresh size={"20px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-200 cursor-pointer">
            <IoMdMore size={"20px"} />
          </div>
        </div>

        <div className="flex items-center gap-2 my-3">
          <span>1 to 50</span>
          <MdKeyboardArrowLeft size={"24px"} />
          <MdKeyboardArrowRight size={"24px"} />
        </div>
      </div>

      <div className="h-90vh overflow-y-auto">
        <div className="flex items-center gap-1 ">
          {
            mailTypes.map((value, index) => {
            return (
              <button onClick={() => setSelected(index)}
                key={index}
                className={`flex items-center gap-5 p-3 w-52 hover:bg-gray-200 cursor-pointer ${
                  selected === index
                    ? "border-b-4 border-b-blue-600 text-blue-600"
                    : "border-b-transparent"
                }`}
              >
                {value.icon}
                <span className="text-gray-500 font-medium">{value.title}</span>
              </button>
            );
          })}
        </div>
        {/* // emails list // */}
        <Emails />
      </div>
    </div>
  );
};

export default Mails;
