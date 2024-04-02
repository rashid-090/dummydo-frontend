import React from 'react'
import { Logo1 } from '../../assets';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <main className='w-11/12 xl:w-10/12 mx-auto'>
      {/* get in touch */}
      <div className='bg-[#f3f5f6] space-y-7 p-10 xl:p-20 rounded-[3rem]'>
        <h3 className='text-main text-4xl font-semibold'>Further Questions?</h3>
       <div className='text-xl font-medium space-y-1 text-gray-500'>
        <p className=''>Our team will clear your doubts.</p>
         <p className=''>We ensure a quick response.</p>
       </div>
        <div className='space-y-1'>
          <p className='text-2xl font-semibold text-gray-500'>Email Us:</p>
          <p className='text-main text-2xl font-medium'>info@dummyfree.com</p>
        </div>
      </div>
      {/* footer */}
      <div className='py-10 xl:py-20 flex justify-between items-center'>
        <div className='space-y-3'>
          <span className='flex items-center gap-2'><img className='h-6 w-8 lg:h-10 lg:w-12 object-contain' src={Logo1} alt="logo" /><h4 className='text-main text-lg lg:text-2xl font-semibold'>DummyFree</h4></span>
          <p className='text-sm text-gray-500 font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div className='flex items-center gap-2'>
            <span className='h-10 w-10 bg-gray-200 rounded-3xl grid place-items-center text-main text-2xl'><FaFacebook/></span>
            <span className='h-10 w-10 bg-gray-200 rounded-3xl grid place-items-center text-main text-2xl'><FaInstagram/></span>
          </div>
        </div>
        <div>
          <h4 className='text-lg capitalize text-main font-medium'>quick links</h4>
          <div className='text-base flex flex-col pt-3 font-medium text-gray-500 capitalize gap-1'>
            <Link to={'/'}>Why us</Link>
            <Link to={'/'}>Blog</Link>
            <Link to={'/'}>FAQ's</Link>
            <Link to={'/'}>contact</Link>
          </div>
        </div>
      </div>
      <hr />
      <div className='w-full py-2 xl:py-4 text-sm flex justify-between text-gray-500'>
        <p>© 2024. All rights reserved.</p>
        <p>Terms & Condition</p>
      </div>
    </main>
  )
}

export default Footer