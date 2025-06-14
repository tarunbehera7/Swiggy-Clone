import React from "react";
//import ReactDOM from "react-dom";
import ReactDOM from "react-dom/client";
// import logo from './logo/Screenshot (76).png';
import Header from "./components/Header";
import Body from "./components/Body";


const AppLayout = () => {
  ////
  // console.log( <Body />); 
  // O/p- object
  ////
  // This is "Virtual DOM".
  ////  
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />); 