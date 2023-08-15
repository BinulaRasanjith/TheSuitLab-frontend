import jwtDecode from "jwt-decode";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { RouterProvider } from "react-router-dom";

import api from "./api/api";
import router from "./routes";
import { setUser, setUserObject } from "./store/slices/authSlice";

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		const accessToken = localStorage.getItem("accessToken");
		if (accessToken) {
			api.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
			const decodedToken = jwtDecode(accessToken);
			const user = setUserObject(decodedToken.user);
			dispatch(setUser(user));
		}
	}, [dispatch]);

	return <RouterProvider router={router} />;
};

export default App;
