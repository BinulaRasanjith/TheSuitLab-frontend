import PropTypes from "prop-types";

const Container = ({ children }) => {
	return (
		<div className="p-3 grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
			{children}
		</div>
	);
};

Container.propTypes = {
	children: PropTypes.node,
};

export default Container;
