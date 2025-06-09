import React from 'react'

function NavigationSm() {
  return (
    <>

        <div className='w-full fixed z-99 bg-white bottom-0 shadow-2xl border-t-2 border-gray-300 px-7 py-2 pb-4'>
            <nav className=''>
                <ul className='flex justify-between items-center gap-0 uppercase'>

                    <li className='w-10 h-10 p-2'>
                        <svg className='object-contain' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50">
                            <path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z"></path>
                        </svg>
                    </li>

                    <li className='w-10 h-10 p-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50">
                            <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
                        </svg>
                    </li>

                    <li className='w-10 h-10 p-2'>
                        <img src="https://img.icons8.com/external-outline-lafs/64/external-Collection-nft-and-gamefi-outline-lafs.png" alt="external-Collection-nft-and-gamefi-outline-lafs"/>
                    </li>

                    <li className='w-10 h-10 p-2'>
                        <img src="https://img.icons8.com/ios/50/shopping-bag--v1.png" alt="shopping-bag--v1"/>
                    </li>

                    <li className='w-10 h-10 p-2'>
                        <img src="https://img.icons8.com/ios/50/shopping-bag--v1.png" alt="shopping-bag--v1"/>
                    </li>

                </ul>
            </nav>
        </div>
      
    </>
  )
}

export default NavigationSm
