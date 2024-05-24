import { Logo1 } from '../../assets';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom';
import {globe,coupon} from '../../assets'
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const flipInterval = setInterval(() => {
      setIsFlipped((prev) => !prev);
    }, 2000);

    return () => clearInterval(flipInterval);
  }, []);

  const location = useLocation();
  const showFooter = location.pathname !== '/';


  return (
    <main className='w-11/12 xl:w-9/12 mx-auto'>
      {/* get in touch */}
      {!showFooter &&
      <div className='w-full xl:mt-10 overflow-hidden rounded-xl xl:rounded-[3rem]'>
        <img className='w-full' src={coupon} alt="coupon" />
      </div>
       }
      {/* <div className='bg-form-bg bg-no-repeat bg-cover w-full shadow-xl shadow-gray-200 border group flex md:flex-row md:items-center gap-x-20 xl:gap-x-60 justify-between  p-5 lg:p-10 rounded-2xl md:rounded-3xl lg:rounded-[3rem] relative'>
       <div className='space-y-5 flex-1 bg-white p-5 rounded-3xl'>
          <div>
            <h1 className='text-main text-2xl lg:text-4xl font-bold text-center lg:text-left'>For more enquiry</h1>
            <h3 className='text-xl font-semibold capitalize'>For more enquiry</h3>/
          </div>
          <form className='w-full flex flex-col gap-y-2 '>
            <input className='w-full outline-none rounded-lg bg-transparent border border-gray-300  px-3 py-1 xl:py-2 ' type="text" placeholder='Name' />
            <input className='w-full outline-none rounded-lg bg-transparent border border-gray-300  px-3 py-1 xl:py-2 ' type="tel" placeholder='Mobile' />
            <input className='w-full outline-none rounded-lg bg-transparent border border-gray-300  px-3 py-1 xl:py-2 ' type="email" placeholder='Email' />
            <button className='bg-main  w-fit mx-auto lg:mx-0 text-white px-14 py-2 rounded-full mt-3' type='submit'>Send</button>
          </form>
       </div>
       <div className='hidden md:flex justify-center flex-1 '>
        <img className='absolute top-20 right-96 h-20 w-20 duration-500 group-hover:rotate-12' src={gif1} alt="globe" />
       </div>
      </div> */}
      {/* footer */}
      <div className='pt-10 pb-5 xl:pt-20 flex flex-col gap-y-10 md:flex-row justify-between md:items-center'>
        <div className='space-y-3 xl:space-y-5'>
          {/* <span className='flex items-center gap-2'><h4 className='text-main text-lg lg:text-2xl font-futuracondensed uppercase'>DummyFree</h4></span>
          <p className='text-sm text-gray-500 font-medium'>Lorem ipsum dolor sit amet consectetur<br className='hidden md:block'/> adipisicing elit.</p> */}
          <div className='flex items-center gap-2'>
            <span className='h-10 w-10 bg-gray-100 rounded-3xl grid place-items-center text-main text-2xl hover:-translate-y-1 duration-300 cursor-pointer'><FaFacebook/></span>
            <span className='h-10 w-10 bg-gray-100 rounded-3xl grid place-items-center text-main text-2xl hover:-translate-y-1 duration-300 cursor-pointer'><FaInstagram/></span>
          </div>
        </div>
        {/* <div>
          <h4 className='text-lg capitalize text-main font-medium'>quick links</h4>
          <div className='text-base flex flex-col pt-3 font-medium text-gray-500 capitalize gap-1'>
            <Link to={'/'} className='hover:underline hover:translate-x-0.5 duration-300'>Why us</Link>
            <Link to={'/'} className='hover:underline hover:translate-x-0.5 duration-300'>Blog</Link>
            <Link to={'/'} className='hover:underline hover:translate-x-0.5 duration-300'>FAQ's</Link>
            <Link to={'/'} className='hover:underline hover:translate-x-0.5 duration-300'>contact</Link>
          </div>
        </div> */}
      </div>
      <hr />
      <div className='w-full py-2 xl:py-4 text-xs  md:text-sm flex justify-between text-gray-400'>
        <p>© 2024. All rights reserved.</p>
        <a className='hover:underline' href='https://dostudio.co.in' target='_blank'>Powered by DO studio</a>
      </div>
    </main>
  )
}

export default Footer;



// <div className='bg-gradient-to-r from-bg-from to-bg-to w-full gap-y-5 xl:h-[400px] rounded-2xl xl:rounded-[20rem] p-5 xl:p-20 flex flex-col md:flex-row justify-center md:items-center'>
//           <div className='flex-1'><h1 className='text-2xl lg:text-4xl xl:text-7xl font-bold  text-center xl:text-left text-white font-futuracondensed uppercase'>for more<br className='hidden xl:block'/> details.</h1></div>
//           <div className='flex-1'>
//             <form className='w-full flex flex-col gap-y-2 text-white'>
//               <input className='w-full outline-none bg-transparent placeholder:text-white border-b border-gray-300  px-3 py-1 xl:py-2 ' type="text" placeholder='Name' />
//               <input className='w-full outline-none bg-transparent placeholder:text-white border-b border-gray-300  px-3 py-1 xl:py-2 ' type="tel" placeholder='Mobile' />
//               <input className='w-full outline-none bg-transparent placeholder:text-white border-b border-gray-300  px-3 py-1 xl:py-2 ' type="email" placeholder='Email' />
//               <button className='bg-white  w-fit mx-auto lg:mx-0 text-main px-14 py-2 rounded-full mt-3' type='submit'>Submit</button>
//             </form>
//           </div>
//       </div>