import React, { useContext } from "react";
import { RecentActivityContext } from "../context/RecentActivityProvider";
import Video from "./Video";
import VideoLoad from "../home/VideoLoad";
import { FormControl, MenuItem, Select } from "@mui/material";

export default function RecentActivity() {
  const { recent ,credit} = useContext(RecentActivityContext);
  const [language, setLanguage] = React.useState("english");

  // if (!recent.length) return; 

  return (
    <div className=" my-10">
      <div className=" flex items-center gap-7 flex-wrap">
        <div className=" flex items-center gap-16">
          <div className=" flex items-center gap-4">
            <h1 className=" text-stone-400  font-semibold text-lg">
              Caption:{" "}
            </h1>
            <FormControl
              variant="standard"
              className=" text-slate-50"
              sx={{ minWidth: 120 }}
            >
              {/* <InputLabel className=' text-slate-50' id="demo-simple-select-standard-label">Language</InputLabel> */}
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                label="Language"
                className=" text-slate-50 bg-slate-700 px-8 py-1"
              >
                <MenuItem value={"english"}>English</MenuItem>
                <MenuItem value={"french"}>French</MenuItem>
                <MenuItem value={"japanese"}>Japanese</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className=" flex items-center">
            <h1 className=" text-stone-400  font-semibold text-lg">
              Credit usage:{" "}
            </h1>
            <p className=" ml-1  text-stone-200 font-medium">~ {credit}m</p>
          </div>
        </div>
        {recent &&
          recent.map((video, index) => {
            return (
              <Video
                key={index}
                src={video}
                deleteOption={false}
                // setVideos={setVideos}
              />
            );
          })}
      </div>
      {/* <VideoLoad /> */}
    </div>
  );
}
