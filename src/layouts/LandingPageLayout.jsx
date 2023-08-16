import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

import MainLayout from "../components/MainLayout";
import Navbar from "../components/Navbar";
import { selectUser } from "../store/slices/authSlice";

function LandingPageLayout() {
	const navigate = useNavigate();
	const user = useSelector(selectUser);

	useEffect(() => {
		if (user.id) {
			navigate(`/${user.role}`);
		}
	}, [navigate, user]);

	return (
		<>
			<Navbar />
			<MainLayout>
				<Outlet />
			</MainLayout>
		</>
	);
}

export default LandingPageLayout;
