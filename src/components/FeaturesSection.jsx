import React from "react";

const FeaturesSection = ({
  chipText,
  chipBgColor,
  heading,
  textContent,
  bodyImgSmall,
  bodyImgLarge,
}) => {
  return (
    <div className="flex flex-row items-center justify-center mt-8 gap-28">
      <div className="flex flex-col items-start justify-start h-auto w-[900px]">
        <div className="py-[8px] px-[18px] rounded-full font-PlusJakartaSansBold text-[16px] text-[#2E2E2E] ">
          {chipText}
        </div>
        <div className=" tracking-wide text-[40px] font-PlusJakartaSansExtraBold pt-3">
          {heading}
        </div>
        <div className="font-PlusJakartaSansMedium leading-[32px] text-[19px] py-10 text-slate-500 tracking-wide text-start">
          {textContent}
        </div>
        <div className="overflow-visible">
          <img
            src={bodyImgSmall}
            alt=""
            className="object-center h-auto w-[1000px] object-fill"
          />
        </div>
      </div>
      <div className="overflow-visible ">
        <img
          src={bodyImgLarge}
          className="object-center h-auto w-[600px]] object-fill"
          alt="Img"
        />
      </div>
    </div>
  );
};

export default FeaturesSection;
