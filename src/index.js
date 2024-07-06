import React from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import Navbar from "./components/Navbar";
import InformationalSection from "./components/homePage/InformationalSection";
import VerticalSpacer from "./components/verticalSpacer";
import information from "./data/InformationalSection";
import Carousel from "./components/Carousel";

const Index = () => {
  return (
    <>
      <Navbar />
      <VerticalSpacer mobileHeight={8} />
      <div className="mid-laptop:px-8">
        <InformationalSection data={information} />
      </div>
      <div className="mid-laptop:px-8">
        <Carousel spaceBetween={16} />
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Index />);
