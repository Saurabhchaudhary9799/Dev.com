import React from 'react'
import card3 from "../../../public/card3.png"

const Card3 = () => {
  return (
    <section className="hero-section mx-16 ">
      <div className="container flex justify-between py-10">
        
        <div className="w-3/6 flex flex-col  justify-center gap-y-5">
          <span className="text-[13px] text-gray-500 font-bold">
           COSTSAVER
          </span>
          <span className="text-5xl font-bold w-96">
           Cost saving in a smart way
          </span>
          <span className="text-lg">
            Powerful tools that helps you reduce costs and save money your business operations. With advanced analytics and optimization algorithms, Costsaver analyzes your existing workflows and identifies areas for improvement. 
          </span>
          <div className="flex justify-start  gap-x-6 ">
            <div className="p-3  rounded-xl text-lg font-regular border border-black ">
              Try now
            </div>
            
          </div>
        </div>
        <div className="w-3/6b flex justify-center items-center">
          <img src={card3} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Card3