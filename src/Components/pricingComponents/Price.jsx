import React from 'react'

const Price = () => {
  return (
    <section className="price-section mx-16  py-10">
        <div className="container flex flex-col items-center gap-y-5">
              <h1 className='text-3xl font-bold '>Pricing</h1>
              <span className='w-[350px] text-lg'>Our pricing is not expensive , but it's not cheap either , it's exactly what it should be</span>
              <div className='flex gap-x-5 border w-full'>
                  <div className='bg-white rounded-lg w-2/6 flex flex-col gap-y-3 p-4 '>
                       <h2 className='text-lg font-bold '>Basic</h2>
                        <div>
                            <span className='text-lg font-bold '>$</span><span className='text-3xl font-bold'>19</span><span>/month</span>
                           
                        </div>
                        <span className='w-48'>For individuals and small teams</span>
                        <button className='border border-black p-3 rounded-xl'>Get Started With Basic </button>
                  </div>
                  <div className='bg-white rounded-lg w-2/6 flex flex-col gap-y-3 p-4 '>
                         <div className='flex justify-between '>
                           <h2>Pro</h2>
                           <span className='bg-[#3164f4] text-white px-3 py-1 rounded-2xl flex justify-center items-center'>Most popular</span>
                         </div>
                        <div>
                            <span className='text-lg font-bold '>$</span><span className='text-3xl font-bold'>19</span><span>/month</span>
                           
                        </div>
                        <p className='w-48'>For startups and growing business</p>
                        <button className=' p-3 rounded-xl bg-[#3164f4] text-white'>Get Started With Pro </button>
                  </div>
                  <div className='bg-white rounded-lg w-2/6 flex flex-col gap-y-3 p-4 '>
                       <h2 className='text-lg font-bold '>Business</h2>
                        <div>
                            <span className='text-lg font-bold '>$</span><span className='text-3xl font-bold'>99</span><span>/month</span>
                           
                        </div>
                        <p className='w-48'>For organizations with  advanced needs</p>
                        <button className='border border-black p-3 rounded-xl'>Get Started With Business </button>
                  </div>
              </div>
        </div>
    </section>
  )
}

export default Price