"use client";
import React, { useState } from "react";
import Popup from "./Popup";
import { BiUserCircle } from "react-icons/bi";
import { LuLayoutDashboard } from "react-icons/lu";
import { FiSettings } from "react-icons/fi";
import { TiDocumentText } from "react-icons/ti";
import { BsQuestionLg } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import SigninButton from "../auth/SigninButton";
import { useSession } from "next-auth/react";
import Checkout from "../stripe/Checkout";

function Navbar() {
  const [showPopup, setShowPopup] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  const { data: session } = useSession()
  
  return (
    <>
      <div className=" flex items-center justify-between">
        <h1 className=" text-4xl font-bold text-stone-50">LOGO</h1>
        {session && session.user ? (
          <div className=" flex items-center gap-5">
            <Checkout />
            <div className=" flex flex-col gap-1">
              <div class=" w-52 bg-gray-600 rounded-full h-2.5 dark:bg-gray-700">
                <div class=" bg-emerald-400 h-2.5 rounded-full w-[45%]"></div>
              </div>
              <p className=" text-stone-50 font-semibold text-xs">
                31m / 1h 30m used
              </p>
            </div>
            <div className=" h-fit relative">
              <div
                className=" cursor-pointer"
                onClick={() => setShowOptions(!showOptions)}
              >
                <BiUserCircle color="white" size={50} />
              </div>
              <div
                className={`${
                  showOptions ? "flex" : "hidden"
                } flex-col justify-center items-start gap-3 border rounded bg-slate-800 text-slate-50 font-medium absolute w-52 right-0 py-4 px-2 `}
              >
                <div className=" flex items-center gap-2 w-full hover:bg-slate-700 px-1.5 duration-300 py-1 cursor-pointer">
                  <LuLayoutDashboard color="whitesmoke" />
                  <p>Dashboard</p>
                </div>
                <div className=" flex items-center gap-2 w-full hover:bg-slate-700 px-1.5 duration-300 py-1 cursor-pointer">
                  <FiSettings color="whitesmoke" />
                  <p>Billings</p>
                </div>
                <div className=" flex items-center gap-2 w-full hover:bg-slate-700 px-1.5 duration-300 py-1 cursor-pointer">
                  <TiDocumentText color="whitesmoke" />
                  <p>Plans</p>
                </div>
                <div className=" flex items-center gap-2 w-full hover:bg-slate-700 px-1.5 duration-300 py-1 cursor-pointer">
                  <BsQuestionLg color="whitesmoke" />
                  <p>Help Center</p>
                </div>
                <div className=" flex items-center gap-2 w-full hover:bg-slate-700 px-1.5 duration-300 py-1 cursor-pointer">
                  <FiLogOut color="whitesmoke" />
                  <p>Log out</p>
                </div>
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
