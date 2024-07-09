import React from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import Navbar from "./components/Navbar";
import InformationalSection from "./components/homePage/InformationalSection";
import VerticalSpacer from "./components/verticalSpacer";
import information from "./data/InformationalSection";
import Carousel from "./components/Carousel";
import restaurants from "./data/restaurants";

const Index = () => {
  return (
    <>
      <Navbar />
      <div className="mid-laptop:px-8 my-8">
        <InformationalSection data={information} />
      </div>
      <div className="mid-laptop:px-8 my-4">
        <Carousel spaceBetween={16} restaurants={restaurants} />
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Index />);
