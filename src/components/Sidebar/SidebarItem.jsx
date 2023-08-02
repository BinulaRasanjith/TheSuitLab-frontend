import PropTypes from 'prop-types'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'

import { selectSidebarIsOpen } from '../../store/slices/sidebarSlice'

const SubItem = ({ label, to }) => {
	const [isOpen, setIsOpen] = useState(false)
	return (
		<NavLink className={({ isActive }) => {
			setIsOpen(isActive)
			return `p-2 overflow-hidden relative pl-6 ${isActive && 'font-bold'}`
		}} to={to}>
			<span className={isOpen && 'absolute h-4/5 w-5 top-1 -translate-x-10 bg-primary rounded-md'}></span>
			{label}
		</NavLink>
	)
}

const SidebarItem = ({ label, icon, to, subItems }) => {
	const sidebarIsOpen = useSelector(selectSidebarIsOpen)
	const [isOpen, setIsOpen] = useState(false)
	const navigate = useNavigate()

	const handleClick = (e) => {
		e.preventDefault()
		if (subItems) navigate(subItems[0].to)
		else navigate(to)
	}

	return (
		<div className={'flex flex-col mx-2 rounded-md overflow-hidden ' + (isOpen ? 'bg-gray-300 ' : '') + (sidebarIsOpen ? 'w-4/5 ' : 'w-fit ')}>
			<NavLink className={({ isActive }) => {
				setIsOpen(isActive)
				return `p-3 mx- h-12 flex gap-2 items-center rounded-md ${isActive ? 'bg-primary text-white' : 'hover:bg-gray-200'} ${sidebarIsOpen ? 'w-full' : 'w-14 items-center justify-center'}`
			}} to={to} onClick={handleClick}>
				<span className={'text-lg'}>{icon}</span>
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