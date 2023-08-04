import { Button } from '@chakra-ui/react'
import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

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
            <nav className="flex justify-between items-center bg-gray-900 fixed h-16 w-full z-40">
                <div className='h-full flex items-center pr-2'>
                    <div className={checkPage ? "flex text-3xl text-white px-2 sm:hidden" : "text-3xl text-white px-2"} onClick={() => { setOpen(!open) }}>
                        <ion-icon className="text-white" name={`${open ? "close" : "menu"}`}></ion-icon>
                    </div>
                    <div className='h-full overflow-hidden'>
                        <img alt="TSL_LOGO" className={"h-full object-cover  hidden md:block"} src={TSL_LOGO} />
                        <img alt="Only_logo" className={"h-full object-cover block md:hidden"} src={TSL_LOGO_SM} />
                    </div>
                </div>
                <div className="max-w-screen-xl flex-wrap mx-auto">

                    <ul className="hidden sm:flex text-white items-center p-1 font-medium gap-2 lg:gap-5 md:mt-0">
                        <li className={page === "" ? "inline-flex items-center justify-center p-0.5 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500" : ""}>
                            <Link className={"px-5 py-1 bg-gray-900 rounded-lg"} to='/'>Home</Link>
                        </li>
                        <li className={page === "services" ? "inline-flex items-center justify-center p-0.5 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500" : ""}>
                            <Link className={"px-5 py-1 bg-white dark:bg-gray-900 rounded-lg"} to='/services'>Services</Link>
                        </li>
                        <li className={page === "about-us" ? "inline-flex items-center justify-center p-0.5 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500" : ""}>
                            <Link className={"px-5 py-1 bg-white dark:bg-gray-900 rounded-lg"} to='/about-us'>About Us</Link>
                        </li>
                        <li className={page === "contact-us" ? "inline-flex items-center justify-center p-0.5 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500" : ""}>
                            <Link className={"px-5 py-1 bg-white dark:bg-gray-900 rounded-lg"} to='/contact-us'>Contact Us</Link>
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
                <div className='flex items-center gap-x-3 mr-5'>
                    <Button
                        _active={{
                            bg: 'gray',
                        }}
                        _hover={{
                            bg: 'white',
                            textColor: 'black'
                        }}
                        bg={'transparent'}
                        border={'2px'}
                        onClick={handleLoginClick}
                        textColor={'white'}>Sign Up</Button>

                    <Button
                        _active={{
                            bg: 'gray',
                        }}
                        _hover={{
                            bg: 'white',
                            textColor: 'black'
                        }}
                        bg={'transparent'}
                        border={'2px'}
                        onClick={handleLoginClick}
                        textColor={'white'}>Login</Button>
                </div>

            </nav>

            <div className={open === true ? "sm:hidden z-10 fixed top-14  left-0 shadow dark:bg-gray-700" : "hidden"}>
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
            </div>
        </>
    )
}

export default Navbar
