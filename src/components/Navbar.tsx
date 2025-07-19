import { Link } from "react-router-dom";
import logo from "../assets/tubeLogo.png";
import SearchBar from "./SearchBar";

export default function Navbar() {
  return (
    <div className="w-full max-w-[1540px]  mx-auto px-4 flex   md:flex-row items-center justify-between bg-[#f9f5f7] text-red-500  ">
      <div className="container flex items-center justify-between">
        <div className="">
          <Link to={"/"}>
            <img
              className="w-[150px] h-auto md:h-[80px] ml-[-30px]"
              src={logo}
              alt="Logo"
            />
          </Link>
        </div>

        <SearchBar />
      </div>
    </div>
  );
}
