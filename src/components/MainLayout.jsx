import PropTypes from 'prop-types'

const MainLayout = ({ children }) => {
    return (
        <main className="flex min-h-screen w-screen pt-16 transition-all ease-in-out duration-300">
            {children}
        </main>
    )
}

MainLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default MainLayout