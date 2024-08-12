import React from "react";
import card2 from "../../../public/card2.png"
const Card2 = () => {
  return (
    <section className="hero-section mx-16 ">
      <div className="container flex justify-between py-10">
        <div className="w-3/6b flex justify-center items-center">
          <img src={card2} alt="" />
        </div>
        <div className="w-3/6 flex flex-col  justify-center gap-y-5">
          <span className="text-[13px] text-gray-500 font-bold">
           SMART SAVE
          </span>
          <span className="text-5xl font-bold w-96">
            All your work is safe with us
          </span>
          <span className="text-lg">
            we take your data security seriously , which is why we use advanced encryption protocols to protect your files in the cloud. your data is safe and secure with us . 
          </span>
          <div className="flex justify-start  gap-x-6 ">
            <div className="p-3  rounded-xl text-lg font-regular border border-black ">
              Try now
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card2;
