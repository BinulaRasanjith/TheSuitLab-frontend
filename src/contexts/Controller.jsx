import PropTypes from "prop-types";
import { createContext, useContext, useState } from "react";

const CustomizationContext = createContext({});

export const CustomizationProvider = ({ children }) => {
	const [material, setMaterial] = useState("");
	const [PocketFlaps, setPocketFlaps] = useState("false");
	const [button, setButton] = useState(false);
	const [three, setThree] = useState(false);
	const [four, setFour] = useState(false);
	const [two, setTwo] = useState(false);

	return (
		<CustomizationContext.Provider
			value={{
				material,
				setMaterial,
				PocketFlaps,
				setPocketFlaps,
				button,
				setButton,
				three,
				setThree,
				four,
				setFour,
				two,
				setTwo,
			}}
		>
			{children}
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
