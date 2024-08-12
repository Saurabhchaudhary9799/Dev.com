import React from 'react'
import hero from "../../../public/hero.png"
const HeroSection = () => {
  return (
    <section className="hero-section mx-16 ">
         <div className="container flex justify-between py-10">
             <div className='w-3/6 flex flex-col  justify-center gap-y-5'>
               <span className='text-[13px] text-gray-500 font-bold'>- FREE 30 DAYS TRIAL </span>
               <span className='text-5xl font-bold'>
                the best way to showcase your project
               </span>
               <span className='text-lg'>here you can put a short description about your project </span>
               <div className='flex justify-start  gap-x-6 '>
                <div className='p-3  rounded-xl text-lg font-regular bg-[#3164f4] text-white'>Try for free</div>
                <div className='p-3 border border-black rounded-xl text-lg font-regular'>See how it works</div>
               </div>
             </div>
             <div className='w-3/6  flex justify-center items-center'>
                <img src={hero} alt="" />
             </div>
         </div>
    </section>
  )
}

export default HeroSection