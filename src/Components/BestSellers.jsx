import React, { useRef } from 'react';

function BestSellers() {

  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 200; // pixels to scroll
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (

    <>
      <div className='pb-10 md:mx-15'>

        <h1 className='text-black px-7 font-extrabold text-5xl py-4 uppercase'>Best Sellers</h1>

        <div className='mx-4'>
            <div ref={scrollRef} className='flex items-center gap-4 w-full overflow-x-scroll scroll-smooth no-scrollbar'>
                <div className='bg-gray-300 h-110 w-80 shrink-0'></div>
                <div className='bg-gray-300 h-110 w-80 shrink-0'></div>
                <div className='bg-gray-300 h-110 w-80 shrink-0'></div>
                <div className='bg-gray-300 h-110 w-80 shrink-0'></div>
                <div className='bg-gray-300 h-110 w-80 shrink-0'></div>
            </div>
        </div>

        <div className="flex justify-end mx-4 mt-2">

          <div className="bg-black/10 h-10 w-10 flex items-center justify-center rounded-full m-2">
            <button onClick={() => scroll('left')}>
              <img width="50" height="50" src="https://img.icons8.com/ios/50/left--v1.png" alt="left--v1"/>
            </button>
          </div>

          <div className="bg-black/10 h-10 w-10 flex items-center justify-center rounded-full m-2">
            <button onClick={() => scroll('right')}>
              <img width="50" height="50" src="https://img.icons8.com/ios/50/right--v1.png" alt="right--v1"/>
            </button>
          </div>

        </div>

      </div>
    </>
  )
}

export default BestSellers
