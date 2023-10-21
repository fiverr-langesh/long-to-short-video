"use client";
import React, { useState } from "react";
import loginImg from "../../../public/login-img.jpg";
import Image from "next/image";
import api from "@/utils/baseApi";

function Video({ src, videoId, setVideos }) {
  const [hidden, setHidden] = useState(true);

  const handleClick = async (e) => {
    e.preventDefault();
    setHidden(!hidden);
  };

  async function deleteVideo() {
    try {
      const res = await api.post(`/video/delete`, {
        outputUrl: src,
        videoId,
      });

      console.log(res.data);

      setVideos((prev) => {
        return prev.filter((video) => {
          console.log(video.url, src, video.url !== src)
          console.log(video.videoId, videoId, videoId !== video.videoId)
          
          return video.url !== src || video.videoId !== videoId;
        });
      });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className=" relative">
      <div className=" border-0 rounded-lg bg-slate-700 shadow w-fit">
        <div className=" relative h-fit">
          <video className=" h-48 w-80 rounded-t-lg" src={src} controls></video>
        </div>
        <div className=" flex justify-center items-center cursor-pointer ">
          <button
            onClick={deleteVideo}
            className="w-full font-medium text-stone-50 text-lg hover:bg-red-500 rounded-b-lg px-2 py-3"
          >
            Delete
          </button>
          {/* <div onClick={handleClick} className=" cursor-pointer">
            <ion-icon name="ellipsis-vertical"></ion-icon>
          </div> */}
        </div>
      </div>
      {/* <div
        className={`${
          hidden ? " hidden" : "block"
        } absolute -bottom-8 right-1 flex items-center gap-3 border rounded-lg bg-gray-800 py-1.5 px-4 w-fit`}
      >
        <span className=" mt-1">
          <ion-icon name="trash-outline"></ion-icon>
        </span>
        <p className=" text-stone-50">Delete</p>
      </div> */}
    </div>
  );
}

export default Video;
