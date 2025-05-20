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



// import React, { useState } from 'react';
// import { Menu, X } from 'lucide-react';

// function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <div className='flex text-white justify-between items-center p-4 md:p-8'>
//       <div>
//         <h1 className='text-2xl md:text-3xl font-bold'>LOGO</h1>
//       </div>
      
//       {/* Desktop Navigation */}
//       <div className='hidden md:block'>
//         <div className='flex space-x-12 lg:space-x-20'>
//           <h2 className='mt-1 text-[16px] lg:text-[18px]'>Home</h2>
//           <h2 className='mt-1 text-[16px] lg:text-[18px]'>About Us</h2>
//           <h2 className='mt-1 text-[16px] lg:text-[18px]'>Portfolio</h2>
//           <h2 className='mt-1 text-[16px] lg:text-[18px]'>News</h2>
//           <button className='bg-amber-500 w-[110px] lg:w-[120px] h-[38px] lg:h-[40px] rounded-md'>
//             Contact us
//           </button>
//         </div>
//       </div>
      
//       {/* Mobile Menu Button */}
//       <button 
//         className='md:hidden text-white focus:outline-none'
//         onClick={() => setMenuOpen(!menuOpen)}
//       >
//         {menuOpen ? <X size={28} /> : <Menu size={28} />}
//       </button>
      
//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className='md:hidden absolute top-20 left-0 right-0 bg-black z-50 p-6'>
//           <div className='flex flex-col space-y-6 items-center'>
//             <h2 className='text-[18px]'>Home</h2>
//             <h2 className='text-[18px]'>About Us</h2>
//             <h2 className='text-[18px]'>Portfolio</h2>
//             <h2 className='text-[18px]'>News</h2>
//             <button className='bg-amber-500 w-[120px] h-[40px] rounded-md'>
//               Contact us
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Navbar;