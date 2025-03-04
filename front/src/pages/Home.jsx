import React from "react";
import Carousel from "../components/Carousel";
import HomeMid from "../components/HomeMid";
import Shop from "./Shop";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <div className="tw:relative tw:h-[744px]">
        <div className="tw:ml-43 tw:mr-45 tw:relative tw:z-30 ">
          <Navbar />
        </div>
         <div className="tw:absolute tw:h-screen tw:top-0 tw:left-0 tw:z-10">
          <Carousel />             
        </div>
        
      </div>
      <div className="tw:ml-43 tw:mr-45 tw:mt-5">
        <h2>PRODUCT OVERVIEW</h2>
        <HomeMid />
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default Home;
