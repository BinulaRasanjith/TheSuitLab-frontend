import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

import { selectSidebarIsOpen } from '../store/slices/sidebarSlice'

const ContentWrapper = ({ children, customizeLayout }) => {
    const sidebarIsOpen = useSelector(selectSidebarIsOpen) // get sidebar state from redux store

    return (
        <div className={`${customizeLayout ? 'flex' : 'block'} transition-all w-full ease-in-out duration-300 ${sidebarIsOpen ? 'ml-60' : 'ml-14'}`} id="main-left">
            {children}
        </div>
    )
}

ContentWrapper.propTypes = {
    children: PropTypes.node.isRequired,
    customizeLayout: PropTypes.bool
}

export default ContentWrapper