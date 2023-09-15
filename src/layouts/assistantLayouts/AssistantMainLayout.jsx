// import { useEffect } from "react"; // TODO
// import { BiSolidMessageAltEdit } from "react-icons/bi";
import { BiSolidPurchaseTag } from "react-icons/bi";
import { BsBarChartFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { HiColorSwatch,HiUserGroup } from "react-icons/hi";
import { HiCalendarDays, HiShoppingCart } from "react-icons/hi2";
import { IoIosBowtie } from "react-icons/io";
import { TbArrowBackUp } from "react-icons/tb";
// import { useSelector } from "react-redux"; // TODO
import { Outlet } from "react-router-dom";
// import { useNavigate } from "react-router-dom"; // TODO

import ContentWrapper from "../../components/ContentWrapper";
import MainLayout from "../../components/MainLayout";
// import Navbar from "../../components/TopNavBar/Staffnavbar"
import Navbar from "../../components/Navbar";
// import Sidebar from "../../components/AssistantSidebar"
import Sidebar from "../../components/Sidebar/Sidebar";
import { OPERATION_ASSISTANT } from "../../constants";
import { selectUser } from "../../store/slices/authSlice";
 

const assistantSidebarItems = [
	{
		label: "Dashboard",
		icon: <BsBarChartFill />,
		to: "/assistant",
	},
	{
		label: "Materials",
		icon: <HiColorSwatch />,
		to: "/assistant/materials",
	},
	{
		label: "Handover",
		icon: <HiCalendarDays />,
		to: "/assistant/handover",
	},
	{
		label: "Orders",
		icon: <HiShoppingCart />,
		to: "/assistant/orders",
	},
	{
		label: "Customers",
		icon: <HiUserGroup />,
		to: "/assistant/customers",
	},
	{
		label: "Returns",
		icon: <TbArrowBackUp />,
		to: "/assistant/returns",
	},
	{
		label: "Accessories",
		icon: <IoIosBowtie />,
		to: "/assistant/accessories",
	},
	{
		label: "Hiring",
		icon: <BiSolidPurchaseTag />,
		to: "/assistant/hiring",
	},

	{
		label: "Profile",
		icon: <FaUserCircle />,
		to: "/assistant/profile",
	},
	// {
	//     label: 'Log Out',
	//     icon: <TbLogout />,
	//     to: '/',
	// }
];

const AssistantMainLayout = () => {
	// const navigate = useNavigate();
	// const user = useSelector(selectUser);
	// useEffect(() => {
	// 	if (user.role != OPERATION_ASSISTANT) navigate("/");
	// }, [navigate, user]);
	return (
		<>
			<Navbar />
			<MainLayout>
				<Sidebar items={assistantSidebarItems} />
				<ContentWrapper>
					<Outlet />
				</ContentWrapper>
			</MainLayout>
		</>
	);
};

export default AssistantMainLayout;
