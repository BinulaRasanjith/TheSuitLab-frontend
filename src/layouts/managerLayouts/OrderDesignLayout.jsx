import {
	HiChartBar,
	HiCreditCard,
	HiShoppingCart,
	HiUserGroup,
} from "react-icons/hi";
import { HiHandThumbUp, HiUserCircle } from "react-icons/hi2";
import { IoMdBowtie } from "react-icons/io";
import { Outlet, useNavigate } from "react-router-dom";

import ContentWrapper from "../../components/ContentWrapper";
// import MainLayout from "../../components/MainLayout";
// import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
//import { PRODUCT_MANAGER } from "../../constants";
// import { selectUser } from "../../store/slices/authSlice";
import CostumeModel from "../../components/Customer/CostumeModel";



const JacketStyleLayout = () => {
	return (
		<div className="flex">
				<div className="w-1/2 h-full overflow-y-auto scroll-m-1">
					<Outlet />
				</div>
				{/* <UpperModel /> */}
                {/* <CostumeModel /> */}
		</div>
	);
};

export default JacketStyleLayout;
