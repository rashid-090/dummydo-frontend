import {useState} from 'react';
import {Logo1} from '../../assets'
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { MdClose } from 'react-icons/md';
import { CgMenuRight } from 'react-icons/cg';

const links = [
  {link:`/`,label:`why us`},
  {link:`/`,label:`blog`},
  {link:`/`,label:`FAQ's`},
  {link:`/`,label:`contact`},
]

const Header = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  open
  ? (document.body.style.overflow = "hidden")
  : (document.body.style.overflow = "unset");

  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.1,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.3,
        duration: 0.1,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  return (
    <nav className='w-11/12  xl:w-9/12 mx-auto flex items-center justify-between h-16 lg:h-20  xl:h-28 z-50'>
      <span className='flex items-center gap-2'><img className='h-6 w-8 lg:h-10 lg:w-12 object-contain' src={Logo1} alt="logo" /><h4 className='text-main text-lg lg:text-2xl font-semibold'>DummyFree</h4></span>
      {/* large screen */}
      <div className='hidden md:flex items-center gap-8 capitalize font-medium text-lg'>
        {links?.map((item,i)=>(
          <Link key={i} to={item.link}>{item.label}</Link>
        ))}
        <Link className='bg-main text-white px-5 py-1 xl:px-10 xl:py-2.5 rounded-full text-base capitalize' to={'/login'}>Login</Link>
      </div>
      <CgMenuRight onClick={toggleMenu} className="text-main text-3xl block md:hidden" />
      {/* small */}
      <AnimatePresence>
          {open && (
            <motion.div
              variants={menuVars}
              initial="initial"
              animate="animate"
              exit="exit"
              className="fixed left-0 top-0 w-full h-screen pt-20 origin-top bg-main text-white p-10 z-[99999]"
            >
              <motion.div
               initial={{ opacity: 0, rotate:90 }}
               animate={{ opacity: 1, rotate:0 }}
               exit={{ opacity: 0, rotate:90 }}
               transition={{ duration: 0.3 }}
              className='absolute right-3 top-4'
              >
                <MdClose
                  onClick={toggleMenu}
                  className="text-4xl"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, translateY: 40 }}
                animate={{ opacity: 1, translateY: 0 }}
                exit={{ opacity: 0, translateY: -40 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col h-full justify-center font-lora items-center gap-3 md:gap-4 "
              >
                {links.map((item, index) => {
                  return (
                    <div className="overflow-hidden">
                       <Link
                       onClick={()=> setOpen(false)}
                       key={index}
                          className='text-2xl capitalize font-medium'
                          to={item.link}
                        >
                          {item.label}
                        </Link>
                    </div>
                  );
                })}
                <Link onClick={()=> setOpen(false)} className='bg-white text-main px-12 py-2 rounded-full text-xl font-medium capitalize' to={'/login'}>Login</Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
    </nav>
  )
}

export default Header