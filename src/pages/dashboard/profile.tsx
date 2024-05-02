import React from 'react'
import Navbar from './Navbar'

const UserProfile = () => {
  return (
    <main>
        {/* Hader */}
           <Navbar/>
        {/* Hader */}
        <div className='py-10 w-10/12 mx-auto capitalize'>
          <div className='space-y-2 text-lg'>
            <h2><span className='font-bold underline'>name</span> : john mathew</h2>
            <h2><span className='font-bold underline'>mobile</span> : 9998877456</h2>
            <h2><span className='font-bold underline'>address</span> : Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Est quod distinctio quaerat dicta natus, minima impedit<br/> recusandae corrupti repudiandae non.</h2>
            <h2><span className='font-bold underline'>location</span> : Kochi</h2>
          </div>
        </div>
    </main>
  )
}

export default UserProfile