import { BiMoviePlay } from "react-icons/bi";
import { CgGym } from "react-icons/cg";
import { FaSmileBeam } from "react-icons/fa";
import { FaCoins, FaShirt, FaVolleyball } from "react-icons/fa6";
import { IoGameControllerSharp } from "react-icons/io5";
import {
  MdHome,
  MdLiveTv,
  MdMusicNote,
  MdOutlinePodcasts,
  MdTheaterComedy,
} from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";

export default function Category({ categoryHandler, selectedCategory }: any) {
  const categoryArray = [
    { name: "New", icon: <MdHome size={27} /> },
    { name: "Music", icon: <MdMusicNote size={27} /> },

    { name: "Movie", icon: <BiMoviePlay size={27} /> },
    { name: "Live", icon: <MdLiveTv size={27} /> },
    { name: "Gaming", icon: <IoGameControllerSharp size={27} /> },
    { name: "Education", icon: <PiStudentFill size={27} /> },
    { name: "Sport", icon: <FaVolleyball size={27} /> },
    { name: "Comedy", icon: <MdTheaterComedy size={27} /> },
    { name: "Podcast", icon: <MdOutlinePodcasts size={27} /> },
    { name: "Fashion", icon: <FaShirt size={27} /> },
    { name: "Crypto", icon: <FaCoins size={27} /> },
    { name: "Gym", icon: <CgGym size={27} /> },
    { name: "Beauty", icon: <FaSmileBeam size={27} /> },
  ];
  return (
    <div className="w-full mx-auto overflow-x-auto whitespace-nowrap  scrollbar-hide  flex items-center justify-evenly gap-x-[25px] lg:px-[20px] px-2   mt-4">
      {categoryArray.map((cat, index) => (
        <div
          onClick={() => categoryHandler(cat.name)}
          key={index}
          className={`flex gap-x-2 px-2 py-2 items-center cursor-pointer ${
            cat.name === selectedCategory ? "bg-red-500 && text-white" : ""
          }  hover:bg-red-500 hover:text-white transition rounded-md`}
        >
          <div className="text-inherit">{cat.icon}</div>
          <p className="mb-0 text-sm">{cat.name}</p>
        </div>
      ))}
    </div>
  );
}
