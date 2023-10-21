import React, { useContext } from "react";
import { RecentActivityContext } from "../context/RecentActivityProvider";
import Video from "./Video";

export default function RecentActivity() {
    const { recent } = useContext(RecentActivityContext);
    
    if (!recent.length) return;

  return (
    <div className=" my-10">
      <div className=" flex items-center gap-7 flex-wrap">
        {recent &&
          recent.map((video, index) => {
            return (
              <Video
                key={index}
                src={video.url}
                    videoId={video.videoId}
                    deleteOption={false}
                // setVideos={setVideos}
              />
            );
          })}
      </div>
    </div>
  );
}
