"use client";
import React, { useState } from "react";
import loginImg from "../../../public/login-img.jpg";
import Image from "next/image";

function Video() {
  const [hidden, setHidden] = useState(true);
  const handleClick = (e) => {
    e.preventDefault();
    setHidden(!hidden);
  };
  return (
    <div className=" relative">
      <div className=" border-0 rounded-lg bg-slate-700 shadow w-fit">
        <div className=" relative h-fit">
          <Image src={loginImg} className=" h-36 w-80 rounded-lg " alt="" />
          <div className=" absolute top-1 left-2 text-xs font-semibold bg-gray-800 py-1 px-2 rounded-xl text-slate-400">
            07:30
          </div>
        </div>
        <div className=" flex justify-between items-center px-2 py-3">
          <h1 className=" font-medium text-stone-50 text-lg">Video title</h1>
          <div onClick={handleClick} className=" cursor-pointer">
            <ion-icon name="ellipsis-vertical"></ion-icon>
          </div>
        </div>
      </div>
      <div
        className={`${
          hidden ? " hidden" : "block"
        } absolute -bottom-8 right-1 flex items-center gap-3 border rounded-lg bg-gray-800 py-1.5 px-4 w-fit`}
      >
        <span className=" mt-1">
          <ion-icon name="trash-outline"></ion-icon>
        </span>
        <p className=" text-stone-50">Delete</p>
      </div>
    </div>
  );
}

export default Video;
