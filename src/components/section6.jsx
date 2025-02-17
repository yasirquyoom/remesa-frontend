import React from "react";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const section4 = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 lg:h-[80vh] items-center lg:pl-12 md:px-6 px-4 lg:px-0 gap-12 lg:gap-0 py-12">
      <div className="flex order-2 lg:order-1 flex-col gap-4 w-full items-start md:items-center lg:items-start text-[#0B280D]">
        <span className=" text-[32px] md:text-[48px] lg:text-[90px] font-[600] leading-[0.9]">
          24/7 Support
        </span>
        <p className="text-[24px] md:text-[28px] lg:text-[32px] font-[400] lg:leading-[0.9] leading-[1]">
          Get assistance anytime, anywhere with our dedicated customer support
          team available around the clock.
        </p>
        <div className="flex gap-4 pt-12 flex-col md:flex-row w-full items-center">
          <Link
            to={"/contact"}
            className="flex gap-2 text-[#95E095] bg-[#0B280D] px-4 text-[16px] h-[50px] rounded-lg items-center"
          >
            <MdEmail /> Contact Us
          </Link>
        </div>
      </div>
      <div className="flex order-1 lg:order-2 w-full flex justify-center p-4 lg:p-0 h-full">
        <img src="/images/support.png" alt="globe" className="w-full h-full " />
      </div>
    </div>
  );
};

export default section4;
