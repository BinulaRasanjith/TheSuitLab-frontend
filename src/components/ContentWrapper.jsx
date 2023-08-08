import { ReactPropTypes } from 'react'

const ContentWrapper = ({ children }) => {
    return (
        <div className="block transition-all w-full ease-in-out duration-300" id="main-left">
            {children}
        </div>
    )
}

ContentWrapper.propTypes = {
    children: ReactPropTypes.node.isRequired,
}

export default ContentWrapper