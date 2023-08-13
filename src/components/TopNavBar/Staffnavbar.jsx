/* eslint-disable perfectionist/sort-jsx-props */
// import { Button } from '@chakra-ui/react'
import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import TSL_LOGO from '../../assets/images/TSL_LOGO.png'
import TSL_LOGO_SM from '../../assets/images/TSL_LOGO_SM.png'
import AVATAR from '../../assets/images/avatar.png'

// eslint-disable-next-line react/prop-types
const Staffnavbar = () => {
    const location = useLocation()
    const navigate = useNavigate()

    // handle login click
    const handleLoginClick = () => {
        navigate('/login')
    }


    const page = location.pathname.slice(1)
    let checkPage = false;
    switch (page) {
        case "":
        case "services":
        case "about-us":
        case "contact-us":
            checkPage = true;
            break;
        default:
            checkPage = false;
    }

    const [open, setOpen] = useState(false);
    const [isUserDropdownOpen, setUserDropdownOpen] = useState(false);


    return (
        <>
            <nav className="flex justify-between items-center bg-gray-900 fixed h-16 w-full z-20">
                <div className='h-full flex items-center pr-2'>
                    <div className={checkPage ? "flex text-3xl text-white px-2 sm:hidden" : "text-3xl text-white px-2"} onClick={() => { setOpen(!open) }}>
                        <ion-icon className="text-white" name={`${open ? "close" : "menu"}`}></ion-icon>
                    </div>
                    <div className='h-14 overflow-hidden'>
                        <img alt="TSL_LOGO" className={"h-full object-cover  hidden md:block"} src={TSL_LOGO} />
                        <img alt="Only_logo" className={"h-full object-cover block md:hidden"} src={TSL_LOGO_SM} />
                    </div>
                </div>

                <div className='flex items-center mr-5 gap-3'>
                    <div className='flex flex-col'>
                        <div className='text-white text-end'>Bhanuka Rajakaruna</div>
                        <div className='text-gray-400 text-xs text-end'>Operation Assistant</div>
                    </div>
                    <img id="avatarButton" type="button" onClick={() => setUserDropdownOpen(!isUserDropdownOpen)} data-dropdown-toggle="userDropdown" data-dropdown-placement="bottom-start" className="w-10 h-10 rounded-full cursor-pointer" src={AVATAR} alt="User dropdown" />

                    {/*  Dropdown menu  */}
                    <div id="userDropdown" className="z-10 ${isUserDropdownOpen ? 'block' : 'hidden'} hidden bg-white divide-y divide-gray-300 rounded-lg shadow w-44 ">
                        <div className="px-4 py-3 text-sm text-gray-900">
                            <div>Bhanuka Rajakaruna</div>
                            <div className="font-medium truncate">bhanukayar@gmail.com</div>
                        </div>
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="avatarButton">
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">Dashboard</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">Settings</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">Earnings</a>
                            </li>
                        </ul>
                        <div className="py-1">
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 ">Sign out</a>
                        </div>
                    </div>
                    {/* <Button
                        // _active={{
                        //     bg: 'gray',
                        // }}
                        _hover={{
                            bg: 'white',
                            textColor: 'black'
                        }}
                        bg={'transparent'}
                        border={'1px'}
                        width={'5.5rem'}
                        height={'2rem'}
                        onClick={handleLoginClick}
                        textColor={'white'}>Log Out</Button> */}
                </div>

            </nav>

            {/* <div className={open === true ? "sm:hidden z-10 fixed top-14  left-0 shadow dark:bg-gray-700" : "hidden"}>
                <ul className="flex flex-col items-center p-2 text-sm text-gray-700 dark:text-gray-200">
                    <li className={page === "home" ? "text-white  relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xl font-medium rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 " : "text-white text-xl"}>
                        <span className={page === "home" ? "relative px-5 py-1 transition-all ease-in duration-75 bg-white rounded-lg " : ""}>Home</span>
                    </li>
                    <li className={page === "services" ? "text-white relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xl font-medium rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500  " : "text-white text-xl"}>
                        <span className={page === "services" ? "relative px-5 py-1 transition-all ease-in duration-75 bg-white rounded-lg " : ""}>Services</span>
                    </li>
                    <li className={page === "about-us" ? "text-white relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xl font-medium rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500  " : "text-white text-xl"}>
                        <span className={page === "about-us" ? "relative px-5 py-1 transition-all ease-in duration-75 bg-white rounded-lg " : ""}>About Us</span>
                    </li>
                    <li className={page === "contact-us" ? "text-white relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xl font-medium rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500  " : "text-white text-xl"}>
                        <span className={page === "contact-us" ? "relative px-5 py-1 transition-all ease-in duration-75 bg-white rounded-lg " : ""}>Contact Us</span>
                    </li>
                </ul>
            </div> */}
        </>
    )
}

export default Staffnavbar
