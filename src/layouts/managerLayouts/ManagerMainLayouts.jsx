import { useEffect } from "react";
import {
	HiChartBar,
	HiCreditCard,
	HiShoppingCart,
	HiUserGroup,
} from "react-icons/hi";
import { HiHandThumbUp, HiUserCircle } from "react-icons/hi2";
import { IoMdBowtie } from "react-icons/io";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

import ContentWrapper from "../../components/ContentWrapper";
import MainLayout from "../../components/MainLayout";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import { PRODUCT_MANAGER } from "../../constants";
import { selectUser } from "../../store/slices/authSlice";

const sidebarItems = [
	{
		label: "Dashboard",
		icon: <HiChartBar />,
		to: "/manager",
	},
	{
		label: "Materials",
		icon: <IoMdBowtie />,
		to: "/manager/materials",
		subItems: [
			{
				label: "Fabric",
				to: "/manager/materials/fabric",
			},
			{
				label: "String",
				to: "/manager/materials/string",
			},
			{
				label: "Buttons",
				to: "/manager/materials/buttons",
			},
		],
	},
	{
		label: "Orders",
		icon: <HiShoppingCart />,
		to: "/manager/orders",
	},
	{
		label: "Suppliers",
		icon: <HiUserGroup />,
		to: "/manager/suppliers",
	},
	{
		label: "Payments",
		icon: <HiCreditCard />,
		to: "/manager/payments",
	},
	{
		label: "Customers",
		icon: <HiUserGroup />,
		to: "/manager/customer",
	},
	{
		label: "Reviews",
		icon: <HiHandThumbUp />,
		to: "/manager/reviews",
	},
	{
		label: "Profile",
		icon: <HiUserCircle />,
		to: "/manager/profile",
	},
];

const ManagerMainLayout = () => {
	const navigate = useNavigate();
	const user = useSelector(selectUser);

	useEffect(() => {
		if (user.role !== PRODUCT_MANAGER) navigate("/");
	}, [navigate, user]);

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

export default ManagerMainLayout;
