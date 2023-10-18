"use client";
import React, { useState } from "react";
import { FaLink } from "react-icons/fa";

function InputComponent() {
  const [link, setLink] = useState("");
  const handleClick = () => {
    console.log(link);
  }
  return (
    <div className=" flex items-center justify-center gap-8 bg-gray-600 py-4 px-5 rounded-xl w-[800px]">
      <div className="">
        <FaLink color="whitesmoke" size={35} />
      </div>
      <input
        className=" border-0 py-4 px-6 rounded bg-gray-600 text-stone-50 focus:outline-none placeholder:text-2xl text-2xl"
        type="text"
        onChange={(e) => setLink(e.target.value)}
        value={link}
        placeholder="Drop a video link"
      />
      <button onClick={handleClick} className=" py-5 px-8 bg-pink-600 font-bold text-stone-50 rounded">
        Get clips in one click
      </button>
    </div>
  );
}

export default InputComponent;
