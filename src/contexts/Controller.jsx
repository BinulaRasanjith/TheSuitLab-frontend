import PropTypes from "prop-types";
import { createContext, useContext, useState } from "react";

const CustomizationContext = createContext({});


export const CustomizationProvider = (props) => {

	const [material, setMaterial] = useState("");
	const [PocketFlaps, setPocketFlaps] = useState("false");

	return (
		<CustomizationContext.Provider
			value={{
				material,
				setMaterial,
				PocketFlaps,
				setPocketFlaps,
			}}
		>
			{props.children}
		</CustomizationContext.Provider>
	);
};

CustomizationProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export const useCustomization = () => {
	const context = useContext(CustomizationContext);
	return context;
};
