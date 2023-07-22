import React, { useState } from 'react'
import TSL_LOGO from '../assets/images/TSL_LOGO.png'
import TSL_LOGO_SM from '../assets/images/TSL_LOGO_SM.png'

const Navbar = ({ page }) => {
    const [open, setOpen] = useState(false);

    return (
        <div className='pb-4'>
            <nav className="flex justify-between items-center bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 ">
                <div className='flex items-center pr-2'>
                    <div className={page === "home" || "services" || "aboutus" || "contactus" || "landingpage" ? "flex text-3xl text-white px-2 sm:hidden" : "text-3xl text-white px-2"} onClick={() => { setOpen(!open) }}>
                        <ion-icon name={`${open ? "close" : "menu"}`} className="text-white"></ion-icon>
                    </div>
                    <div >
                        <img className={page === "home" || "services" || "aboutus" || "contactus" || "landingpage" ? "pl-2 h-14 hidden md:flex" : "h-14 hidden md:flex"} src={TSL_LOGO} alt="TSL_LOGO" />
                        <img className={page === "home" || "services" || "aboutus" || "contactus" || "landingpage" ? "pl-2 h-14 flex md:hidden" : "h-14 md:hidden flex"} src={TSL_LOGO_SM} alt="Only_logo" />
                    </div>
                </div>
                <div className="max-w-screen-xl flex-wrap mx-auto">

                    <ul className="hidden sm:flex items-center p-1 font-medium  space-x-8 md:mt-0">
                        <li className={page === "home" ? "text-white relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500  " : "text-white"}>
                            <span className={page === "home" ? "relative px-5 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-lg " : ""}>Home</span>
                        </li>
                        <li className={page === "services" ? "text-white relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500  " : "text-white"}>
                            <span className={page === "services" ? "relative px-5 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-lg " : ""}>Services</span>
                        </li>
                        <li className={page === "aboutus" ? "text-white relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500  " : "text-white"}>
                            <span className={page === "aboutus" ? "relative px-5 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-lg " : ""}>About Us</span>
                        </li>
                        <li className={page === "contactus" ? "text-white relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500  " : "text-white"}>
                            <span className={page === "contactus" ? "relative px-5 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-lg " : ""}>Contact Us</span>
                        </li>
                    </ul>
                </div>
                <div className='flex items-center mr-5'>
                    <button className='text-white border border-white border-solid pt-1 pb-1 pl-3 pr-3 rounded'>Login</button>
                </div>

            </nav>
            {/* <nav className='md:hidden flex mx-auto fixed w-full z-20 top-14 left-0 bg-opacity-50 backdrop-filter backdrop-blur-lg'>
                <div className="md:hidden flex max-w-screen-xl flex-wrap mx-auto">

                    <ul className="md:hidden sm:flex grid grid-cols-2 p-4 font-medium sm:space-x-8">
                        
                            <li className={page === "home" ? "text-white relative inline-flex items-center justify-center p-0.5 mb-0 mr-0 sm:mb-2 sm:mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500" : "text-white"}>
                                <span className={page === "home" ? "relative px-5 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md " : ""}>Home</span>
                            </li>
                            <li className={page === "services" ? "text-white relative inline-flex items-center justify-center p-0.5 mb-0 mr-0 sm:mb-2 sm:mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500" : "text-white"}>
                                <span className={page === "services" ? "relative px-5 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md " : ""}>Services</span>
                            </li>
                            <li className={page === "aboutus" ? "text-white relative inline-flex items-center justify-center p-0.5 mb-0 mr-0 sm:mb-2 sm:mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500" : "text-white"}>
                                <span className={page === "aboutus" ? "relative px-5 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md " : ""}>About Us</span>
                            </li>
                            <li className={page === "contactus" ? "text-white relative inline-flex items-center justify-center p-0.5 mb-0 mr-0 sm:mb-2 sm:mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500" : "text-white"}>
                                <span className={page === "contactus" ? "relative px-5 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md " : ""}>Contact Us</span>
                            </li>

                    </ul>
                </div>
            </nav> */}

            <div className={open === true ? "sm:hidden z-10 fixed top-14  left-0 shadow dark:bg-gray-700" : "hidden"}>
                <ul className="flex flex-col items-center p-2 text-sm text-gray-700 dark:text-gray-200">
                    <li className={page === "home" ? "text-white  relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 " : "text-white text-xl"}>
                        <span className={page === "home" ? "relative px-5 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-lg " : ""}>Home</span>
                    </li>
                    <li className={page === "services" ? "text-white relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500  " : "text-white text-xl"}>
                        <span className={page === "services" ? "relative px-5 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-lg " : ""}>Services</span>
                    </li>
                    <li className={page === "aboutus" ? "text-white relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500  " : "text-white text-xl"}>
                        <span className={page === "aboutus" ? "relative px-5 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-lg " : ""}>About Us</span>
                    </li>
                    <li className={page === "contactus" ? "text-white relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500  " : "text-white text-xl"}>
                        <span className={page === "contactus" ? "relative px-5 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-lg " : ""}>Contact Us</span>
                    </li>
                </ul>
            </div>
        </div>

    )
}

export default Navbar