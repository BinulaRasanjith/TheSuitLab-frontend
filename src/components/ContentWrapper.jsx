import PropTypes from 'prop-types'

const ContentWrapper = ({ children }) => {
    return (
        <div className="block transition-all w-full ease-in-out duration-300" id="main-left">
            {children}
        </div>
    )
}

ContentWrapper.propTypes = {
    children: PropTypes.node.isRequired,
}

export default ContentWrapper