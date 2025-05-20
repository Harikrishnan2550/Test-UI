import React from 'react'

function Contact() {
  return (
    <div className='p-20 ml-8 text-white'>
      <h1 className='text-[40px] font-bold'>
            Lorem Ipsum
      </h1>
      <p className='text-[16px] font-semibold mt-8'>Lorem Ipsum is simply dummy text of the printing and typesetting <br />{" "}
        industry.</p>

        <div className='w-[95%] h-[180px] bg-[#241a1a] mt-20 rounded-2xl flex justify-between'>
                <div className=''>
                        <h1 className='text-[30px] mt-6 font-bold ml-16'>Stay in the loop</h1>
                        <p className='ml-16 text-[18px] mt-4 font-semibold'> Subscribe to receive the latest news and updates about TDA. <br />
 We promise not to spam you! </p>
                </div>
                <div className='bg-white w-[450px] h-[50px] mr-16 mt-[70px] rounded-xl flex justify-around'>
                    <p className='text-gray-400 text-center mt-3 ml-4'>Enter email address</p>
                    <button className='bg-amber-600 w-[120px] h-[40px] rounded-md mt-1.5 ml-32'>
                        Continue
                    </button>
                </div>
        </div>
    </div>
  )
}

export default Contact


