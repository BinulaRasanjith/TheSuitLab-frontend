import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import App from "./App";
import colors from "./config/colors";
import "./index.css";
import store from "./store/store";

const theme = extendTheme({
	fonts: {
		body: "Poppins, sans-serif",
		heading: "Poppins, sans-serif",
	},
	colors,
});

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider store={store}>
			<ChakraProvider theme={theme}>
				<App />
			</ChakraProvider>
		</Provider>
	</React.StrictMode>
);
