import React from "react";
// @ts-ignore
import bodyLargeImg1 from "../assets/bodyLargeImg1.webp";
// @ts-ignore
import bodyLargeImg2 from "../assets/bodyLargeImg2.webp";
// @ts-ignore
import bodyLargeImg3 from "../assets/bodyLargeImg3.webp";
// @ts-ignore
import bodyLargeImg4 from "../assets/bodyLargeImg4.webp";
// @ts-ignore
import bodySmallImg1 from "../assets/bodySmallImg1.svg";
// @ts-ignore
import bodySmallImg2 from "../assets/bodySmallImg2.svg";
// @ts-ignore
import bodySmallImg3 from "../assets/bodySmallImg3.svg";
// @ts-ignore
import bodySmallImg4 from "../assets/bodySmallImg4.svg";
import FeaturesSection from "./FeaturesSection";

const Features = () => {
  // @ts-ignore
  const featuresData = [
    {
      chipText: "Seamless Scheduling",
      chipBgColor: "#FEE9CB",
      heading: "Focus on what matters most for you",
      textContent:
        "Effortlessly plan your day with our intuitive drag-and-drop interface. Sync with multiple calendar platforms, import events from emails, and add participants with just a few clicks.",
      bodyImgSmall: bodySmallImg1,
      bodyImgLarge: bodyLargeImg1,
    },
    {
      chipText: "Smart Reminders & Task",
      chipBgColor: "#CCEAFD",
      heading: "Never miss an important deadline or event again",
      textContent:
        "Never miss an important deadline again with our AI-driven  notifications. Our app intelligently analyzes your schedule to prioritize what's most important, keeping you on track and ensuring your day is productive and stress-free.",
      bodyImgSmall: bodySmallImg2,
      bodyImgLarge: bodyLargeImg2,
    },
    {
      chipText: "Seamless Scheduling",
      chipBgColor: "#DDF4E4",
      heading: "Focus on what matters most for you",
      textContent:
        "Effortlessly plan your day with our intuitive drag-and-drop interface. Sync with multiple calendar platforms, import events from emails, and add participants with just a few clicks",
      bodyImgSmall: bodySmallImg3,
      bodyImgLarge: bodyLargeImg3,
    },
    {
      chipText: "Smart Reminders & Task",
      chipBgColor: "#FDDED6",
      heading: "Never miss an important deadline or event again",
      textContent:
        "Never miss an important deadline again with our AI-driven  notifications. Our app intelligently analyzes your schedule to prioritize what's most important, keeping you on track and ensuring your day is productive and stress-free.",
      bodyImgSmall: bodySmallImg4,
      bodyImgLarge: bodyLargeImg4,
    },
  ];

  return (
    <div className="flex flex-none flex-col h-[100hv] max-w-[1200px] mx-auto  py-[70px]">
      <div className="flex flex-none flex-col items-center justify-center  gap-4">
        <div className="bg-[#F1F2F4] py-[8px] px-[18px] rounded-full font-PlusJakartaSansBold text-[16px]">
          Our main features 🦸🏼
        </div>
        <div className="flex flex-none items-center justify-center text-center tracking-wide text-[58px] font-PlusJakartaSansExtraBold ">
          Discover your new superpowers
        </div>
      </div>

      {featuresData.map((data, index) => (
        <FeaturesSection
          key={index}
          chipText={data.chipText}
          chipBgColor={data.chipBgColor}
          heading={data.heading}
          textContent={data.textContent}
          bodyImgSmall={data.bodyImgSmall}
          bodyImgLarge={data.bodyImgLarge}
        />
      ))}
    </div>
  );
};

export default Features;
