"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import Popup from "./Popup";
import { BiUserCircle } from "react-icons/bi";
import { LuLayoutDashboard } from "react-icons/lu";
import { FiSettings } from "react-icons/fi";
import { TiDocumentText } from "react-icons/ti";
import { BsQuestionLg } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import SigninButton from "../auth/SigninButton";
import { signOut, useSession } from "next-auth/react";
import Checkout from "../stripe/SubscribeButton";
import api from "@/utils/baseApi";
import { RecentActivityContext } from "../context/RecentActivityProvider";

function Navbar() {
  const [showPopup, setShowPopup] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [user, setUser] = useState(null);
  const [credits, setCredits] = useState({
    used: 0,
    balance: 0,
    balHour: 0,
    balMin: 0,
    percentage: 0
  });

  const recent = useContext(RecentActivityContext)

  const { data: session } = useSession();

  const executed = useRef(false);

  useEffect(() => {
    if (recent.recent.length && recent.credit) {
      setCredits(prev => {
        return {
          ...prev,
          used: Math.round(recent.credit + prev.used),
          percentage: (recent.credit / user.credits) * 100
        }
      })
    
    }
  },[recent])

  useEffect(() => {
    if (!executed.current && session && session.user) {
      executed.current = true;

      async function getUser() {
        const res = await api.get(`/user/${session.user.email}`);
        setUser(res.data.user);
        setCredits({
          used: Math.round(res.data.user.usedCredits),
          balance: res.data.user.credits,
          balHour: Math.floor(res.data.user.credits / 60),
          balMin: Math.floor(res.data.user.credits % 60),
          percentage: (res.data.user.usedCredits / res.data.user.credits) * 100,
        });
      }

      getUser();
    }
  }, [session]);

  return (
    <>
      <div className=" flex items-center justify-between">
        <h1 className=" text-xl sm:text-2xl md:text-4xl font-bold text-stone-50">LOGO</h1>
        {session && session.user ? (
          <div className=" flex items-center gap-5">
            <a  className=" text-xs sm:text-sm md:text-base bg-gray-600 py-1 px-2 md:px-3 rounded sm:font-medium text-slate-50" href="/pricing-plan">Upgrade</a>
            <div className=" flex flex-col gap-1">
              <div className=" w-28 sm:w-40 md:w-52 bg-gray-600 rounded-full h-2.5 dark:bg-gray-700">
                <div
                  style={{ width: `${credits.percentage}%` }}
                  className={` bg-emerald-400 h-2.5 rounded-full`}
                ></div>
              </div>
              <p className=" text-stone-50 font-semibold text-[10px] sm:text-xs">
                {credits.used}m / {credits.balHour}h { credits.balMin}m used
              </p>
            </div>
            <div className=" h-fit relative">
              <div
                className=" cursor-pointer"
                onClick={() => setShowOptions(!showOptions)}
              >
                <BiUserCircle color="white" size={44} />
              </div>
              <div
                className={`${
                  showOptions ? "flex" : "hidden"
                } flex-col justify-center items-start gap-3 border rounded bg-slate-800 text-slate-50 font-medium absolute w-52 right-0 py-4 px-2 `}
              >
                <a href="/" className=" flex items-center gap-2 w-full hover:bg-slate-700 px-1.5 duration-300 py-1 cursor-pointer">
                  <LuLayoutDashboard color="whitesmoke" />
                  <p>Dashboard</p>
                </a>
                <div className=" flex items-center gap-2 w-full hover:bg-slate-700 px-1.5 duration-300 py-1 cursor-pointer">
                  <FiSettings color="whitesmoke" />
                  <p>Billings</p>
                </div>
                <a href="/pricing-plan" className=" flex items-center gap-2 w-full hover:bg-slate-700 px-1.5 duration-300 py-1 cursor-pointer">
                  <TiDocumentText color="whitesmoke" />
                  <p>Plans</p>
                </a>
                <div className=" flex items-center gap-2 w-full hover:bg-slate-700 px-1.5 duration-300 py-1 cursor-pointer">
                  <BsQuestionLg color="whitesmoke" />
                  <p>Help Center</p>
                </div>
                <button onClick={signOut} className=" flex items-center gap-2 w-full hover:bg-slate-700 px-1.5 duration-300 py-1 cursor-pointer">
                  <FiLogOut color="whitesmoke" />
                  <span>Log out</span>
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className=" flex items-center justify-center cursor-pointer">
            <SigninButton />
          </div>
        )}
      </div>

      <Popup showPopup={showPopup} setShowPopup={setShowPopup} />
    </>
  );
}

export default Navbar;
