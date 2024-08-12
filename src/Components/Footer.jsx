import React from 'react'

const Footer = () => {
  return (
     <section className="footer px-16 border-t-2 py-10">
       <div className="container flex justify-start gap-x-[100px] ">
          <div >
             <h2 className='text-3xl font-bold'>Dev.com</h2>
             <div className='text-lg'> <p>2024 @Dev.com </p>
             <p>All Right Reserved</p></div>
            
          </div>
          <div>
            <ul className='text-lg'>
               <li>Home</li>
               <li>Pricing</li>
               <li>About us</li>
               <li>Contact</li>
            </ul>
          </div>
          <div>
          <ul className='text-lg'>
               <li>Facebook</li>
               <li>Instagram</li>
               <li> Twitter</li>
               <li>Linkedin</li>
            </ul>
          </div>
          <div>
          <ul className='text-lg'>
               <li>Privacy Policy</li>
               <li>Terms Of Service</li>
              
            </ul>
          </div>
       </div>
     </section>
  )
}

export default Footer