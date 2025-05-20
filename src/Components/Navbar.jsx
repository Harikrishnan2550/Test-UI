import React from 'react'

function Navbar() {
    return (
    <div className='flex text-white justify-between p-8'>
      <div>
            <h1 className='text-3xl font-bold'>LOGO</h1>
      </div>
      <div>
            <div className='flex space-x-20 mr-8'>
                <h2 className='mt-1 text-[18px]'>Home</h2>
                <h2 className='mt-1 text-[18px]'>About Us</h2>
                <h2 className='mt-1 text-[18px]'>Portfolio</h2>
                <h2 className='mt-1 text-[18px]'>News</h2>
                <button className='bg-amber-500 w-[120px] h-[40px] rounded-md '>Contact us</button>
            </div>
      </div>
    </div>
  )
}

export default Navbar


