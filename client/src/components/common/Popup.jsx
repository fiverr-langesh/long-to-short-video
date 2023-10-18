import React from "react";
import { FcGoogle } from "react-icons/fc";

function Popup({ showPopup, setShowPopup }) {
  return (
    <div
      className={`${
        showPopup ? "flex" : "hidden"
      } justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-[#00000066] h-full w-full`}
    >
      <div
        className={` flex flex-col fixed z-50 justify-center gap-3 bg-gray-800 px-8 pt-5 pb-10 rounded-lg w-[500px]`}
      >
        <div
          className={` flex justify-end items-center font-semibold text-2xl text-stone-500 cursor-pointer`}
          onClick={() => setShowPopup(false)}
        >
          X
        </div>
        <h1 className=" text-stone-300 font-bold text-2xl text-center mt-3 mb-7">
          Sign in with Google
        </h1>
        <div className=" flex items-center justify-center">
          <button className="flex items-center justify-center gap-4 bg-white rounded py-2 px-5">
            <span>
              <FcGoogle size={20} />
            </span>
            <p className=" font-semibold text-stone-700">
              Continue with Google
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Popup;
