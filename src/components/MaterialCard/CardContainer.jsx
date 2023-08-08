import PropTypes from 'prop-types'

const CardContainer = ({ children }) => {
    return (
        <div className='flex flex-wrap gap-8 px-8 items-center justify-center'>
            {children}
        </div>
    )
}

CardContainer.propTypes = {
    children: PropTypes.node.isRequired
}

export default CardContainer