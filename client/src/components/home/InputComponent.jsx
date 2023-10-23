"use client";
import api from "@/utils/baseApi";
import { signIn, useSession } from "next-auth/react";
import React, { useContext, useState } from "react";
import { FaLink } from "react-icons/fa";
import { toast } from "react-toastify";
import validateUrl from "../helpers/validateUrl";
import { RecentActivityContext } from "../context/RecentActivityProvider";

function InputComponent() {
  const [link, setLink] = useState("");
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);

  const { setRecent, recent ,setCredit} = useContext(RecentActivityContext);

  console.log(recent);

  const notifi = (msg, type) => toast(msg, { type });

  const handleClick = async () => {
    try {
      if (session && session.user) {
        const valid = validateUrl(link);

        if (!valid) {
          return notifi("Invalid url", "error");
        }

        const payload = {
          url: link,
          email: session.user.email,
        };
        setLoading(true);

        const res = await api.post("/video", payload);

        setLoading(false);

        notifi("Video is being processed", "success");

        console.log(res.data.video);
        setRecent(res.data.video.outputUrls);
        setCredit(res.data.video.usedCredits);
      } else {
        signIn("google", {
          callbackUrl: "http://localhost:3000/create-account",
        });
      }
    } catch (err) {
      console.log(err);

      setLoading(false);
      if (!err.response) return notifi("Can't reach the server", "error");
      notifi(err.response.data.message, "error");
    }
  };

  return (
    <div className=" flex flex-col sm:flex-row items-center justify-center md:gap-8 bg-gray-600 sm:py-2 md:py-4 pl-1 sm:px-5 rounded-xl w-[340px] min-[480px]:w-[480px] sm:w-[670px] md:w-[750px] lg:w-[800px]">
      <div className="hidden sm:block">
        <FaLink color="whitesmoke" size={35} />
      </div>
      <input
        className=" border-0 py-4 px-2 sm:px-6 rounded bg-gray-600 text-stone-50 focus:outline-none placeholder:md:text-2xl sm:text-lg md:text-2xl "
        type="text"
        onChange={(e) => setLink(e.target.value)}
        value={link}
        placeholder="Drop youtube video link"
      />
      <button
        onClick={handleClick}
        className=" text-sm sm:text-base py-5 px-2 md:px-4 lg:px-5 xl:px-8 bg-[#FF165D] md:font-medium lg:font-bold text-stone-50 rounded w-full"
      >
        {loading ? "Loading..." : "Get clips in one click"}
      </button>
    </div>
  );
}

export default InputComponent;
