"use client";

import React, { useState } from "react";
import { FaLessThan } from "react-icons/fa";
import Pricing from "./Pricing";
import Navbar from "../common/Navbar";

function PricingContainer() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className=" bg-slate-900 p-10 lg:p-20 xl:p-0">
      <a href="/" className="font-medium text-slate-50 flex items-center justify-start gap-2">
        <span>
          <FaLessThan />
        </span>{" "}
        <span>Back</span>
      </a>
      <div className=" flex items-center justify-center mt-10 mb-20">
        <label className="themeSwitcherTwo relative inline-flex cursor-pointer select-none items-center">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            className="sr-only"
          />
          <span className="label flex items-center font-medium text-slate-50 text-lg">
            Billed monthly
          </span>
          <span
            className={`slider mx-4 flex h-8 w-[60px] items-center rounded-full p-1 duration-200 ${
              isChecked ? "bg-[#FF165D]" : "bg-[#CCCCCE]"
            }`}
          >
            <span
              className={`dot h-6 w-6 rounded-full bg-white duration-200 ${
                isChecked ? "translate-x-[28px]" : ""
              }`}
            ></span>
          </span>
          <span className="label flex items-center font-medium text-slate-50 text-lg">
            Billed annually
          </span>
        </label>
      </div>

      <div className=" grid md:grid-cols-2 xl:grid-cols-4 gap-6 px-10">
        <Pricing
          mostPopular={false}
          type={"Free"}
          price={0}
          subscription={false}
          optionTitle={"15 upload minutes for free"}
          option={false}
          include2={"More waiting time"}
          include3={"Has watermark"}
          include5={"Up to 2GB per upload"}
          include6={"5 days clip storage"}
        />

        <Pricing
          mostPopular={false}
          type={"Plus"}
          price={16.99}
          subscription={true}
          optionTitle={"$1.20/clip"}
          option={true}
          option1={15}
          option2={30}
          option3={40}
          include2={"Preferential queue"}
          include3={"Without watermark"}
          include5={"Up to 10GB per upload"}
          include6={"30 days clip storage"}
        />

        <Pricing
          mostPopular={true}
          type={"Premium"}
          price={19.99}
          subscription={true}
          optionTitle={"$0.90/clip"}
          option={true}
          option1={30}
          option2={50}
          option3={70}
          include2={"Preferential queue"}
          include3={"Without watermark"}
          include5={"Up to 10GB per upload"}
          include6={"720 days clip storage"}
        />

        <Pricing
          mostPopular={false}
          type={"Enterprise"}
          price={249.99}
          subscription={true}
          optionTitle={"$0.23/clip"}
          option={true}
          option1={70}
          option2={90}
          option3={120}
          include2={"Preferential queue"}
          include3={"Without watermark"}
          include5={"Up to 10GB per upload"}
          include6={"1450 days clip storage"}
        />
      </div>
    </div>
  );
}

export default PricingContainer;
