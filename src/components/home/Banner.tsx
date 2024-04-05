import React from 'react';
import {vid1,vid2} from '../../assets'

const Banner = () => {
  return (
    <main className='grid grid-cols-1 md:grid-cols-2 gap-0  xl:gap-5 pt-5 xl:pt-0'>
    <div className='flex flex-col gap-y-2 justify-center'>
        <h1 className='text-2xl xl:text-4xl font-bold text-main'>Lorem ipsum dolor.</h1>
        <p className='text-gray-500 text-sm xl:text-base font-medium'>Lorem ipsum dolor sit amet consectetur,<br/> adipisicing elit. Consequatur, iure.</p>
    </div>
     <div className=" relative w-full  grid place-items-end overflow-hidden z-10">
            <video
                className="aspect-video"
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