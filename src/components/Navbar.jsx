import { Button } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'

import TSL_LOGO from '../assets/images/TSL_LOGO.png'
import TSL_LOGO_SM from '../assets/images/TSL_LOGO_SM.png'
import { selectSidebarIsOpen, toggleSidebar } from '../store/slices/sidebarSlice'

// eslint-disable-next-line react/prop-types
const Navbar = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const sidebarIsOpen = useSelector(selectSidebarIsOpen)

	const [isLogged, setIsLogged] = useState(false)

	useEffect(() => {
		// setIsLogged(true)
	}, [])

	// handle login click
	const handleLoginClick = () => {
		navigate('/login')
	}

	// handle signup click
	const handleSignupClick = () => {
		navigate('/signup')
	}

	const [open, setOpen] = useState(false);

	return (
		<>
			<nav className="flex justify-between items-center bg-primary fixed h-16 w-full z-40">
				<div className='flex sm:hidden'>
					<button className="flex items-center px-3 py-2 text-secondary text-2xl" onClick={() => setOpen(!open)}>
						{open ? <FaTimes /> : <FaBars />}
					</button>
				</div>
				{isLogged && <div>
					<button className="flex items-center px-3 py-2 text-secondary text-2xl" onClick={() => dispatch(toggleSidebar())}>
						<FaBars />
					</button>
				</div>}
				<div className='h-full flex items-center pr-2'>
					<div className='h-full overflow-hidden'>
						<img alt="TSL_LOGO" className={"h-full object-cover  hidden md:block"} src={TSL_LOGO} />
						<img alt="Only_logo" className={"h-full object-cover block md:hidden"} src={TSL_LOGO_SM} />
					</div>
				</div>
				<div className="max-w-screen-xl flex-wrap mx-auto">

					<ul className="hidden sm:flex text-white items-center p-1 font-medium gap-2 lg:gap-5 md:mt-0">
						<NavLink className={({ isActive }) => {
							return `px-3 py-1 ${isActive ? 'border-2 rounded-md border-cyan-500' : ''}`
						}} to='/'>Home</NavLink>
						<NavLink className={({ isActive }) => {
							return `px-3 py-1 ${isActive ? 'border-2 rounded-md border-cyan-500' : ''}`
						}} to='/services'>Services</NavLink>
						<NavLink className={({ isActive }) => {
							return `px-3 py-1 ${isActive ? 'border-2 rounded-md border-cyan-500' : ''}`
						}} to='/about-us'>About Us</NavLink>
						<NavLink className={({ isActive }) => {
							return `px-3 py-1 ${isActive ? 'border-2 rounded-md border-cyan-500' : ''}`
						}} to='/contact-us'>Contact Us</NavLink>
					</ul>
				</div>
				<div className='flex items-center gap-x-3 mr-5'>
					<Button
						_active={{
							bg: 'gray',
						}}
						_hover={{
							bg: 'white',
							border: '2px',
							borderColor: 'white',
							textColor: 'black'
						}}
						bg={'transparent'}
						border={'2px'}
						fontSize={{ base: '0.8rem', md: '1rem' }}
						onClick={handleSignupClick}
						padding={{ base: '4px', md: '0.5rem 2rem' }}
						textColor={'white'}>Sign Up</Button>

					<Button
						_active={{
							bg: 'gray',
						}}
						_hover={{
							bg: 'white',
							border: '2px',
							borderColor: 'white',
							textColor: 'black'
						}}
						bg={'transparent'}
						border={'2px'}
						fontSize={{ base: '0.8rem', md: '1rem' }}
						onClick={handleLoginClick}
						padding={{ base: '4px', md: '0.5rem 2rem' }}
						textColor={'white'}>Log In</Button>
				</div>

			</nav >

			<div className={open === true ? "sm:hidden z-20 fixed top-14  left-0 shadow dark:bg-gray-700" : "hidden"}>
				<ul className="flex flex-col items-center p-2 text-sm text-gray-700 dark:text-gray-200">
					<NavLink className={({ isActive }) => {
						return `px-3 py-1 ${isActive ? 'border-2 rounded-md border-cyan-500' : ''}`
					}} to='/'>Home</NavLink>
					<NavLink className={({ isActive }) => {
						return `px-3 py-1 ${isActive ? 'border-2 rounded-md border-cyan-500' : ''}`
					}} to='/services'>Services</NavLink>
					<NavLink className={({ isActive }) => {
						return `px-3 py-1 ${isActive ? 'border-2 rounded-md border-cyan-500' : ''}`
					}} to='/about-us'>About Us</NavLink>
					<NavLink className={({ isActive }) => {
						return `px-3 py-1 ${isActive ? 'border-2 rounded-md border-cyan-500' : ''}`
					}} to='/contact-us'>Contact Us</NavLink>
				</ul>
			</div>
		</>
	)
}

export default Navbar
