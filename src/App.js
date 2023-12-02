import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";
import FeaturesCard from "./components/FeaturesCard";

const App = () => {
  return (
    <div className="flex flex-col overflow-x-auto">
      <div className="bg-[#FEF9F6] bg-no-repeat bg-cover bg-center ">
        <div className="border-b-[1px] bg-[#FEF9F6] w-full fixed">
          <Navbar />
        </div>
        <Hero />
        <Features />
        <FeaturesCard />
        <Footer />
      </div>
    </div>
  );
};

export default App;
