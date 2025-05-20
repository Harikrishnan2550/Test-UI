import React from 'react'
import { assets } from '../assets/Assets'

function OneImage() {
  return (
    <div className='text-white p-10  '>
      <h1 className='text-[40px] text-center font-semibold'> Lorem Ipsum is simply dummy text of the <br /> printing and 
            typesetting industry.</h1>
            <h2 className='mt-16 text-[28px] ml-24 font-bold'>Lorem Ipsum</h2>
            <p className='mt-8 ml-24 text-[18px]'>Lorem Ipsum is simply dummy text of the printing and typesetting <br />
industry. Lorem Ipsum has been the industry's standard dummy text <br />
ever since the 1500s.</p>
<img src={assets.about1} alt="image" className='w-[1200px] h-[400px] ml-28 mt-16 rounded-lg mb-20'/>
    </div>
  )
}

export default OneImage

