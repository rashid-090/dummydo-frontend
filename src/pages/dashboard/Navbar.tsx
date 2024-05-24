// import React,{useState, useEffect, useRef} from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import { adminSignOut } from '../../api/apiConnections/authConnections'
import { useSetRecoilState } from 'recoil'
import { adminTokenAtom } from '../../recoil/adminAtoms'

const Navbar = () => {
  const setToken = useSetRecoilState(adminTokenAtom)
  const navigate = useNavigate()

  const signOutHandler = async()=>{
    setToken("")
    localStorage.removeItem("token")
    navigate("/auth/login")
    // await adminSignOut()
  }



  return (
    <nav className='bg-gray-100 px-10 xl:px-32 w-full h-20 flex justify-between items-center'>
        <div className='flex gap-16 items-center'>
          <Link to={'/dashboard'} className='text-3xl font-bold'>Logo</Link>
          <div className="flex gap-4 items-center capitalize font-medium">
              <Link to={'/dashboard'} className={`${location.pathname === '/dashboard' ? 'underline text-main' : ''} hover:underline`}>Booking</Link>
              <Link to={'/dashboard/prices'} className={`${location.pathname === '/dashboard/prices' ? 'underline text-main' : ''} hover:underline`}>Prices</Link>
          </div>
        </div>
        <button onClick={signOutHandler} className='hover:underline text-sm font-bold'>Logout</button>
    </nav>
  )
}

export default Navbar