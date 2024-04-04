import React from 'react'

const Plans = () => {
  return (
    <div className='w-11/12 xl:w-9/12 mx-auto py-10 xl:py-20'>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-y-5 gap-x-5 xl:gap-x-5'>
            <div className='flex flex-col gap-4 border-2 hover:shadow-xl duration-150  p-10'>
                <h1 className='text-3xl font-bold text-main'>lorem lipsum</h1>
                <div className='space-y-1'>
                    <p className='text-lg font-medium'>Benifits</p>
                    <ul className='list-disc pl-4 text-base font-medium'>
                        <li>lorem lipsum</li>
                        <li>lorem lipsum</li>
                        <li>lorem lipsum</li>
                    </ul>
                </div>
                <button className='bg-main text-white px-10 py-3 rounded-full w-fit'>Book Now for $20</button>
            </div>
            <div className='flex flex-col gap-4 border-2 hover:shadow-xl duration-150  p-10'>
                <h1 className='text-3xl font-bold text-main'>lorem lipsum</h1>
                <div className='space-y-1'>
                    <p className='text-lg font-medium'>Benifits</p>
                    <ul className='list-disc pl-4 text-base font-medium'>
                        <li>lorem lipsum</li>
                        <li>lorem lipsum</li>
                        <li>lorem lipsum</li>
                    </ul>
                </div>
                <button className='bg-main text-white px-10 py-3 rounded-full w-fit'>Book Now for $20</button>
            </div>
            <div className='flex flex-col gap-4 border-2 hover:shadow-xl duration-150  p-10'>
                <h1 className='text-3xl font-bold text-main'>lorem lipsum</h1>
                <div className='space-y-1'>
                    <p className='text-lg font-medium'>Benifits</p>
                    <ul className='list-disc pl-4 text-base font-medium'>
                        <li>lorem lipsum</li>
                        <li>lorem lipsum</li>
                        <li>lorem lipsum</li>
                    </ul>
                </div>
                <button className='bg-main text-white px-10 py-3 rounded-full w-fit'>Book Now for $20</button>
            </div>
        </div>
    </div>
  )
}

export default Plans