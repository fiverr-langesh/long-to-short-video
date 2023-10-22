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

  const { setRecent, recent } = useContext(RecentActivityContext);

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
    <div className=" flex items-center justify-center gap-8 bg-gray-600 py-4 px-5 rounded-xl w-[800px]">
      <div className="">
        <FaLink color="whitesmoke" size={35} />
      </div>
      <input
        className=" border-0 py-4 px-6 rounded bg-gray-600 text-stone-50 focus:outline-none placeholder:text-2xl text-2xl"
        type="text"
        onChange={(e) => setLink(e.target.value)}
        value={link}
        placeholder="Drop youtube video link"
      />
      <button
        onClick={handleClick}
        className=" py-5 px-8 bg-[#FF165D] font-bold text-stone-50 rounded"
      >
        {loading ? "Loading..." : "Get clips in one click"}
      </button>
    </div>
  );
}

export default InputComponent;
