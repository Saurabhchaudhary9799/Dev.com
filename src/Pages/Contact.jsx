import React from 'react'

const Contact = () => {
  return (
    <section className="contact-section mx-16">
        <div className="container flex">
            <div className='w-3/6 '>
               <img src="src/assets/photo1.png" alt="" />
            </div>
            <div className='w-3/6  flex flex-col justify-center gap-y-5 pl-[100px]'>
              <div><h1 className='text-3xl font-bold text-start'>Contact Us</h1></div>
              
              <div className='text-lg'>
                <p>Explore the futrure with us.</p>
                <p>Feel free to get in touch.</p>
              </div>
              <div className='flex flex-col gap-y-2 '>
                 <h1>Name</h1>
                 <input className='w-64 font-bold h-10 rounded-lg pl-5' type="text" placeholder='Full name' />
                 <h1>Email</h1>
                 <input className='w-64 font-bold h-10 rounded-lg pl-5' type="email" placeholder='Email address' />
                 <h1>message</h1>
                 <input className='w-64 font-bold h-10 rounded-lg pl-5' type="text"  placeholder='how can we get better'/>
                
              </div>
              <button className='w-64 bg-[#3164f4] text-white rounded-xl h-10'>send message</button>
            </div>
        </div>
    </section>
  )
}

export default Contact