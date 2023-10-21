import React, { useEffect, useRef } from "react";
import Video from "./Video";
import Processing from "./Processing";
import api from "@/utils/baseApi";
import { useSession } from "next-auth/react";

function VideoContainer() {
  const [videos, setVideos] = React.useState([]);

  const executed = useRef(false);

  const { data: session } = useSession();

  async function getUser() {
    const res = await api.get(`/user/${session.user.email}`);
    return res.data.user;
  }

  async function getOuptutVedios() {
    const user = await getUser();

    if (user._id) {
      const res = await api.get(`/video/${user._id}`);

      console.log(res.data);

      setVideos(res.data.outputUrls);
    }
  }

  useEffect(() => {
    if (!executed.current && session && session.user) {
      executed.current = true;
      console.log("VideoContainer");

      getOuptutVedios();
    }
  }, [session, executed]);

  return (
    <div className=" my-10">
      <h1 className=" text-3xl font-semibold text-stone-50 my-4">Generated Videos</h1>
      <div className=" flex items-center gap-7 flex-wrap">
        {videos.map((video, index) => {
          return <Video key={index} src={video.url} videoId={video.videoId} setVideos={setVideos} />;
        })}
      </div>
      <div className="mt-20">
        <Processing />
      </div>
    </div>
  );
}

export default VideoContainer;
