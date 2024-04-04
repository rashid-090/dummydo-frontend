import React from 'react';
import {vid1,vid2} from '../../assets'

const Banner = () => {
  return (
    <main className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 pt-10 xl:pt-16'>
    <div className='flex flex-col gap-y-2 justify-center'>
        <h1 className='text-2xl xl:text-4xl font-bold text-main'>Lorem ipsum dolor.</h1>
        <p className='text-gray-500 text-sm xl:text-base font-medium'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, iure.</p>
    </div>
     <div className=" xl:col-span-2 relative w-full grid place-items-end overflow-hidden z-10">
            <video
                className="xl:w-[80%] h-full object-cover"
                autoPlay
                loop
                muted
            >
                <source src={vid1} type="video/mp4" />
                <source src={vid2} type="video/mp4" />
            </video>
        </div>

    </main>
  )
}

export default Banner