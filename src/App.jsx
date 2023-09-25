import { Spinner } from "@chakra-ui/react";
import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { RouterProvider } from "react-router-dom";

import api from "./api/api";
import router from "./routes";
import { setUser, setUserObject } from "./store/slices/authSlice";

const App = () => {
	const dispatch = useDispatch();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const accessToken = localStorage.getItem("accessToken");
		if (accessToken) {
			api.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
			const decodedToken = jwtDecode(accessToken);
			const user = setUserObject(decodedToken.user);
			dispatch(setUser(user));
			setIsLoading(false);
		}
	}, [dispatch]);

	return isLoading ? (
		<div className="flex h-screen w-screen justify-center items-center">
			<Spinner size="xl" />
		</div>
	) : (
		<RouterProvider router={router} />
	);
};

export default App;
