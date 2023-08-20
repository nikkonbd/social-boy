// import React from 'react';
import { FaRegCheckSquare } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="bg-[#0f0f0f] text-white">
      <div className="py-20">
        <h2 className="bg-[#f87700] w-5/6 mx-auto text-center text-xl md:text-4xl font-bold py-3">
          Give Your Websites The Love That They DESERVE
        </h2>
      </div>
      <div className="w-5/6 mx-auto flex justify-between pb-20">
        <div>
          <h2 className="text-5xl font-semibold pb-8">
            Rock Your Social Space
          </h2>
          <p className="text-2xl">
            Signal Boy™ is here to help you create momentum in your <br />{" "}
            social media accounts and raise brand awareness.
          </p>
          <div className="text-base md:text-2xl font-medium pt-14">
            <h2 className="flex items-center gap-3">
              <FaRegCheckSquare></FaRegCheckSquare>REAL Social Accounts With
              Real Traffic
            </h2>
            <h2 className="flex items-center gap-3">
              <FaRegCheckSquare></FaRegCheckSquare>Manually Fulfilled Orders By
              Real People
            </h2>
            <h2 className="flex items-center gap-3">
              <FaRegCheckSquare></FaRegCheckSquare>Drip Fed Signals In The Span
              of 3-5 Days
            </h2>
            <h2 className="flex items-center gap-3">
              <FaRegCheckSquare></FaRegCheckSquare>FREE BONUS Twitter & LinkedIn
              Signals
            </h2>
          </div>
          <div className="flex pt-14 items-center justify-evenly">
            <div>
              <h2 className="bg-[#41a1fd] zoom rounded-xl text-white border-none mt-8 py-4 px-10 cursor-pointer text-2xl font-semibold">
                Learn More
              </h2>
            </div>
            <img
              className="w-80 hidden lg:block"
              src="/src/assets/arrow_down-1.png"
              alt=""
            />
          </div>
        </div>
        <div>
          <img
            className="w-[420px] hidden lg:block"
            src="/src/assets/comic-boy-2.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
