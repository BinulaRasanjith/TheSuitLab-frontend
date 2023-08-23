import BeltsGallery from "../components/Customer/BeltsGallery";
import BowsGallery from "../components/Customer/BowsGallery";
import ShoesGallery from "../components/Customer/ShoesGallery";
import TiesGallery from "../components/Customer/TiesGallery";
import ChooseBeltLoop from "../components/customer/ChooseBeltLoop";
import ChooseBottom from "../components/customer/ChooseBottom";
import ChooseButtonContrast from "../components/customer/ChooseButtonContrast";
import ChooseButtons from "../components/customer/ChooseButtons";
import ChooseCuff from "../components/customer/ChooseCuff";
import ChooseJacketContrast from "../components/customer/ChooseJacketContrast";
import ChooseLapel from "../components/customer/ChooseLapels";
import ChooseMeasurements from "../components/customer/ChooseMeasurements";
import ChoosePant from "../components/customer/ChoosePant";
import ChoosePantContrast from "../components/customer/ChoosePantContrast";
import ChoosePantPleat from "../components/customer/ChoosePantPleat";
import ChoosePantPocket from "../components/customer/ChoosePantPocket";
import ChooseBackPocket from "../components/customer/ChoosePocket";
import ChoosePockets from "../components/customer/ChoosePocket";
import ChooseSleeveButtons from "../components/customer/ChooseSleeveButtons";
import ChooseVents from "../components/customer/ChooseVent";
import Materials_PureLinen from "../components/customer/MaterialView/Materials_PureLinen";
import Materials_PureWool from "../components/customer/MaterialView/Materials_PureWool";
import Materials_SolidColors from "../components/customer/MaterialView/Materials_SolidColors";
import Materials_ViewAll from "../components/customer/MaterialView/Materials_ViewAll";
import Materials_patterns from "../components/customer/MaterialView/Materials_patterns";
import SingleOutletLayout from "../layouts/SingleOutletLayout";
import AccessoriesLayout from "../layouts/customerLayouts/AccessoriesLayout";
import CustomerMainLayout from "../layouts/customerLayouts/CustomerMainLayout";
import JacketStyleLayout from "../layouts/customerLayouts/JacketStyleLayout";
import PantStyleLayout from "../layouts/customerLayouts/PantStyleLayout";
import AboutUs from "../pages/Aboutus";
import ContactUs from "../pages/Contactus";
import Services from "../pages/Services";
import CustomizeMeasurements from "../pages/customer/CustomizeMeasurements";
import Home from "../pages/customer/Home";
import LookBook from "../pages/customer/LookBook";
import SuitCustomizationLanding from "../pages/customer/SuitCustomizationLanding";
// TODO: complete the navigation routes
const costumerRoutes = {
	path: "/customer",
	element: <CustomerMainLayout />,
	children: [
		{
			path: "",
			element: <Home />,
		},
		{
			path: "about-us",
			element: <AboutUs />,
		},
		{
			path: "contact-us",
			element: <ContactUs />,
		},
		{
			path: "services",
			element: <Services />,
		},
		{
			path: "lookbook",
			element: <LookBook />,
		},
		{
			path: "profile",
			element: <div>Profile</div>,
		},
		{
			path: "customize-measurements",
			element: <CustomizeMeasurements />,
		},
		{
			path: "customize-suit",
			element: <SuitCustomizationLanding />,
		},
		{
			path: "customize-suit/jacket",
			element: <JacketStyleLayout />,
			children: [
				{
					path: "fabric",
					element: <Materials_ViewAll />,
					// element: <SingleOutletLayout />,
					// children: [
					// 	{
					// 		path: "all",
					// 		element: <Materials_ViewAll />,
					// 	},
					// 	{
					// 		path: "solid-colors",
					// 		element: <Materials_SolidColors />,
					// 	},
					// 	{
					// 		path: "patterns",
					// 		element: <Materials_patterns />,
					// 	},
					// 	{
					// 		path: "pure-linen",
					// 		element: <Materials_PureLinen />,
					// 	},
					// 	{
					// 		path: "pure-wool",
					// 		element: <Materials_PureWool />,
					// 	},
					// ],
				},
				{
					path: "style",
					element: <SingleOutletLayout />,
					children: [
						{
							path: "buttons",
							element: <ChooseButtons />,
						},
						{
							path: "lapel",
							element: <ChooseLapel />,
						},
						{
							path: "bottom",
							element: <ChooseBottom />,
						},
						{
							path: "pocket",
							element: <ChoosePockets />,
						},
						{
							path: "sleeve-button",
							element: <ChooseSleeveButtons />,
						},
						{
							path: "vent",
							element: <ChooseVents />,
						},
					],
				},
				{
					path: "color-contrast",
					element: <SingleOutletLayout />,
					children: [
						{
							path: "jacket-contrast",
							element: <ChooseJacketContrast />,
						},
						{
							path: "button",
							element: <ChooseButtonContrast />,
						},
					],
				},
				{
					path: "measurements",
					element: <ChooseMeasurements />,
				},
			],
		},
		{
			path: "customize-suit/pant",
			element: <PantStyleLayout />,
			children: [
				{
					path: "fabric",
					element: <SingleOutletLayout />,
					children: [
						{
							path: "all",
							element: <Materials_ViewAll />,
						},
						{
							path: "solid-colors",
							element: <Materials_SolidColors />,
						},
						{
							path: "patterns",
							element: <Materials_patterns />,
						},
						{
							path: "pure-linen",
							element: <Materials_PureLinen />,
						},
						{
							path: "pure-wool",
							element: <Materials_PureWool />,
						},
					],
				},
				{
					path: "style",
					element: <SingleOutletLayout />,
					children: [
						{
							path: "pant-style",
							element: <ChoosePant />,
						},
						{
							path: "pleat",
							element: <ChoosePantPleat />,
						},
						{
							path: "pant-pocket",
							element: <ChoosePantPocket />,
						},
						{
							path: "back-pocket",
							element: <ChooseBackPocket />,
						},
						{
							path: "belt-loop",
							element: <ChooseBeltLoop />,
						},
						{
							path: "cuff",
							element: <ChooseCuff />,
						},
					],
				},
				{
					path: "color-contrast",
					element: <SingleOutletLayout />,
					children: [
						{
							path: "pant-contrast",
							element: <ChoosePantContrast />,
						},
						{
							path: "button-color",
							element: <ChooseButtonContrast />,
						},
					],
				},
				{
					path: "measurements",
					element: <ChooseMeasurements />,
				},
			],
		},
		{
			path: "accessories",
			element: <AccessoriesLayout />,
			children: [
				{
					path: "neck-ties",
					element: <TiesGallery />,
				},
				{
					path: "shoes",
					element: <ShoesGallery />,
				},
				{
					path: "belts",
					element: <BeltsGallery />,
				},
				{
					path: "bow-ties",
					element: <BowsGallery />,
				},
			],
		},
	],
};

export default costumerRoutes;
