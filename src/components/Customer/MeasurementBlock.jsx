import PropTypes from "prop-types";

import Input from "../Input/Input";

const MeasurementBlock = ({
	header,
	description,
	image,
	value,
	selectedUnit,
	unchangeable,
	onChange,
	name,
}) => {
	return (
		<div
			id="measurement-block"
			className="flex flex-col w-96  items-center border-2 p-5 rounded-lg"
		>
			<img src={image} className="object-cover w-auto h-60" alt={header} />
			<h1 className="p-3 font-bold text-2xl">{header}</h1>
			{!unchangeable && <p className="p-3">{description}</p>}
			{unchangeable ? null : (
				<Input
					type="number"
					placeholder={selectedUnit === "cm" ? "cm" : "inch"}
					className="w-full text-center m-4"
					value={value}
					name={name}
					onChange={onChange}
				/>
			)}
			{unchangeable && (
				<p className="p-3 text-secondary font-bold text-2xl bg-primary rounded-lg">
					{value} {selectedUnit}
				</p>
			)}
		</div>
	);
};

MeasurementBlock.propTypes = {
	header: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	value: PropTypes.number.isRequired,
	selectedUnit: PropTypes.string.isRequired,
	unchangeable: PropTypes.bool,
	onChange: PropTypes.func,
	name: PropTypes.string,
};
export default MeasurementBlock;
