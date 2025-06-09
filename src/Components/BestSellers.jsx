import React, { useRef } from 'react';

function BestSellers() {
  return (

    <>
      <div className='pb-10 md:mx-15'>

        <h1 className='text-black px-7 font-extrabold text-5xl py-4 uppercase'>Best Sellers</h1>

        <div className='mx-4'>
            <div className='flex items-center gap-4 w-full overflow-x-scroll scroll-smooth no-scrollbar'>
                <div className='bg-gray-300 h-110 w-80 shrink-0'></div>
                <div className='bg-gray-300 h-110 w-80 shrink-0'></div>
                <div className='bg-gray-300 h-110 w-80 shrink-0'></div>
                <div className='bg-gray-300 h-110 w-80 shrink-0'></div>
                <div className='bg-gray-300 h-110 w-80 shrink-0'></div>
            </div>
        </div>

      </div>
    </>
  )
}

export default BestSellers
