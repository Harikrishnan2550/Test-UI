import React from "react";
import { assets } from "../assets/Assets";
import { FaArrowRightLong } from "react-icons/fa6";
import { more } from "../assets/More";

function More() {
  return (
    <div className="">
      <div
        className="h-full w-full bg-cover bg-center "
        style={{ backgroundImage: `url(${assets.more1})` }}
      >
        <div className="text-center text-white">
          <h1 className=" text-[40px] ">
            <br />
            Lorem Ipsum is simply dummy text of the printing <br /> and
            typesetting industry.
          </h1>
          <p className="mt-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the <br /> industry's standard dummy
            text ever since the 1500s.
          </p>
        </div>
        <div className="text-white flex flex-wrap justify-center gap-x-28 gap-y-14 p-10 mt-10 w-[75%] mx-auto">
  {more.map((item, index) => (
    <div key={index} className="flex flex-col items-center text-center">
      <img
        src={item.image}
        alt="image"
        className="w-[70px] h-[70px] rounded-full"
      />
      <p className="font-bold mt-10">{item.description}</p>
      <FaArrowRightLong className="text-orange-400 mt-8 text-[22px]" />
    </div>
  ))}
</div>

      </div>
    </div>
  );
}

export default More;


