import { useEffect } from "react";
import { BiSolidColor } from "react-icons/bi";
import { GiRolledCloth } from "react-icons/gi";
import { SiStylelint } from "react-icons/si";
import { TbRulerMeasure } from "react-icons/tb";
import { Outlet } from "react-router-dom";

import ContentWrapper from "../../components/ContentWrapper";
import UpperModel from "../../components/Customer/UpperModel";
import Sidebar from "../../components/Sidebar/Sidebar";

const sidebarItems = [
	{
		label: "Fabric",
		icon: <GiRolledCloth />,
		to: "/customer/customize-suit/jacket/fabric",
		subItems: [
			{
				label: "Solid",
				to: "/customer/customize-suit/jacket/fabric/solid",
			},
			{
				label: "Pattern",
				to: "/customer/customize-suit/jacket/fabric/pattern",
			},
		],
	},
	{
		label: "Style",
		icon: <SiStylelint />,
		to: "/customer/customize-suit/jacket/style",
		subItems: [
			{
				label: "Buttons",
				to: "/customer/customize-suit/jacket/style/buttons",
			},
			{
				label: "Lapel",
				to: "/customer/customize-suit/jacket/style/lapel",
			},
			{
				label: "Pocket",
				to: "/customer/customize-suit/jacket/style/pocket",
			},
			{
				label: "Sleeve button",
				to: "/customer/customize-suit/jacket/style/sleeve-button",
			},
		],
	},
	{
		label: "Color contrast",
		icon: <BiSolidColor />,
		to: "/customer/customize-suit/jacket/color-contrast",
		subItems: [
			{
				label: "Pocket",
				to: "/customer/customize-suit/jacket/color-contrast/pocket",
			},
			{
				label: "Button",
				to: "/customer/customize-suit/jacket/color-contrast/button",
			},
		],
	},
	{
		label: "Measurements",
		icon: <TbRulerMeasure />,
		to: "/customer/customize-suit/jacket/measurements",
	},
];

const JacketStyleLayout = () => {

	// This function will be called when the user attempts to refresh the page
	const handleBeforeUnload = (e) => {
		e.preventDefault();
		e.returnValue = ''; // This text will be displayed in the confirmation dialog

		// You can customize the warning message here
		const confirmationMessage = 'Are you sure you want to leave this page?';

		// Display a confirmation dialog
		if (window.confirm(confirmationMessage)) {
			// The user clicked "OK," so allow the refresh
			e.returnValue = undefined;
		} else {
			// The user clicked "Cancel," so prevent the refresh
			e.returnValue = '';
		}
	};

	useEffect(() => {
		// Add the beforeunload event listener when the component mounts
		window.addEventListener('beforeunload', handleBeforeUnload);

		// Remove the beforeunload event listener when the component unmounts
		return () => {
			window.removeEventListener('beforeunload', handleBeforeUnload);
		};
	}, []);

	return (
		<>
			<Sidebar items={sidebarItems} />
			<ContentWrapper customizeLayout>
				<div className="w-1/2 h-full overflow-y-auto scroll-m-1">
					<Outlet />
				</div>
				<UpperModel />
			</ContentWrapper>
		</>
	);
};

export default JacketStyleLayout;
