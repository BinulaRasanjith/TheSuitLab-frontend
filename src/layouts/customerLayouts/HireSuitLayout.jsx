import { GiRolledCloth } from "react-icons/gi";
import { Outlet } from "react-router-dom";
import { SiStylelint } from "react-icons/si";
import { PiPantsFill } from "react-icons/pi";
import ContentWrapper from "../../components/ContentWrapper";
import Sidebar from "../../components/Sidebar/Sidebar";

const sidebarItems = [
	{
		label: "Jacket",
		icon: <SiStylelint />,
		to: "/customer/hire-suit/jacket",
	}, {
		label: "Pant",
		icon: <PiPantsFill />,
		to: "/customer/hire-suit/pants",
	}
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
