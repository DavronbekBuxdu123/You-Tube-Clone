import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const [value, setValue] = useState("");
  console.log(value);
  const navigate = useNavigate();
  const submitHandler = () => {
    if (value) {
      navigate(`/search/${value}`);
    }
  };
  return (
    <div className="relative w-full max-w-[500px] flex">
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="search"
        className="w-full px-4 py-2 pr-12 rounded border outline-none form-control"
        placeholder="Search..."
      />
      <div className="absolute top-[8px] right-[4px]">
        <CiSearch
          onClick={submitHandler}
          size={24}
          className="  text-gray-500"
        />
      </div>
    </div>
  );
}
