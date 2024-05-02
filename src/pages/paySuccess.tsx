import React from 'react'
import { paysuccess } from '../assets'
import { Link } from 'react-router-dom'

const paymentComplete = () => {
  return (
    <div className='h-screen capitalize w-full flex flex-col gap-10 justify-center items-center'>
    <img className='' src={paysuccess} alt="done" />
    <h1>payment successfully completed</h1>
    <Link className='hover:underline' to={'/'}>Go to Home</Link>
</div>
  )
}

export default paymentComplete