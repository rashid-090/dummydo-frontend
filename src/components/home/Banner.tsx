import React from 'react';
import {vid1,vid2} from '../../assets'

const Banner = () => {
  return (
    <>
     <div className="relative w-full overflow-hidden z-10">
            <video
                className="w-full h-full object-cover "
                autoPlay
                loop
                muted
            >
                {/* <source src={vid2} type="video/mp4" /> */}
                <source src={vid2} type="video/mp4" />
            </video>
        </div>

    </>
  )
}

export default Banner