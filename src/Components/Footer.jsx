import logo from '../assets/logo/footerlogo.png'

function Footer() {
  return (
    <>
    <footer className='z-100 mb-15 md:mb-0 w-full md:bottom-0'>

        <div className="flex flex-col md:flex-row md:justify-between justify-center items-center gap-25 px-10 lg:px-20 py-15 bg-[#222222] text-gray-400">
            <div className='flex md:flex-row flex-col gap-25'>
                <div className="gap-3 flex md:items-start items-center flex-col">
                    <h1 className='text-white font-bold'>HELP</h1>
                    <ul className='items-center md:items-start flex flex-col'>
                        <li><a href="">Customer Care</a></li>
                        <li><a href="">Shipping & Returns</a></li>
                        <li><a href="">Terms & Conditions</a></li>
                        <li><a href="">Privacy Poilicy</a></li>
                        <li><a href="">Contact Us</a></li>
                    </ul>
                </div>
                <div className="gap-3 flex md:items-start items-center flex-col">
                    <h1 className='text-white font-bold'>SHOP PRODUCTS</h1>
                    <ul className='items-center md:items-start flex flex-col'>
                        <li><a href="">Backpacks</a></li>
                        <li><a href="">Slings</a></li>
                        <li><a href="">Totes</a></li>
                        <li><a href="">Briefcase</a></li>
                        <li><a href="">Wallets</a></li>
                        <li><a href="">Key Rings</a></li>
                        <li><a href="">Phone Cases</a></li>
                    </ul>
                </div>
                <div className="gap-3 flex md:items-start items-center flex-col">
                    <h1 className='text-white font-bold'>ABOUT</h1>
                    <ul className='items-center md:items-start flex flex-col'>
                        <li><a href="">Our Story</a></li>
                        <li><a href="">Our Materials</a></li>
                        <li><a href="">Fair Trade Certification</a></li>
                        <li><a href="">Corporate Gifting</a></li>
                        <li><a href="">For Businesses</a></li>
                    </ul>
                </div>
            </div>

            <div className='w-30 md:mr-20'>
                <img src={logo} className='object-contain brightness-1 invert-100' alt="" />
            </div>
        </div>

        <div className="flex items-center lg:justify-between lg:flex-row flex-col gap-5 mt-[1px] py-5 lg:px-30 bg-[#222222] text-gray-400">
            <div className="flex lg:flex-row flex-col items-center gap-1">
                <p>Got a question? Contact: </p>
                <a className="text-yellow-600" href="">contactzuroory@gmail.com</a>
            </div>

            <p>All rights reserved &copy; 2025 Zuroory </p>
        </div>
    </footer>   
    </>
  )
}

export default Footer
