import { useState } from 'react'
import logo from '../assets/logo/headerlogo.png'
import logom from '../assets/logo/logom.png'

function Header() {

    const [head, setHead] = useState(true) 
    close = () => setHead(false)

    const [nav, setNav] = useState(false)
    
  return (
    <>
      <div>

        {
            head &&

            <div className='h-9 bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700 uppercase flex justify-center items-center w-full'>
                <div className='w-full text-center font-extrabold text-white'>
                    <h1>Best in class everyday carry</h1>
                </div>

                <div onClick={close} className='absolute right-0 px-5'>
                    <img width="30" height="30" src="https://img.icons8.com/ios/50/close-window--v1.png" alt="close-window--v1"/>
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

            <div className='w-full md:hidden flex justify-between px-4 items-center'>
                <div className='w-45 md:w-200 md:h-full h-20 justify-center items-center flex'>
                    <img className='object-contain brightness-0 hover:brightness-100' src={logom} alt="" />
                </div>

                <div onClick={() => setNav(true)} className='w-10 h-10 p-2'>
                   <svg className='object-contain' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50">
                        <path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z"></path>
                    </svg> 
                </div>
            </div>

        </header>

        {
            nav &&

            <div className='bg-white h-full w-full fixed top-0 z-99999 px-10'>

                <div onClick={() => setNav(false)} className=' flex justify-end pt-5'>
                    <img width="30" height="30" src="https://img.icons8.com/ios/50/close-window--v1.png" alt="close-window--v1"/>
                </div>

                <div className='flex justify-center items-center pb-8'>
                    <div className='w-50'>
                        <img src={logo} alt="" />
                    </div>
                </div>

                <div className='flex flex-col h-[80vh] justify-between'>
                    <div className='bg-white rounded-2xl'>
                        <ul className='text-[20px]'>
                            <li className='py-2 border-gray-200 border-b-2'>Home</li>
                            <li className='py-2 border-gray-200 border-b-2'>Bags</li>
                            <li className='py-2 border-gray-200 border-b-2'>Wallets</li>
                            <li className='py-2 border-gray-200 border-b-2'>Slings</li>
                            <li className='py-2 border-gray-200 border-b-2'>Briefcases</li>
                            <li className='py-2 border-gray-200 border-b-2'>About Us</li>
                            <li className='py-2 border-gray-200 border-b-2'>Contact</li>
                        </ul>
                    </div>

                    <div className='flex flex-col'>
                        <h1>Zuroory | Everyday Carry</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur deleniti perferendis ut praesentium possimus at nemo? Odio, eaque molestiae architecto velit molestias corrupti nam omnis enim impedit facere iusto. Nihil?</p>
                    </div>
                </div>
            </div>
        }

      </div>
    </>
  )
}

export default Header
