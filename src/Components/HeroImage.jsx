import React from 'react'

function HeroImage() {
  return (
    <>
      <div className='w-full h-140 mb-10 relative'>
        <div className='w-full h-full absolute top-0 bg-gradient-to-b from-white/20 to-black/50'></div>
        <img className='object-cover w-full h-full' src="https://picsum.photos/900/600?grayscale" alt="" />
        <div className='absolute bottom-0 text-white md:px-20 md:py-10 p-8 w-100 md:w-200 flex flex-col gap-4'>
          <h1 className='text-5xl font-[Inter] font-extrabold'>Best Sellers</h1>
          <p>fgsdagsdgszd Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus, dolorem fuga? Similique sequi modi, illum minus, deserunt quasi quia mollitia voluptates eligendi id rem sit ea! Magnam beatae ipsa sed?</p>
        </div>
      </div>
    </>
  )
}

export default HeroImage
