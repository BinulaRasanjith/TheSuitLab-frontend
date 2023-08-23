import PropTypes from "prop-types";

import Input from "../Input/Input";

const MeasurementBlock = ({ header, image }) => {
	return (
		<div id="measurement-block" className="flex flex-col w-32 items-center">
			<img src={image} className="h-10 w-10" alt="" />
			<h1>{header}</h1>
			<Input type="number" placeholder="0" className="w-full text-center" />
		</div>
	);
};

MeasurementBlock.propTypes = {
	image: PropTypes.string.isRequired,
};

export default MeasurementBlock;
