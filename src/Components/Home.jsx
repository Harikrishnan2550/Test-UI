import React from "react";
import Navbar from "./Navbar";
import { assets } from "../assets/Assets";

function Home() {
  return (
    <div className="relative">
      <Navbar />
      <div className="flex justify-around text-white">
        <div className=" mt-[80px] ml-5">
          <h3 className="text-yellow-500 font-bold text-[18px]">3D game Dev</h3>
          <h1 className="mt-5 text-[52px] font-bold leading-tight">
            Work that we <br />
            produce for our <br />
            clients
          </h1>
          <h3 className="mt-8 leading-[30px]">
            Lorem Ipsum is simply dummy text of the printing and <br />
            typesetting industry. Lorem Ipsum has been the industry's  <br />
            standard.
          </h3>
          <button className="bg-amber-500 w-[170px] h-[40px] rounded-full mt-12 mb-16">
            Get more details
          </button>
        </div>
        <div>
          <div>
            <div className="flex">
              <img
                src={assets.home1}
                alt=""
                className="w-[100px] h-auto mt-16 ml-[180px]"
              />
              <div className="ml-[250px] mt-14">
                <img
                  src={assets.home2}
                  alt="image"
                  className="w-[60px] h-auto "
                />
                <p className="leading-[13px] ml-1 font-serif text-[14px]">
                  UNREAL <br />
                  <span className="ml-2 text-[10px]">ENGINE</span>{" "}
                </p>
              </div>
            </div>

            <img
              src={assets.home3}
              alt="image"
              className="mr-[600px] w-[110px] h-auto mt-[130px]"
            />
            <img
              src={assets.home4}
              alt="image"
              className="absolute top-0 bottom-[250px] right-[255px] w-[440px] h-auto "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
