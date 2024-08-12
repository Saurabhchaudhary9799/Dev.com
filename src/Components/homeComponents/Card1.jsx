import React from 'react'
import pastedImage from "../../../public/PastedImage.png"

const Card1 = () => {
  return (
     <section className="card-section  py-10 mx-16">
         <div className="container bg-white flex rounded-xl  h-96 shadow-xl shadow-gray-500 relative">
                <div className='w-3/6 flex flex-col justify-center items-start px-10 gap-y-4'>
                   <span className='text-4xl font-bold w-64'>Introducing good solution</span>
                   <span className='text-lg'>join our community and experience the benefits today</span>
                   <button className='rounded-xl p-3 bg-[#3164f4] text-white text-lg'>Try for free</button>
                </div>
                <div className='w-3/6 absolute right-0 -top-[200px]  '>
                  <img  className='  w-full  ' src={pastedImage} alt="" />
                </div>
         </div>
     </section>
  )
}

export default Card1