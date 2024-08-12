import React from "react";
import pastedImage from "../../../public/PastedImage.png"

const JoinCard = () => {
  return (
    <section className="card-section  py-10 mx-16">
      <div className="container bg-white flex rounded-xl   shadow-xl shadow-gray-500">
        <div className="w-3/6  ">
          <div className=" h-3/6 flex justify-start items-center ">
            <img className="w-96 h-96" src={pastedImage} alt="" />
          </div>

          <div className=" h-3/6 flex flex-col  justify-center gap-y-5 pl-10">
            <span className="text-5xl font-bold w-96">
              How to join our community
            </span>
            <span className="text-lg">
              just 3 simple steps to optimize your company operations.
            </span>
            <div className="flex justify-start  gap-x-6 ">
              <div className="p-3  rounded-xl text-lg font-regular text-white border-black bg-[#3164f4]">
                Sign up now
              </div>
            </div>
          </div>
        </div>
        <div className="w-3/6 flex flex-col gap-y-10 justify-center items-center py-10">
            <div className="h-2/6 border-b-2">
               <h1 className="text-3xl font-bold">Step 1</h1>
               <p className="w-96 text-lg ">Reach out to one of our specialists, and have short introduction session.</p>
            </div>
            <div className="h-2/6 border-b-2">
              <h1 className="text-3xl font-bold">Step 2</h1>
              <p className="w-96 text-lg ">Our specialist will prepare personalized package suitable for your needs.</p>
            </div>
            <div className="h-2/6">
              <h1 className="text-3xl font-bold">Step 3</h1>
              <p className="w-96 text-lg "> Poof! You are ready to work smart with optimized operations.</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default JoinCard;
