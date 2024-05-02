import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='bg-gray-100 px-10 xl:px-32 w-full h-20 flex justify-between items-center'>
        <Link to={'/dashboard'} className='text-3xl font-bold'>Logo</Link>
        <button className='hover:underline text-sm font-bold'>Logout</button>
    </nav>
  )
}

export default Navbar