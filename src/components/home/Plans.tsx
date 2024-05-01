import React from 'react';
import { Typewriter } from 'react-simple-typewriter'

const Plans = () => {
  return (
    <div className='pr-44 py-10 xl:py-20'>
        <div className='grid grid-cols-3 pb-10'>
          <div className='col-span-2'>

          </div>
          <h1 className='text-2xl lg:text-4xl xl:text-7xl font-bold  text-right text-black font-futuracondensed uppercase'>Book <span className='gradient-text'>now.</span></h1>
        </div>
        <div className='grid grid-cols-3 gap-x-10'>
            <div className='bg-gradient-to-r from-[#004bff] to-[#002b9c] rounded-r-[15rem]'>

            </div>
            <div className='md:col-span-2 py-10 grid grid-cols-2 md:grid-cols-2 gap-y-5 gap-x-5'>
                <div className='flex flex-col justify-between gap-4 border-2 rounded-3xl hover:shadow-2xl duration-300  p-10'>
                    <div className='space-y-1'>
                        <h1 className='text-3xl font-bold text-black'>I want to reserve</h1>
                        {/* <h1 className='text-3xl font-bold gradient-text font-futuracondensed uppercase'>Flight only</h1> */}
                        <h1 className='text-3xl font-bold gradient-text font-futuracondensed uppercase'><Typewriter
                        words={['flight only','flight only','flight only']}
                        cursor
                        loop
                        cursorColor='transparent'
                        typeSpeed={100}
                        deleteSpeed={100}
                        delaySpeed={1000}
                        />
                        </h1>
                        <h1 className='text-base xl:text-lg font-bold text-black'>* Ideal for Immigration Purposes</h1>
                    </div>
                    <div className='space-y-1 mb-5'>
                        <p className='text-base font-medium uppercase'>Benefits</p>
                        <ul className='list-disc pl-4 text-base font-medium'>
                            <li>Up to 2 Passengers/Ticket</li>
                            <li>One-way/Round trip</li>
                        </ul>
                    </div>
                    <button className='bg-gradient-to-r from-[#004bff] to-[#002b9c] text-white px-10 py-3 rounded-full w-fit'>Book Now for $20</button>
                </div>
                <div className='flex flex-col justify-between gap-4 border-2 rounded-3xl hover:shadow-2xl duration-300  p-10'>
                    <div className='space-y-1'>
                            <h1 className='text-3xl font-bold text-black'>I want to reserve</h1>
                            {/* <h1 className='text-3xl font-bold gradient-text font-futuracondensed uppercase'>Flight and Hotel</h1> */}
                            <h1 className='text-3xl font-bold gradient-text font-futuracondensed uppercase'><Typewriter
                        words={['Flight and Hotel','Flight and Hotel','Flight and Hotel']}
                        cursor
                        loop
                        cursorColor='transparent'
                        typeSpeed={100}
                        deleteSpeed={100}
                        delaySpeed={1000}
                        />
                        </h1>
                            <h1 className='text-base xl:text-lg font-bold text-black'>* Ideal for Immigration Purposes</h1>
                    </div>
                    <div className='space-y-1 mb-5'>
                            <p className='text-base font-medium uppercase'>Benefits</p>
                            <ul className='list-disc pl-4 text-base font-medium'>
                                <li>Up to 2 Passengers/Ticket</li>
                                <li>One-way/Round trip</li>
                                <li>Legit Hotel Reservation</li>
                            </ul>
                    </div>
                    <button className='bg-gradient-to-r from-[#004bff] to-[#002b9c] text-white px-10 py-3 rounded-full w-fit'>Book Now for $25</button>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Plans