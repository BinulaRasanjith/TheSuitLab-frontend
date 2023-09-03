import BeltsGallery from "../components/Customer/BeltsGallery";
import BowsGallery from "../components/Customer/BowsGallery";
import CurrentSizes from "../components/Customer/CurrentSizes";
import CustomSizes from "../components/Customer/CustomSizes";
import CustomizeMeasurements from "../components/Customer/CustomizeMeasurements";
import MaterialsFabricPattern from "../components/Customer/MaterialView/MaterialsFabricPattern";
import MaterialsFabricSolid from "../components/Customer/MaterialView/MaterialsFabricSolid";
import ShoesGallery from "../components/Customer/ShoesGallery";
import StandardSizes from "../components/Customer/StandardSizes";
import TiesGallery from "../components/Customer/TiesGallery";
import ChooseBeltLoop from "../components/customer/ChooseBeltLoop";
import ChooseBottom from "../components/customer/ChooseBottom";
import ChooseButtonContrast from "../components/customer/ChooseButtonContrast";
import ChooseButtons from "../components/customer/ChooseButtons";
import ChooseCuff from "../components/customer/ChooseCuff";
import ChooseJacketContrast from "../components/customer/ChooseJacketContrast";
import ChooseLapel from "../components/customer/ChooseLapels";
import ChoosePant from "../components/customer/ChoosePant";
import ChoosePantContrast from "../components/customer/ChoosePantContrast";
import ChoosePantPleat from "../components/customer/ChoosePantPleat";
import ChoosePantPocket from "../components/customer/ChoosePantPocket";
import ChoosePockets from "../components/customer/ChoosePocket";
import ChooseBackPocket from "../components/customer/ChoosePocket";
import ChooseSleeveButtons from "../components/customer/ChooseSleeveButtons";
import ChooseVents from "../components/customer/ChooseVent";
import SingleOutletLayout from "../layouts/SingleOutletLayout";
import AccessoriesLayout from "../layouts/customerLayouts/AccessoriesLayout";
import AddMeasurementsLayout from "../layouts/customerLayouts/AddMeasurementsLayout";
import CustomerMainLayout from "../layouts/customerLayouts/CustomerMainLayout";
import JacketStyleLayout from "../layouts/customerLayouts/JacketStyleLayout";
import PantStyleLayout from "../layouts/customerLayouts/PantStyleLayout";
import AboutUs from "../pages/Aboutus";
import ContactUs from "../pages/Contactus";
import Services from "../pages/Services";
import Home from "../pages/customer/Home";
import LookBook from "../pages/customer/LookBook";
import MeasurementDashboard from "../pages/customer/MeasurementDashboard";
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
			element: <SingleOutletLayout />,
			children: [
				{
					path: "",
					element: <MeasurementDashboard />,
				},
				{
					path: "current-sizes",
					element: <CurrentSizes />,
				},
				{
					path: "standard-sizes",
					element: <StandardSizes />,
				},
				{
					path: "custom-sizes",
					element: <CustomSizes />,
				},
			],
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
					element: <SingleOutletLayout />,
					children: [
						{
							path: "solid",
							element: <MaterialsFabricSolid />,
						},
						{
							path: "pattern",
							element: <MaterialsFabricPattern />,
						},
					],
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
			],
		},
		{
			path: "customize-suit/jacket/measurements",
			element: <AddMeasurementsLayout />,
			children: [
				{
					path: "",
					element: <CustomizeMeasurements />,
				},
				{
					path: "current-sizes",
					element: <CurrentSizes />,
				},
				{
					path: "standard-sizes",
					element: <StandardSizes />,
				},
				{
					path: "custom-sizes",
					element: <CustomSizes />,
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
							path: "solid",
							element: <MaterialsFabricSolid />,
						},
						{
							path: "pattern",
							element: <MaterialsFabricPattern />,
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
			],
		},
		{
			path: "customize-suit/pant/measurements",
			element: <AddMeasurementsLayout />,
			children: [
				{
					path: "",
					element: <CustomizeMeasurements />,
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
