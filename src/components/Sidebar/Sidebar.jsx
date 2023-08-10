import { PropTypes } from "prop-types"
import { useSelector } from "react-redux"

import { selectSidebarIsOpen } from "../../store/slices/sidebarSlice"
import SidebarItem from "./SidebarItem"

const Sidebar = ({ items }) => {
	const sidebarIsOpen = useSelector(selectSidebarIsOpen) // get sidebar state from redux store

	return (
		<div className={`flex flex-col gap-2 pt-3 border-r-2 transition-all ease-in-out duration-300 ${sidebarIsOpen ? "w-60" : "w-14"}`}>
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