import React from "react";
import { LuPencil } from "react-icons/lu";
import { HiMiniInboxStack } from "react-icons/hi2";
import { MdOutlineStarRate } from "react-icons/md";
import { MdOutlineWatchLater } from "react-icons/md";
import { GiArrowWings } from "react-icons/gi";
import { MdOutlineRestorePage } from "react-icons/md";
import { MdExpandMore } from "react-icons/md";
import { assets } from "../assets/assets";
import { useDispatch } from "react-redux";
import { setOpen } from "../redux/appSlice";

const sidebarItems = [
  {
    icon: <HiMiniInboxStack size={"20px"} className="text-[#0b1278]" />,
    title: "Inbox",
  },
  {
    icon: <MdOutlineStarRate size={"20px"} className="text-[#0b1278]" />,
    title: "Starred",
  },
  {
    icon: <MdOutlineWatchLater size={"20px"} className="text-[#0b1278]" />,
    title: "Snoozed",
  },
  {
    icon: <GiArrowWings size={"20px"} className="text-[#0b1278]" />,
    title: "Sent",
  },
  {
    icon: <MdOutlineRestorePage size={"20px"} className="text-[#0b1278]" />,
    title: "Drafts",
  },
  {
    icon: <MdExpandMore size={"20px"} className="text-[#0b1278]" />,
    title: "More",
  },
];

const Sidebar = () => {
  const dispatch = useDispatch();
  return (
    <div className="w-[18%] border-r">
      {/* // compose button // */}
      <div className="p-5">
        <button onClick={()=>dispatch(setOpen(true))} className="flex items-center gap-2 bg-[#c2e7ff] text-[#0b1278] font-semibold px-5 py-3 rounded-2xl shadow-md hover:shadow-lg hover:bg-[#d2e9ff]">
          <LuPencil size="24px" />
          Compose
        </button>
      </div>

      {/* // sidebar options // */}
      <div className="text-gray-500">
        {sidebarItems.map((value, index) => {
          return (
            <div className="flex items-center gap-4 pl-5 py-1.5 bg-gray-200 rounded-r-full cursor-pointer hover:bg-blue-300">
              {value.icon}
              <h1 className="font-medium text-[#0b1278]">{value.title}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
