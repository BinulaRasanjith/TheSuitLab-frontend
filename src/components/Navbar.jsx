import React, { useState } from 'react'
import TSL_LOGO from '../assets/images/TSL_LOGO.png'
import TSL_LOGO_SM from '../assets/images/TSL_LOGO_SM.png'

const Navbar = ({ page }) => {
    const [open, setOpen] = useState(false);

    return (
        <div className='pb-4'>
            <nav className="flex justify-between items-center bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 ">
                <div className='flex items-center pr-2'>
                    <div className='text-3xl text-white px-2' onClick={() => { setOpen(!open) }}>
                        <ion-icon name={`${open ? "close" : "menu"}`} className="text-white"></ion-icon>
                    </div>
                    <div >
                        <img className='h-14 hidden md:flex' src={TSL_LOGO} alt="TSL_LOGO" />
                        <img className="h-14 flex md:hidden" src={TSL_LOGO_SM} alt="Only_logo" />
                    </div>
                </div>
                <div className="hidden md:flex  max-w-screen-xl flex-wrap mx-auto">

                    <ul className="hidden md:flex items-center justify-center p-1 sm:p-4 md:p-0 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li className={page === "home" ? "text-white relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800" : "text-white"}>
                            <span className={page === "home" ? "relative px-5 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0" : ""}>Home</span>
                        </li>
                        <li className={page === "services" ? "text-white relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800" : "text-white"}>
                            <span className={page === "services" ? "relative px-5 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0" : ""}>Services</span>
                        </li>
                        <li className={page === "aboutus" ? "text-white relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800" : "text-white"}>
                            <span className={page === "aboutus" ? "relative px-5 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0" : ""}>About Us</span>
                        </li>
                        <li className={page === "contactus" ? "text-white relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800" : "text-white"}>
                            <span className={page === "contactus" ? "relative px-5 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0" : ""}>Contact Us</span>
                        </li>
                    </ul>
                </div>
                <div className='flex items-center mr-5'>
                    <button className='text-white border border-white border-solid pt-1 pb-1 pl-3 pr-3 rounded'>Login</button>
                </div>

            </nav>
            <nav className='md:hidden flex mx-auto  fixed w-full z-20 top-14 z-10 left-0 py-1 bg-opacity-50 backdrop-filter backdrop-blur-lg'>
                <div className="md:hidden flex max-w-screen-xl flex-wrap mx-auto">

                    <ul className="md:hidden flex  p-4 font-medium flex-wrap space-x-8">
                        <li className={page === "home" ? "text-white relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800" : "text-white"}>
                            <span className={page === "home" ? "relative px-5 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0" : ""}>Home</span>
                        </li>
                        <li className={page === "services" ? "text-white relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800" : "text-white"}>
                            <span className={page === "services" ? "relative px-5 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0" : ""}>Services</span>
                        </li>
                        <li className={page === "aboutus" ? "text-white relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800" : "text-white"}>
                            <span className={page === "aboutus" ? "relative px-5 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0" : ""}>About Us</span>
                        </li>
                        <li className={page === "contactus" ? "text-white relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800" : "text-white"}>
                            <span className={page === "contactus" ? "relative px-5 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0" : ""}>Contact Us</span>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>

    )
}

export default Navbar