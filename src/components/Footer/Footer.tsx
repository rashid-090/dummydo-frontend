import { Logo1 } from '../../assets';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';
import {globe} from '../../assets'

const Footer = () => {
  return (
    <main className='w-11/12 xl:w-9/12 mx-auto mt-10'>
      {/* get in touch */}
      <div className='bg-bgshade flex md:flex-row md:items-center justify-between  p-5 lg:p-10 rounded-2xl md:rounded-3xl lg:rounded-[3rem]'>
       <div className='space-y-7'>
        <h3 className='text-main text-2xl lg:text-4xl font-semibold'>Further Questions?</h3>
        <div className='text-base lg:text-xl font-medium lg:space-y-1 text-gray-500'>
          <p className=''>Our team will clear your doubts.</p>
          <p className=''>We ensure a quick response.</p>
        </div>
          <div className='space-y-1'>
            <p className='text-base lg:text-2xl font-semibold text-gray-500'>Email Us:</p>
            <p className='text-main text-2xl font-medium'>info@dummyfree.com</p>
          </div>
       </div>
       <div className='hidden md:block'>
        <img className='h-40 w-40 xl:h-60 xl:w-60 hover:rotate-6 duration-200' src={globe} alt="globe" />
       </div>
      </div>
      {/* footer */}
      <div className='py-10 xl:py-20 flex flex-col gap-y-10 md:flex-row justify-between md:items-center'>
        <div className='space-y-3 xl:space-y-5'>
          <span className='flex items-center gap-2'><img className='h-6 w-8 lg:h-10 lg:w-12 object-contain' src={Logo1} alt="logo" /><h4 className='text-main text-lg lg:text-2xl font-semibold'>DummyFree</h4></span>
          <p className='text-sm text-gray-500 font-medium'>Lorem ipsum dolor sit amet consectetur<br className='hidden md:block'/> adipisicing elit.</p>
          <div className='flex items-center gap-2'>
            <span className='h-10 w-10 bg-gray-100 rounded-3xl grid place-items-center text-main text-2xl'><FaFacebook/></span>
            <span className='h-10 w-10 bg-gray-100 rounded-3xl grid place-items-center text-main text-2xl'><FaInstagram/></span>
          </div>
        </div>
        <div>
          <h4 className='text-lg capitalize text-main font-medium'>quick links</h4>
          <div className='text-base flex flex-col pt-3 font-medium text-gray-500 capitalize gap-1'>
            <Link to={'/'} className='hover:underline hover:translate-x-0.5 duration-150'>Why us</Link>
            <Link to={'/'} className='hover:underline hover:translate-x-0.5 duration-150'>Blog</Link>
            <Link to={'/'} className='hover:underline hover:translate-x-0.5 duration-150'>FAQ's</Link>
            <Link to={'/'} className='hover:underline hover:translate-x-0.5 duration-150'>contact</Link>
          </div>
        </div>
      </div>
      <hr />
      <div className='w-full py-2 xl:py-4 text-xs font-medium md:text-sm flex justify-between text-gray-400'>
        <p>© 2024. All rights reserved.</p>
        <a className='hover:underline' href='https://dostudio.co.in' target='_blank'>Powered by DO studio</a>
      </div>
    </main>
  )
}

export default Footer