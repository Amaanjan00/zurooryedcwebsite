import { useState } from 'react'
import logo from '../assets/logo/headerlogo.png'
import logom from '../assets/logo/logom.png'
import NavigationSm from '../Components/NavigationSm.jsx'

function Header() {

    const [head, setHead] = useState(true) 

    close = () => setHead(false)

  return (
    <>
      <div>

        {
            head &&

            <div className='h-9 bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700 uppercase flex justify-center items-center w-full'>
                <div className='w-full text-center'>
                    <h1>Best in class everyday carry</h1>
                </div>

                <div onClick={close} className='absolute right-0 px-5'>
                    <img width="25" height="25" src="https://img.icons8.com/dotty/80/close-window.png" alt="close-window"/>
                </div>
            </div>
        }

        <header className='w-full md:py-4 md:px-15 flex flex-col gap-4'>

            <div className='hidden md:flex text-[14px] justify-between items-center'>

                <div className='flex items-center gap-10'>
                    <div className='w-50'>
                        <img className='object-contain brightness-0 hover:brightness-100' src={logom} alt="" />
                    </div>
                
                    <nav className=''>
                        <ul className='flex gap-4 px-4 uppercase'>
                            <li className='hover:text-yellow-600 cursor-pointer'>Bags</li>
                            <li className='hover:text-yellow-600 cursor-pointer'>Wallets</li>
                            <li className='hover:text-yellow-600 cursor-pointer'>Briefcases</li>
                            <li className='hover:text-yellow-600 cursor-pointer'>College Essentials</li>
                            <li className='hover:text-yellow-600 cursor-pointer'>Work Essentials</li>
                        </ul>
                    </nav>
                </div>

                <nav className='text-gray-600 uppercase'>
                    <ul className='flex gap-4'>
                        <li className='hover:text-yellow-600 cursor-pointer'>Contact</li>
                        <li className='hover:text-yellow-600 cursor-pointer'>Need Help?</li>
                    </ul>
                </nav>
            </div>

            <div className='w-full md:hidden flex justify-between px-4 items-center bg-gradient-to-b from-black/20 to-white via-85%'>
                <div className='w-45 md:w-200 md:h-full h-20 justify-center items-center flex'>
                    <img className='object-contain brightness-0 hover:brightness-100' src={logom} alt="" />
                </div>

                <div className='w-10 h-10 p-2'>
                   <svg className='object-contain' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50">
                        <path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z"></path>
                    </svg> 
                </div>
            </div>

        </header>

        <div className='md:hidden'>
            <NavigationSm/>
        </div>

      </div>
    </>
  )
}

export default Header
