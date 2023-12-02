import React from "react";
// @ts-ignore
import tickImg from "../assets/tick.png";

const Pricing = () => {
  const pricingCards = [
    {
      tag: "Free",
      tagPara: "So you can see how incredible our tool is.",
      dollar: "$0",
      dollarMonth: "/mo",
      dollarTag: "Free forever",
      button: "Get started",
      btnTag: "No credit card needed",
      contentHead: "What's included:",
      tickImg: tickImg,
      contentText1: "A cool feature",
      contentText2: "A basic feature",
      contentText3: "A top feature with limitations",
      contentText4: "An incredible feature so useful",
      contentText5: "A top feature",
    },
    {
      tag: "Starter",
      tagPara: "So you can see how incredible our tool is.",
      dollar: "$15",
      dollarMonth: "/mo",
      dollarTag: "Billed monthly",
      button: "Get started",
      btnTag: "7 days free trial no credit card needed",
      contentHead: "All Free features, plus:",
      tickImg: tickImg,
      contentText1: "A cool feature",
      contentText2: "A basic feature",
      contentText3: "A top feature with limitations",
      contentText4: "An incredible feature so useful",
      contentText5: "A top feature",
    },
    {
      tag: "Pro",
      tagPara: "So you can see how incredible our tool is.",
      dollar: "$45",
      dollarMonth: "/mo",
      dollarTag: "Billed monthly",
      button: "Get started",
      btnTag: " days free trial no credit card needed",
      contentHead: "All Starter features, plus:",
      tickImg: tickImg,
      contentText1: "A cool feature",
      contentText2: "A basic feature",
      contentText3: "A top feature with limitations",
      contentText4: "An incredible feature so useful",
      contentText5: "A premium feature",
      contentText6: "You need this feature",
    },
  ];
  return (
    <div className="flex flex-none flex-col h-[100hv] max-w-[1200px] mx-auto  py-[70px]">
      <div className="flex flex-none flex-col items-center justify-center  gap-4">
        <div className="bg-[#F1F2F4] py-[8px] px-[18px] rounded-full font-PlusJakartaSansBold text-[16px] text-[#2E2E2E]">
          Pricing and plans 💰
        </div>
        <div className="flex flex-none items-center justify-center text-center tracking-wide text-[58px] font-PlusJakartaSansExtraBold ">
          Find the best plan for your needs
        </div>
      </div>

      <div className="flex flex-row justify-center items-center py-12 mt-16">
        <div className="flex flex-row bg-[#F1F2F4] py-[9px] px-14 rounded-xl font-PlusJakartaSansMedium text-[16px] gap-6 text-gray-400 text-lg">
          <p>Monthly</p>
          <p>Annually</p>
        </div>
        <div className="font-PlusJakartaSansBold mx-6 ">
          <p>✨ save 30%</p>
        </div>
      </div>

      <div className="md:flex flex-col lg:flex-row gap-4 md:gap-6 flex-wrap md:justify-between items-center justify-center">
        {pricingCards.map((card, index) => (
          <>
            <div className="flex flex-col md:flex-none md:w-96 items-start justify-start group pt-8 bg-white rounded-2xl h-[660px] w-[384px] px-8">
              <button className="bg-slate-100 text-gray-700 rounded-full py-2 px-8 font-PlusJakartaSansBold text-[16px]">
                <p> {card.tag}</p>
              </button>
              <div className="font-PlusJakartaSansMedium  text-slate-500 my-5">
                {card.tagPara}
              </div>

              <div className="flex flex-row justify-end items-baseline ">
                <div className=" tracking-wide text-[50px] font-PlusJakartaSansExtraBold">
                  {card.dollar}
                </div>
                <div className="font-PlusJakartaSansMedium text-slate-400">
                  {card.dollarMonth}
                </div>
              </div>

              <div className=" font-PlusJakartaSansMedium text-[16px] mb-6">
                {card.dollarTag}
              </div>

              <div className="flex flex-col justify-center items-center">
                <div>
                  <a href="#contact">
                    <button className="bg-black text-[#eeeeee] rounded-lg py-[12px] px-[6.8rem] font-PlusJakartaSansBold text-[18px]">
                      <p>{card.button}</p>
                    </button>
                  </a>
                </div>
                <div className="text-[12px] text-slate-800 font-PlusJakartaSansMedium p-2 mb-7">
                  {card.btnTag}
                </div>
              </div>

              <div className=" text-gray-800 py-2 font-PlusJakartaSansBold text-[17px]">
                {card.contentHead}
              </div>

              {/* ***** ****** */}

              <div className="flex my-1">
                <div className="h-9">
                  <img src={card.tickImg} alt="" />
                </div>
                <div className="text-gray-500 font-PlusJakartaSansMedium text-[16px] px-1">
                  {card.contentText1}
                </div>
              </div>

              <div className="flex my-1">
                <div className="h-9">
                  <img src={card.tickImg} alt="" />
                </div>
                <div className="text-gray-600 font-PlusJakartaSansRegular text-[16px] px-1">
                  {card.contentText2}
                </div>
              </div>
              <div className="flex my-1">
                <div className="h-9">
                  <img src={card.tickImg} alt="" />
                </div>
                <div className="text-gray-600 font-PlusJakartaSansRegular text-[16px] px-1">
                  {card.contentText3}
                </div>
              </div>
              <div className="flex my-1">
                <div className="h-9">
                  <img src={card.tickImg} alt="" />
                </div>
                <div className="text-gray-600 font-PlusJakartaSansRegular text-[16px] px-1">
                  {card.contentText4}
                </div>
              </div>
              <div className="flex my-1">
                <div className="h-9">
                  <img src={card.tickImg} alt="" />
                </div>
                <div className="text-gray-600 font-PlusJakartaSansRegular text-[16px] px-1">
                  {card.contentText5}
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
