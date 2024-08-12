import React from 'react'
import card5 from "../../../public/card5.png"

const SignupCard = () => {
  return (
    <section className="card-section  py-10 mx-16">
    <div className="container bg-white flex rounded-xl  h-96 ">
           <div className='w-3/6 flex flex-col justify-center items-start px-10 gap-y-4'>
              <span className='text-4xl font-bold w-96'>Get started with Lando today</span>
              <span className='text-lg'>Start optimizing your processes today </span>
              <button className='rounded-xl p-3 bg-[#3164f4] text-white text-lg'>Sign up now</button>
           </div>
           <div className='w-3/6 flex  justify-center items-center '>
             <img  className=' w-96 h-96 object-fill' src={card5} alt="" />
           </div>
    </div>
</section>
  )
}

export default SignupCard