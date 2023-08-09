import PropTypes from 'prop-types'

const CardContainer = ({ children }) => {
    return (
        <div className='grid grid-cols-[repeat(auto-fit,_minmax(180px,_240px))] gap-6 px-6 justify-center'>
            {children}
        </div>
    )
}

CardContainer.propTypes = {
    children: PropTypes.node.isRequired
}

export default CardContainer