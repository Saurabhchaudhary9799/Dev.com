import React from 'react'
import photo1 from "../../../public/photo1.jpeg"
import photo2 from "../../../public/photo2.jpeg"
import photo3 from "../../../public/photo3.jpeg"
import photo4 from "../../../public/photo4.jpeg"

const Team = () => {
  return (
    <section className="team-section mx-16 py-10 ">
         <div className="container flex flex-col gap-y-3 items-center">
              <h1 className='text-4xl font-bold '>Team</h1>
              <p className='text-lg'>Meet the people behind our magical product</p>
              <div className="grid grid-cols-4 gap-x-10 gap-y-5">
                  <div className='flex flex-col items-center justify-center '>
                    <img className='w-32 h-32 object-cover rounded-[50%]' src={photo1} alt="" />
<h1 className='font-bold text-lg'>Hannah Mika</h1>
<span className='text-lg'>CEO</span>
                  </div>
                  <div className='flex flex-col items-center justify-center '>
                    <img className='w-32 h-32 object-cover rounded-[50%]' src={photo2} alt="" />
<h1 className='font-bold text-lg'>Danial Peter</h1>
<span className='text-lg'>CTO</span>
                  </div>
                  <div className='flex flex-col items-center justify-center '>
                    <img className='w-32 h-32 object-cover rounded-[50%]' src={photo3} alt="" />
<h1 className='font-bold text-lg'>Lars Mikkel</h1>
<span className='text-lg'>Head of Operations</span>
                  </div>
                  <div className='flex flex-col items-center justify-center '>
                    <img className='w-32 h-32 object-cover rounded-[50%]' src={photo4} alt="" />
<h1 className='font-bold text-lg'>Denis Forner</h1>
<span className='text-lg'>Head of Product</span>
                  </div>
                  <div className='flex flex-col items-center justify-center '>
                    <img className='w-32 h-32 object-cover rounded-[50%]' src={photo1} alt="" />
<h1 className='font-bold text-lg'>Hannah Mika</h1>
<span className='text-lg'>CEO</span>
                  </div>
                  <div className='flex flex-col items-center justify-center '>
                    <img className='w-32 h-32 object-cover rounded-[50%]' src={photo2} alt="" />
<h1 className='font-bold text-lg'>Danial Peter</h1>
<span className='text-lg'>CTO</span>
                  </div>
                  <div className='flex flex-col items-center justify-center '>
                    <img className='w-32 h-32 object-cover rounded-[50%]' src={photo3} alt="" />
<h1 className='font-bold text-lg'>Lars Mikkel</h1>
<span className='text-lg'>Head of Operations</span>
                  </div>
                  <div className='flex flex-col items-center justify-center '>
                    <img className='w-32 h-32 object-cover rounded-[50%]' src={photo4} alt="" />
<h1 className='font-bold text-lg'>Denis Forner</h1>
<span className='text-lg'>Head of Product</span>
                  </div>
              </div>
         </div>
    </section>
  )
}

export default Team