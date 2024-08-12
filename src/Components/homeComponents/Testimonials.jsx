import React from 'react'
import { FaStar } from "react-icons/fa";
const Testimonials = () => {
  return (
     <section className="testimonial-section mx-16 py-10">
          <div className="container flex flex-col justify-center items-center gap-y-5">
                <h1 className='text-4xl font-bold '>Testimonials</h1>
                <p className='text-lg'>People love what we do and we want to let your know </p>
                <div className='flex justify-center gap-x-6 w-full py-4 '>
                   <div className='w-64 p-10 bg-white rounded-xl flex flex-col justify-center items-center gap-y-3'> 
                      <p className='w-48 font-bold '>"since implementing Lando our business has seen significant growth."</p>
                      <h1 className='font-bold'>Jack Sivire</h1>
                      <div className='flex gap-x-1 text-[#3164f4]'>
                         <span><FaStar/></span><span><FaStar/></span><span><FaStar/></span><span><FaStar/></span><span><FaStar/></span>
                      </div>
                      <p className='text-sm text-gray-500'>Lead manager , Growio</p>
                   </div>
                   <div className=' w-64 p-10 bg-white rounded-xl flex flex-col justify-center items-center  gap-y-3 -translate-y-5'> 
                      <p className='w-48  font-bold '>"since implementing Lando our business has seen significant growth."</p>
                      <h1 className='font-bold'>Jack Sivire</h1>
                      <div className='flex gap-x-1 text-[#3164f4]'>
                         <span><FaStar/></span><span><FaStar/></span><span><FaStar/></span><span><FaStar/></span><span><FaStar/></span>
                      </div>
                      <p className='text-sm text-gray-500'>Lead manager , Growio</p>
                   </div>
                   <div className='w-64 p-10 bg-white rounded-xl flex flex-col justify-center items-center gap-y-3'> 
                      <p className='w-48 font-bold '>"since implementing Lando our business has seen significant growth."</p>
                      <h1 className='font-bold'>Jack Sivire</h1>
                      <div className='flex gap-x-1 text-[#3164f4]'>
                         <span><FaStar/></span><span><FaStar/></span><span><FaStar/></span><span><FaStar/></span><span><FaStar/></span>
                      </div>
                      <p className='text-sm text-gray-500'>Lead manager , Growio</p>
                   </div>
                </div>
          </div>
     </section>
  )
}

export default Testimonials
// public/card1.png