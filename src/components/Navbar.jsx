import React, { useState } from 'react'
import TSL_LOGO from '../assets/images/TSL_LOGO.png'
import TSL_LOGO_SM from '../assets/images/TSL_LOGO_SM.png'

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (

        <nav class="flex bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
            <div className='flex items-center pr-2'>
                <div className='text-3xl text-white px-2' onClick={() => { setOpen(!open) }}>
                    <ion-icon name={`${open ? "close" : "menu"}`} className="text-white"></ion-icon>
                </div>
                <div >
                    <img className='h-12 hidden md:flex' src={TSL_LOGO} alt="TSL_LOGO" />
                    <img className="h-12 flex md:hidden" src={TSL_LOGO_SM} alt="Only_logo" />
                </div>
            </div>
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4">
            
                    <ul class="flex flex-col p-4 md:p-0  font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li className='text-white'>
                            Home
                        </li>
                        <li className='text-white'>
                            Contact
                        </li>
                        <li className='text-white'>
                            About Us
                        </li>
                        <li className='text-white'>
                            Telephone
                        </li>
                    </ul>
             </div>
            <div className='flex items-center mr-5 md:mr-10'>
                <button className='text-white border border-white border-solid pt-1 pb-1 pl-3 pr-3 rounded'>Login</button>
            </div>
        </nav>

    )
}

export default Navbar