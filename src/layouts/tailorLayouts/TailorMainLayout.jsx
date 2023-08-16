import { useEffect } from "react";
import { HiChartBar, HiColorSwatch, HiShoppingCart } from "react-icons/hi";
import { HiHandThumbUp, HiUserCircle } from "react-icons/hi2";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

import ContentWrapper from "../../components/ContentWrapper";
import MainLayout from "../../components/MainLayout";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import { TAILOR } from "../../constants";
import { selectUser } from "../../store/slices/authSlice";

const sidebarItems = [
	{
		label: "Dashboard",
		icon: <HiChartBar />,
		to: "/tailor",
	},
	{
		label: "Orders",
		icon: <HiShoppingCart />,
		to: "/tailor/orders",
		subItems: [
			{
				label: "All",
				to: "/tailor/orders/all",
			},
			{
				label: "Collected",
				to: "/tailor/orders/collected",
			},
			{
				label: "Completed",
				to: "/tailor/orders/completed",
			},
			{
				label: "To be collected",
				to: "/tailor/orders/to-be-collected",
			},
		],
	},
	{
		label: "Materials",
		icon: <HiColorSwatch />,
		to: "/tailor/materials",
		subItems: [
			{
				label: "Fabric",
				to: "/tailor/materials/fabric",
			},
			{
				label: "Strings",
				to: "/tailor/materials/strings",
			},
			{
				label: "Buttons",
				to: "/tailor/materials/buttons",
			},
		],
	},
	{
		label: "Reviews",
		icon: <HiHandThumbUp />,
		to: "/tailor/reviews",
	},
	{
		label: "Profile",
		icon: <HiUserCircle />,
		to: "/tailor/profile",
	},
];

const TailorMainLayout = () => {
	const navigate = useNavigate();
	const user = useSelector(selectUser);

	useEffect(() => {
		if (user.role !== TAILOR) navigate("/");
	});

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

export default TailorMainLayout;
