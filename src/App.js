import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div className="flex flex-col overflow-x-auto">
      <div className="bg-[#FEF9F6] bg-no-repeat bg-cover bg-center ">
        <div className="border-b-[1px]">
          <Navbar />
        </div>
        <Hero />
      </div>
    </div>
  );
};

export default App;
