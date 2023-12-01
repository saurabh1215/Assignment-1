import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div className="flex flex-col overflow-x-auto">
      <div className="bg-orange-50 bg-no-repeat bg-cover bg-center">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
};

export default App;
