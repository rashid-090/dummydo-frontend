import React from 'react';
import {vid1,vid2} from '../../assets'
import { Typewriter } from 'react-simple-typewriter';

const Banner = () => {
  return (
    <main className='flex flex-col-reverse md:flex-row gap-0 gap-y-4  xl:gap-5'>
    <div className='flex-1 flex flex-col gap-y-2 justify-center'>
        <h1 className='text-5xl xl:text-7xl font-bold text-center md:text-left  font-futuracondensed uppercase text-black'>Get Reserved <br className='hidden xl:block'/><span className='gradient-text'><Typewriter
                        words={['in 5 Minutes','in 5 Minutes','in 5 Minutes']}
                        cursor
                        loop
                        cursorColor='transparent'
                        typeSpeed={200}
                        deleteSpeed={100}
                        delaySpeed={1000}
                        /></span></h1>
        {/* <p className='text-gray-500 text-sm xl:text-base font-medium'>Lorem ipsum dolor sit amet consectetur,<br/> adipisicing elit. Consequatur, iure.</p> */}
    </div>
     <div className="flex-1   relative w-full  grid place-items-end overflow-hidden z-10">
            <video
                className="aspect-[20/8] md:aspect-video"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src={vid1} type="video/mp4" />
                <source src={vid2} type="video/mp4" />
            </video>
        </div>

    </main>
  )
}

export default Banner