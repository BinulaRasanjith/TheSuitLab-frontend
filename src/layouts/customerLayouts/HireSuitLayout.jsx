import { GiRolledCloth } from "react-icons/gi";
import { Outlet } from "react-router-dom";

import ContentWrapper from "../../components/ContentWrapper";
import Sidebar from "../../components/Sidebar/Sidebar";

const sidebarItems = [
	{
		label: "Hire Suit",
		icon: <GiRolledCloth />,
		to: "/customer/hire-suit",
		subItems: [
			{
				label: "Jacket",
				to: "/customer/hire-suit/jacket",
			},
			{
				label: "Pant",
				to: "/customer/hire-suit/pants",
			},
		],
	},
];

const HireSuitLayout = () => {
	return (
		<>
			
			<Sidebar items={sidebarItems} />
			<ContentWrapper customizeLayout>
				<Outlet />
			</ContentWrapper>
		</>
	);
};

export default HireSuitLayout;
