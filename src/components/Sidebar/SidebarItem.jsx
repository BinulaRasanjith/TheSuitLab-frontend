import { Collapse } from '@chakra-ui/react'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { BiSolidDownArrow } from 'react-icons/bi'
import { useSelector } from 'react-redux'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'

import { selectSidebarIsOpen } from '../../store/slices/sidebarSlice'

const SubItem = ({ label, to }) => {
	const { pathname } = useLocation()
	const [isOpen, setIsOpen] = useState(false)

	useEffect(() => {
		if (pathname.includes(to)) setIsOpen(true)
		else setIsOpen(false)
	}, [pathname, to])

	return (
		<NavLink className={({ isActive }) => {
			return `p-2 overflow-hidden relative pl-6 ${isActive && 'font-bold'} hover:bg-gray-200 transition-colors duration-300 ease-in-out`
		}} to={to}>
			<span className={isOpen ? 'absolute h-4/5 w-5 top-1 -translate-x-10 bg-primary rounded-md' : ''}></span>
			{label}
		</NavLink>
	)
}

const SidebarItem = ({ label, icon, to, subItems }) => {
	const navigate = useNavigate()
	const isMain = to.split('/').length === 2
	const { pathname } = useLocation()
	const sidebarIsOpen = useSelector(selectSidebarIsOpen)
	const [isActive, setIsActive] = useState(false)
	const [isOpen, setIsOpen] = useState(false)

	const handleClick = () => {
		if (isMain) navigate(to)
		if (pathname.includes(to) && subItems) setIsOpen(!isOpen)
		else if (subItems) {
			navigate(subItems[0].to)
		}
		else navigate(to)
	}

	useEffect(() => {
		if (isMain) {
			if (pathname === to) setIsActive(true)
			else setIsActive(false)
		}
		else {
			if (pathname.includes(to)) {
				setIsActive(true)
				setIsOpen(true)
			}
			else {
				setIsActive(false)
				setIsOpen(false)
			}
		}
	}, [isMain, pathname, subItems, to])

	return (
		<div className={`flex flex-col cursor-pointer transition-all ease-in-out duration-1000 mx-2 rounded-md overflow-hidden ${(isOpen ? 'bg-gray-300 ' : '')
			} ${sidebarIsOpen ? 'w-11/12 ' : 'w-fit '}`}>
			<div className={`px-3 h-10 flex gap-2 items-center rounded-md ${isActive ? 'bg-primary text-white' : 'hover:bg-gray-200'
				} ${sidebarIsOpen ? 'w-full' : 'w-10 items-center justify-center'}`}
				onClick={handleClick}>
				<span className={'text-xl'}>{icon}</span>
				{sidebarIsOpen && label}
				{sidebarIsOpen && subItems &&
					<span className={`transition-all duration-300 ml-auto text-xs ${isOpen ? 'transform rotate-180' : ''}`}>
						<BiSolidDownArrow />
					</span>}
			</div>
			<Collapse animateOpacity in={isOpen} unmountOnExit>
				<div className='flex flex-col'>
					{isOpen && sidebarIsOpen && subItems && subItems.map((subItem, index) => (
						<SubItem key={index} {...subItem} />
					))}
				</div>
			</Collapse>
		</div>
	)
}

SubItem.propTypes = {
	label: PropTypes.string.isRequired,
	icon: PropTypes.element,
	to: PropTypes.string.isRequired,
}

SidebarItem.propTypes = {
	label: PropTypes.string.isRequired,
	icon: PropTypes.element,
	to: PropTypes.string.isRequired,
	subItems: PropTypes.array,
}

export default SidebarItem