import React from "react";
import { assets } from "../assets/Assets";

function Recent() {
  return (
    <div className="p-20 text-center text-white mt-5">
      <h1 className="text-[40px] font-bold">Our Recent Projects</h1>
      <p className="text-[16px] font-semibold mt-8">
        Lorem Ipsum is simply dummy text of the printing and typesetting <br />{" "}
        industry.
      </p>
      <div className="space-y-10 mt-20">
        <div className="flex space-x-12">
          <img
            src={assets.recent1}
            alt="image"
            className="w-[450px] h-[250px] object-cover rounded-3xl"
          />
          <img
            src={assets.recent2}
            alt="image"
            className="w-[450px] h-[250px] object-cover rounded-3xl"
          />
          <img
            src={assets.recent3}
            alt="image"
            className="w-[450px] h-[250px] object-cover rounded-3xl"
          />
        </div>
        <div className="flex space-x-12">
          <img
            src={assets.recent4}
            alt="image"
            className="w-[300px] h-[250px] object-cover  rounded-3xl"
          />
          <img
            src={assets.recent5}
            alt="image"
            className="w-[500px] h-[250px] object-cover  rounded-3xl"
          />
          <img
            src={assets.recent6}
            alt="image"
            className="w-[700px] h-[250px] object-cover  rounded-3xl"
          />
        </div>
      </div>
      <button className="w-[120px] h-[50px] bg-[#2b2929] rounded-lg font-semibold text-[20px] mt-16">
        SEE ALL
      </button>
    </div>
  );
}

export default Recent;


