import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
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
	const { pathname } = useLocation()
	const sidebarIsOpen = useSelector(selectSidebarIsOpen)
	const [isOpen, setIsOpen] = useState(false)

	const handleClick = (e) => {
		e.preventDefault()
		if (subItems) navigate(subItems[0].to)
		else navigate(to)
	}

	useEffect(() => {
		if (pathname.includes(to)) setIsOpen(true)
		else setIsOpen(false)
	}, [pathname, to])

	return (
		<div className={`flex flex-col transition-all ease-in-out duration-1000 mx-2 rounded-md overflow-hidden ${(isOpen ? 'bg-gray-300 ' : '')} ${sidebarIsOpen ? 'w-11/12 ' : 'w-fit '}`}>
			<NavLink className={({ isActive }) => {
				return `px-3 h-10 flex gap-2 items-center rounded-md ${isActive ? 'bg-primary text-white' : 'hover:bg-gray-200'} ${sidebarIsOpen ? 'w-full' : 'w-10 items-center justify-center'}`
			}} onClick={handleClick} to={to}>
				<span className={'text-xl'}>{icon}</span>
				{sidebarIsOpen && label}
			</NavLink>

			{isOpen && sidebarIsOpen && subItems && subItems.map((subItem, index) => (
				<SubItem key={index} {...subItem} />
			))}
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