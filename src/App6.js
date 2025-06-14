import React from "react";
import ReactDOM from "react-dom/client";
// import logo from './logo/Screenshot (76).png';
import Header from "./components/Header";
// import Body from "./components/Body";
import Body6 from "./components/Body6";
import Body61 from "./components/Body61";



const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      {/* <Body6 />  */}
      <Body61 />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />); 