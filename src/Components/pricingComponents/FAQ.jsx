import React from 'react'
import { FaChevronDown } from "react-icons/fa";
const FAQ = () => {
  return (
    <section className="faq-section mx-16 py-10 ">
        <div className="container flex flex-col items-center justify-center gap-y-5">
             <div>
                <img className='w-48 h-48' src="src/assets/faq.png" alt="" />
             </div>
             <p className='w-96   text-4xl font-bold text-center'>    Frequently asked questions</p>
             <div>
                 <div className='flex justify-between items-center w-96 border-b-2 border-black py-3'><span className='text-lg font-bold'>How does this work?</span><span><FaChevronDown/></span></div>
                 <div className='flex justify-between items-center w-96 border-b-2 border-black py-3'><span className='text-lg font-bold'>What are the benefits?</span><span><FaChevronDown/></span></div>
                 <div className='flex justify-between items-center w-96 border-b-2 border-black py-3'><span className='text-lg font-bold'>Is it difficult to use?</span><span><FaChevronDown/></span></div>
                 <div className='flex justify-between items-center w-96 border-b-2 border-black py-3'><span className='text-lg font-bold'>Can i have custome pricing?</span><span><FaChevronDown/></span></div>
                 <div className='flex justify-between items-center w-96 border-b-2 border-black py-3'><span className='text-lg font-bold'>Is there trial version available?</span><span><FaChevronDown/></span></div>
                 <div className='flex justify-between items-center w-96 border-b-2 border-black py-3'><span className='text-lg font-bold'>Where do i sign up?</span><span><FaChevronDown/></span></div>
             </div>
        </div>
    </section>
  )
}

export default FAQ