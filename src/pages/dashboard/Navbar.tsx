import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-gray-100 px-10 xl:px-32 w-full h-20 flex justify-between items-center'>
        <h1 className='text-3xl font-bold'>Logo</h1>
        <button className='hover:underline text-sm font-bold'>Logout</button>
    </nav>
  )
}

export default Navbar