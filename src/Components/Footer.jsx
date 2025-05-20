import React from "react";
import { TiSocialFacebook } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <div className="text-white">
      <div className="p-20">
        <div className="flex justify-between">
          <div className="space-y-7">
            <h1 className="text-[20px] font-bold">LOGO</h1>
            <h3>
              {" "}
              Lorem Ipsum is simply dummy text of the <br /> printing and
              typesetting industry.
            </h3>
            <p>@Logo</p>
          </div>
          <div className="">
            <h1 className="text-[20px] font-bold">About us</h1>
            <p className="mt-2">Zeux</p>
            <p className="mt-1">Portfolio</p>
            <p className="mt-1">Careers</p>
            <p className="mt-1">Contact us</p>
          </div>
          <div className="space-y-7">
            <h1 className="text-[20px] font-bold">Contact us</h1>
            <p>
              {" "}
              Lorem Ipsum is simply dummy text <br /> of the printing and
              typesetting industry.
            </p>
            <p>+90889097890</p>
          </div>
          <div className="space-x-5 mt-32">
            <button className="bg-white rounded-full w-7 h-7 text-black ">
              <TiSocialFacebook className="ml-1.5" />
            </button>
            <button className="bg-white rounded-full w-7 h-7 text-black ">
              <FaInstagram className="ml-1.5" />
            </button>
            <button className="bg-white rounded-full w-7 h-7 text-black ">
              <FaTwitter className="ml-1.5" />
            </button>
            <button className="bg-white rounded-full w-7 h-7 text-black ">
              <FaLinkedinIn className="ml-1.5" />
            </button>
          </div>
        </div>
      </div>

      <hr />
      <h3 className="text-center p-10">Copyright ® 2021 Lorem All Rights Reserved </h3>
    </div>
  );
}

export default Footer;


