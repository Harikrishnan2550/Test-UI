import React from 'react'
import { trending } from '../assets/Trending'
import { IoIosFlame } from "react-icons/io";

function Trending() {
  return (
    <div className='p-[100px] text-white '>
      <div className='flex justify-between'>
        <h1 className='text-[40px] font-bold'>Currently Trending Games</h1>
        <button className='w-[120px] h-[50px] bg-[#413c3c] rounded-md font-semibold text-[20px]'>SEE ALL</button>
      </div>
      <div className='flex mt-20 space-x-16'>
        {trending.map((value)=>(
            <div className=''>
                <div className=''>
                    <img src={value.image} alt="image" className='w-[300px] h-[300px] rounded-2xl object-cover' />
                </div>
                <div className='flex space-x-2 mt-5 ml-8'>
                    <IoIosFlame className='mt-1 text-[30px]'/>
                    <p className='text-[25px] font-semibold'>{value.description}</p>
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Trending


