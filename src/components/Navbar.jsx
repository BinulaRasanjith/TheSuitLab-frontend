import { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { Button } from '@chakra-ui/react'

import TSL_LOGO from '../assets/images/TSL_LOGO.png'
import TSL_LOGO_SM from '../assets/images/TSL_LOGO_SM.png'

// eslint-disable-next-line react/prop-types
const Navbar = () => {
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

    return (
        <>
            <nav className="flex justify-between items-center bg-gray-900 fixed h-16 w-full z-20">
                <div className='h-full flex items-center pr-2'>
                    <div className={checkPage ? "flex text-3xl text-white px-2 sm:hidden" : "text-3xl text-white px-2"} onClick={() => { setOpen(!open) }}>
                        <ion-icon name={`${open ? "close" : "menu"}`} className="text-white"></ion-icon>
                    </div>
                    <div className='h-full overflow-hidden'>
                        <img className={"h-full object-cover  hidden md:block"} src={TSL_LOGO} alt="TSL_LOGO" />
                        <img className={"h-full object-cover block md:hidden"} src={TSL_LOGO_SM} alt="Only_logo" />
                    </div>
                </div>
                <div className="max-w-screen-xl flex-wrap mx-auto">

                    <ul className="hidden sm:flex text-white items-center p-1 font-medium gap-2 lg:gap-5 md:mt-0">
                        <li className={page === "" ? "inline-flex items-center justify-center p-0.5 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500" : ""}>
                            <Link to='/' className={"px-5 py-1 bg-gray-900 rounded-lg"}>Home</Link>
                        </li>
                        <li className={page === "services" ? "inline-flex items-center justify-center p-0.5 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500" : ""}>
                            <Link to='/services' className={"px-5 py-1 bg-white dark:bg-gray-900 rounded-lg"}>Services</Link>
                        </li>
                        <li className={page === "about-us" ? "inline-flex items-center justify-center p-0.5 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500" : ""}>
                            <Link to='/about-us' className={"px-5 py-1 bg-white dark:bg-gray-900 rounded-lg"}>About Us</Link>
                        </li>
                        <li className={page === "contact-us" ? "inline-flex items-center justify-center p-0.5 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500" : ""}>
                            <Link to='/contact-us' className={"px-5 py-1 bg-white dark:bg-gray-900 rounded-lg"}>Contact Us</Link>
                        </li>
                        {/* <li className={page === "" ? "inline-flex items-center justify-center p-0.5 overflow-hidden font-medium rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500" : ""}>
                            <Link to='/' className={"px-5 py-1 bg-gray-900 rounded-lg"}>Home</Link>
                        </li>
                        <li className={page === "services" ? "inline-flex items-center justify-center p-0.5 overflow-hidden font-medium rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500" : ""}>
                            <Link to='/services' className={"px-5 py-1 bg-white dark:bg-gray-900 rounded-lg"}>Services</Link>
                        </li>
                        <li className={page === "about-us" ? "inline-flex items-center justify-center p-0.5 overflow-hidden font-medium rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500" : ""}>
                            <Link to='/about-us' className={"px-5 py-1 bg-white dark:bg-gray-900 rounded-lg"}>About Us</Link>
                        </li>
                        <li className={page === "contact-us" ? "inline-flex items-center justify-center p-0.5 overflow-hidden font-medium rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500" : ""}>
                            <Link to='/contact-us' className={"px-5 py-1 bg-white dark:bg-gray-900 rounded-lg"}>Contact Us</Link>
                        </li> */}
                    </ul>
                </div>
                <div className='flex items-center mr-5'>
                    <Button
                        textColor={'white'}
                        bg={'transparent'}
                        border={'2px'}
                        _hover={{
                            bg: 'white',
                            textColor: 'black'
                        }}
                        _active={{
                            bg: 'gray',
                        }}
                        onClick={handleLoginClick}>Login</Button>
                    {/* <button className='text-white border border-white border-solid pt-1 pb-1 pl-3 pr-3 rounded'
                        onClick={handleLoginClick}>Login</button> */}
                </div>

            </nav>

            <div className={open === true ? "sm:hidden z-10 fixed top-14  left-0 shadow dark:bg-gray-700" : "hidden"}>
                <ul className="flex flex-col items-center p-2 text-sm text-gray-700 dark:text-gray-200">
                    <li className={page === "home" ? "text-white  relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 " : "text-white text-xl"}>
                        <span className={page === "home" ? "relative px-5 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-lg " : ""}>Home</span>
                    </li>
                    <li className={page === "services" ? "text-white relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500  " : "text-white text-xl"}>
                        <span className={page === "services" ? "relative px-5 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-lg " : ""}>Services</span>
                    </li>
                    <li className={page === "about-us" ? "text-white relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500  " : "text-white text-xl"}>
                        <span className={page === "about-us" ? "relative px-5 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-lg " : ""}>About Us</span>
                    </li>
                    <li className={page === "contact-us" ? "text-white relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500  " : "text-white text-xl"}>
                        <span className={page === "contact-us" ? "relative px-5 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-lg " : ""}>Contact Us</span>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Navbar
