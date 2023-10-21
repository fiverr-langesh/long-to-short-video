"use client";
import React, { useState } from "react";
import InputComponent from "./InputComponent";
import File from "./File";
import VideoLoad from "./VideoLoad";
import RecentActivity from "../video/RecentActivity";

function HomeSection() {
  const [fileChoosed, setFileChoosed] = useState(false);
  return (
    <div className=" flex flex-col justify-center items-center gap-14 my-52">
      <div className="flex justify-center">
        <InputComponent />
      </div>
       <File />
      <RecentActivity />
    </div>
  );
}

export default HomeSection;
