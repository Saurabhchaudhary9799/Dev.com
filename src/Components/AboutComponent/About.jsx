import React from 'react'

const About = () => {
  return (
    <section className="about-section mx-16 py-10 ">
         <div className="container flex flex-col items-center gap-y-5">
            <h1 className='text-3xl font-bold '>About us</h1>
            <p className='w-[400px] text-lg font-regular text-center '>We offer revolutionary solution to industry problems. Join Lando community and experience the benefits of company optimization today!</p>
            <div>
                <img className='w-[700px]' src="src/assets/about.png" alt="" />
            </div>
            <h1 className='text-3xl font-bold '>Our mission</h1>
            <p className='w-[700px] text-lg font-regular text-center '>At Lanfo , we are committed to providing excellent servioces to our customers and clients and to help them achieve the best outcomes. We believe that  we can make a positive impact on our community, industry and the world. Our Lando team is dedicated to providing the best possible service and support , and we are always looking for ways to improve and innovate.</p>
         </div>
         <div className="container flex py-10">
             <div className='w-3/6  flex justify-center items-center'>
       <p className='text-4xl font-bold w-48 '>Let's start working more efficiently today!</p>
             </div>
             <div className='w-3/6'>
                <img className=''  src="src/assets/hero.png" alt="" />
             </div>
         </div>
    </section>
  )
}

export default About