// import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

import MainLayout from "../../components/MainLayout";
import Navbar from "../../components/Navbar";
// import { CUSTOMER } from "../../constants/roles";

import { selectUser } from "../../store/slices/authSlice";

const CustomerMainLayout = () => {
	const navigate = useNavigate();
	const user = useSelector(selectUser);

	// useEffect(() => {
	// 	if (user.role !== CUSTOMER) navigate("/");
	// }, [navigate, user]);

	return (
		<>
			<Navbar />
			<MainLayout>
				<Outlet />
			</MainLayout>
		</>
	);
};

export default CustomerMainLayout;
