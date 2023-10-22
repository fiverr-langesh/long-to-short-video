import React, { useState } from "react";
import { FaLessThan } from "react-icons/fa";
import Pricing from "./Pricing";

function PricingContainer() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <div className=" font-medium text-slate-50 flex items-center justify-start gap-2">
        <span>
          <FaLessThan />
        </span>{" "}
        <span>Back</span>
      </div>
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

      <div className=" grid grid-cols-4 gap-6 px-10">
        <Pricing
          mostPopular={false}
          type={"Free"}
          price={0}
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
          optionTitle={"$1.20/clip"}
          option={true}
          option1={"15 upload minutes/month"}
          option2={"30 upload minutes/month"}
          option3={"40 upload minutes/month"}
          include2={"Preferential queue"}
          include3={"Without watermark"}
          include5={"Up to 10GB per upload"}
          include6={"30 days clip storage"}
        />

        <Pricing
          mostPopular={true}
          type={"Premium"}
          price={19.99}
          optionTitle={"$0.90/clip"}
          option={true}
          option1={"30 upload minutes/month"}
          option2={"50 upload minutes/month"}
          option3={"70 upload minutes/month"}
          include2={"Preferential queue"}
          include3={"Without watermark"}
          include5={"Up to 10GB per upload"}
          include6={"720 days clip storage"}
        />

        <Pricing
          mostPopular={false}
          type={"Enterprise"}
          price={249.99}
          optionTitle={"$0.23/clip"}
          option={true}
          option1={"70 upload minutes/month"}
          option2={"90 upload minutes/month"}
          option3={"120 upload minutes/month"}
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
