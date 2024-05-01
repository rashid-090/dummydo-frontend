import {useState} from 'react';
import {Logo1} from '../../assets'
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { MdClose } from 'react-icons/md';
import { CgMenuRight } from 'react-icons/cg';
import Modal from '../Modal/track';

const links = [
  {link:`/`,label:`why us`},
  {link:`/`,label:`blog`},
  {link:`/`,label:`FAQ's`},
  {link:`/`,label:`contact`},
  {link:`/auth/login`,label:`login`},
]

const Header = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
      <Link to={'/'}><span className='flex items-center gap-2'><h4 className='text-main text-lg lg:text-2xl font-futuracondensed uppercase'>DummyFree</h4></span></Link>
      {/* large screen */}
      <div className='hidden lg:flex items-center gap-8 capitalize font-medium text-lg'>
        {/* {links?.map((item,i)=>(
          <Link key={i} to={item.link}>{item.label}</Link>
        ))} */}
        <button className='bg-gradient-to-r from-[#004bff] to-[#002b9c] text-white px-5 py-1 xl:px-10 xl:py-2.5 rounded-full text-base uppercase' onClick={openModal}>Track your Ticket</button>
      </div>
     <div className='flex lg:hidden items-center gap-4'>
        <button onClick={openModal} className='bg-gradient-to-r from-[#004bff] to-[#002b9c] text-white px-5 py-1.5 rounded-full text-sm font-medium uppercase ' >Track your Ticket</button>
        {/* <CgMenuRight onClick={toggleMenu} className="text-main text-3xl " /> */}
     </div>
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
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        <Modal isOpen={isModalOpen} onClose={closeModal} />
    </nav>
  )
}

export default Header