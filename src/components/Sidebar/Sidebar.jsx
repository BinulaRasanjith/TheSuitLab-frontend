import { PropTypes } from "prop-types"
import { useDispatch, useSelector } from "react-redux"

import { selectSidebarIsOpen, toggleSidebar, } from "../../store/slices/sidebarSlice"
import SidebarItem from "./SidebarItem"

const Sidebar = ({ items }) => {
	const dispatch = useDispatch()
	const sidebarIsOpen = useSelector(selectSidebarIsOpen)

	return (
		<div className={"flex flex-col gap-2 pt-8 border-r-2 items-center transition-all ease-in-out duration-300" +
			(sidebarIsOpen ? " w-60" : "w-fit")}>
			{items && items.map((item, index) => (
				<SidebarItem key={index} {...item} />
			))}
		</div >
	)
}

// props validation
Sidebar.propTypes = {
	items: PropTypes.array.isRequired,
}

export default Sidebar