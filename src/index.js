import React from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import Navbar from "./Components/Common/Navbar";

const Index = () => {
  return (
    <>
      <h1 className="text-red-500 text-5xl">
        This is the starting of Annpurna Food
      </h1>
      <Navbar />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Index />);
