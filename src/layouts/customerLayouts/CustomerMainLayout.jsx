// import { BiSolidBookReader } from "react-icons/bi"
// import { BsFillCartFill } from "react-icons/bs"
// import { HiHome, HiUserCircle } from "react-icons/hi2";
// import { IoMdBowtie } from "react-icons/io"
import { useEffect } from "react";
import { useSelector } from "react-redux";
// import { PiShirtFoldedFill } from "react-icons/pi"
import { Outlet, useNavigate } from "react-router-dom";

import MainLayout from "../../components/MainLayout"
import Navbar from "../../components/Navbar"
import { CustomizationProvider } from "../../contexts/Controller";
import { CUSTOMER } from "../../constants";
import { selectUser } from "../../store/slices/authSlice";
// import Sidebar from "../../components/Sidebar/Sidebar"

// const sidebarItems = [
//     {
//         label: 'Home',
//         icon: <HiHome />,
//         to: '/customer/customize/jacket/home',
//     },
//     {
//         label: 'Lookbooks',
//         icon: <BiSolidBookReader />,
//         to: '/customer/customize/jacket/lookbooks',
//     },
//     {
//         label: 'Custom Suit',
//         icon: <PiShirtFoldedFill />,
//         to: '/customer/customize/jacket/custom-suit',
//         subItems: [
//             {
//                 label: 'Fabric',
//                 to: '/customer/customize/jacket/custom-suit/fabric',
//             },
//             {
//                 label: 'Style',
//                 to: '/customer/customize/jacket/custom-suit/style',
//             },
//             {
//                 label: 'Color contrast',
//                 to: '/customer/customize/jacket/custom-suit/color-contrast',
//             },
//             {
//                 label: 'Measurements',
//                 to: '/customer/customize/jacket/custom-suit/measurements',
//             },
//         ]
//     },
//     {
//         label: 'Accessories',
//         icon: <IoMdBowtie />,
//         to: '/customer/customize/jacket/accessories',
//         subItems: [
//             {
//                 label: 'Shoes',
//                 to: '/customer/customize/jacket/accessories/shoes',
//             },
//             {
//                 label: 'Belts',
//                 to: '/customer/customize/jacket/accessories/belts',
//             },
//             {
//                 label: 'Bow ties',
//                 to: '/customer/customize/jacket/accessories/bow-ties',
//             },
//             {
//                 label: 'Neck ties',
//                 to: '/customer/customize/jacket/accessories/neck-ties',
//             }
//         ]
//     },
//     {
//         label: 'Cart',
//         icon: <BsFillCartFill />,
//         to: '/customer/customize/jacket/cart',
//     },
//     {
//         label: 'Profile',
//         icon: <HiUserCircle />,
//         to: '/customer/customize/jacket/profile',
//     },
// ]

const CustomerMainLayout = () => {
	const navigate = useNavigate();
	const user = useSelector(selectUser);

	useEffect(() => {
		if (user.role !== CUSTOMER) navigate("/");
	}, [navigate, user]);

	return (
		<>
			<CustomizationProvider>
				<Navbar />
				<MainLayout>
					<Outlet />
				</MainLayout>
			</CustomizationProvider>
		</>
	);
}

export default CustomerMainLayout;
