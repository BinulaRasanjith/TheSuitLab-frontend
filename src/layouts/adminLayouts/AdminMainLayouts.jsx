import { useEffect } from "react";
import { BiSolidBookReader } from "react-icons/bi";
import { BsFillCartFill } from "react-icons/bs";
import { HiHome, HiUserCircle } from "react-icons/hi2";
import { IoMdBowtie } from "react-icons/io";
import { PiShirtFoldedFill } from "react-icons/pi";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

import ContentWrapper from "../../components/ContentWrapper";
import MainLayout from "../../components/MainLayout";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import { ADMIN } from "../../constants";
import { selectUser } from "../../store/slices/authSlice";

const sidebarItems = [
	{
		label: "Dashboard",
		icon: <HiHome />,
		to: "/admin",
	},
	{
		label: "Employees",
		icon: <BiSolidBookReader />,
		to: "/admin/employees",
	},
	// {
	// 	label: "Customers",
	// 	icon: <PiShirtFoldedFill />,
	// 	to: "/admin/customer",
	// },
	// {
	// 	label: "Orders",
	// 	icon: <IoMdBowtie />,
	// 	to: "/admin/orders",
	// },
	// {
	// 	label: "Reviews",
	// 	icon: <BsFillCartFill />,
	// 	to: "/admin/test",
	// },
	{
		label: "Profile",
		icon: <HiUserCircle />,
		to: "/admin/profile",
	},
];

const AdminMainLayout = () => {
	const navigate = useNavigate();
	const user = useSelector(selectUser);

	useEffect(() => {
		if (user.role !== ADMIN) navigate("/");
	}, [user, navigate]);

	return (
		<>
			<Navbar />
			<MainLayout>
				<Sidebar items={sidebarItems} />
				<ContentWrapper>
					<Outlet />
				</ContentWrapper>
			</MainLayout>
		</>
	);
};

export default AdminMainLayout;
