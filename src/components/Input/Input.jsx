import PropTypes from "prop-types";
import { useState } from "react";

function Input({
	type,
	placeholder,
	hint,
	id,
	name,
	value,
	maxLength,
	onChange,
	onFocus,
	onBlur,
	error,
	className,
	max,
	min,
}) {
	const today = new Date().toISOString().split("T")[0];
	const [hintReal, setHintReal] = useState("");

	const onCustomFocus = (e) => {
		setHintReal(hint);
		if (onFocus) onFocus(e);
	};

	const onCustomBlur = (e) => {
		setHintReal("");
		if (onBlur) onBlur(e);
	};
	return (
		<div className={"relative z-0 " + className}>
			<input
				className={
					"block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300P appearance-none focus:outline-none focus:ring-0 peer " +
					(error ? "border-red-600" : "text-gray-900 focus:border-blue-600")
				}
				id={id}
				name={name}
				onBlur={onCustomBlur}
				onChange={onChange}
				onFocus={onCustomFocus}
				placeholder={hintReal}
				type={type}
				value={value}
				max={type === "date" ? today : type === "number" ? max : undefined}
				min={type === "number" ? min : undefined}
				maxLength={maxLength}
			/>
			<label
				className={
					"absolute text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 " +
					(error ? " text-red-600" : "text-gray-500 peer-focus:text-blue-600")
				}
				htmlFor={id}
			>
				{placeholder}
			</label>
		</div>
	);
}

Input.propTypes = {
	type: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	hint: PropTypes.string,
	id: PropTypes.string,
	name: PropTypes.string.isRequired,
	value: PropTypes.string,
	maxLength: PropTypes.number,
	onBlur: PropTypes.func,
	onChange: PropTypes.func,
	onFocus: PropTypes.func,
	error: PropTypes.string,
	className: PropTypes.string,
	max: PropTypes.number,
	min: PropTypes.number,
};

export default Input;
