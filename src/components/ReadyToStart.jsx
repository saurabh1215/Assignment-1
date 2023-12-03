import React from "react";
// @ts-ignore
import Image from "../assets/Image.png";

const ReadyToStart = () => {
  return (
    <div>
      <div className="flex flex-none flex-col h-[100hv] max-w-[1200px] mx-auto py-[70px]">
        <div className="flex flex-none flex-col items-center justify-center">
          <div className="bg-[#F1F2F4] md:py-2 md:px-4 py-2 px-3 rounded-full font-PlusJakartaSansBold text-sm md:text-base ">
            Last call Baby! 🚀
          </div>
          <div className="flex flex-none items-center justify-center text-center md:text-[3.25rem] text-[2rem] font-PlusJakartaSansExtraBold md:leading-[5rem] md:tracking-wider leading-[2.5rem] tracking-wider py-2 mx-6 my-4 ">
            Ready to start?
          </div>
          <div className="font-PlusJakartaSansMedium leading-[32px] text-center md:text-[20px] py-8 px-12 text-slate-500 tracking-wider">
            Here you should explain how cool your app is. Remember, focus{" "}
            <br></br>on the benefits for your users, not on the features.{" "}
          </div>
          <div>
            <a href="#contact">
              <button className="bg-black text-[#FEFEFE] rounded-lg py-4 px-8 font-bold text-[18px]">
                <p>Get started, it's free</p>
              </button>
            </a>
          </div>
          <div className="overflow-visible mr-24">
            <img
              src={Image}
              alt=""
              className="object-center h-auto w-[500px] object-fill"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadyToStart;
