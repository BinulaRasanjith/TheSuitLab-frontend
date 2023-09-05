import PropTypes from "prop-types";

import Input from "../Input/Input";

const MeasurementBlock = ({ header, description, image, value, selectedUnit }) => {
	return (
		<div
			id="measurement-block"
			className="flex flex-col w-96  items-center border-2 p-5 rounded-lg"
		>
			<img src={image} className="object-cover w-auto h-60" alt={header} />
			<h1 className="p-3 font-bold text-2xl">{header}</h1>
			<p className="p-3">{description}</p>
			<Input
				type="number"
				placeholder={selectedUnit === "cm" ? "cm" : "inch"}
				className="w-full text-center m-4"
				value={value}
			/>
		</div>
	);
};

MeasurementBlock.propTypes = {
	header: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	value: PropTypes.number.isRequired,
	selectedUnit: PropTypes.string.isRequired,
};
export default MeasurementBlock;
