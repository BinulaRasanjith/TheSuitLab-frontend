// import ChooseBeltLoop from "../components/customer/ChooseBeltLoop";

import BeltsGallery from "../components/Customer/BeltsGallery";
import BowsGallery from "../components/Customer/BowsGallery";
import Cart from "../components/Customer/Cart";
import ChooseButtonColor from "../components/Customer/ChooseButtonColor";
import ChoosePocketColor from "../components/Customer/ChoosePocketColor";
import CurrentSizes from "../components/Customer/CurrentSizes";
import CustomSizes from "../components/Customer/CustomSizes";
import CustomizeMeasurements from "../components/Customer/CustomizeMeasurements";
import MaterialsFabricPattern from "../components/Customer/MaterialView/MaterialsFabricPattern";
import MaterialsFabricSolid from "../components/Customer/MaterialView/MaterialsFabricSolid";
import ShoesGallery from "../components/Customer/ShoesGallery";
import StandardSizes from "../components/Customer/StandardSizes";
import TiesGallery from "../components/Customer/TiesGallery";
import JacketsGallery from "../components/Customer/jacketsGallery";
import PantsGallery from "../components/Customer/pantsGallery";
import SuitDescription from "../components/Customer/suitDescription";
// import ChooseBottom from "../components/customer/ChooseBottom";
import Payment from '../components/Payment';
import ChooseBackPocket from "../components/customer/ChooseBackPocket";
// import ChooseButtonContrast from "../components/customer/ChooseButtonContrast";
import ChooseButtons from "../components/customer/ChooseButtons";
import ChooseLapel from "../components/customer/ChooseLapels";
import ChoosePant from "../components/customer/ChoosePant";
// import ChoosePantContrast from "../components/customer/ChoosePantContrast";
import ChoosePockets from "../components/customer/ChoosePocket";
import ChooseSleeveButtons from "../components/customer/ChooseSleeveButtons";
import SingleOutletLayout from "../layouts/SingleOutletLayout";
import AccessoriesLayout from "../layouts/customerLayouts/AccessoriesLayout";
import AddMeasurementsLayout from "../layouts/customerLayouts/AddMeasurementsLayout";
import CostumeCustomizationLayout from "../layouts/customerLayouts/CostumeCustomizationLayout";
import CustomerMainLayout from "../layouts/customerLayouts/CustomerMainLayout";
import HireSuitLayout from "../layouts/customerLayouts/HireSuitLayout";
import JacketStyleLayout from "../layouts/customerLayouts/JacketStyleLayout";
import PantStyleLayout from "../layouts/customerLayouts/PantStyleLayout";
import AboutUs from "../pages/Aboutus";
import ContactUs from "../pages/Contactus";
import Profile from "../pages/Profile";
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
			element: <Profile />,
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
							path: "pocket",
							element: <ChoosePockets />,
						},
						{
							path: "sleeve-button",
							element: <ChooseSleeveButtons />,
						},

					],
				},
				{
					path: "color-contrast",
					element: <SingleOutletLayout />,
					children: [
						{
							path: "pocket",
							element: <ChoosePocketColor />,
						},
						{
							path: "button",
							element: <ChooseButtonColor />,
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
							path: "back-pocket",
							element: <ChooseBackPocket />,
						},

					],
				},
				{
					path: "color-contrast",
					element: <SingleOutletLayout />,
					children: [
						{
							path: "back-pocket-color",
							element: <ChoosePocketColor />,
						},
						{
							path: "back-button-color",
							element: <ChooseButtonColor />,
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
			path: "customize-suit/costume",
			element: <CostumeCustomizationLayout />,
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
				}, {
					path: "jacket",
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
							path: "pocket",
							element: <ChoosePockets />,
						},
						{
							path: "sleeve-button",
							element: <ChooseSleeveButtons />,
						},

					],
				},

				{
					path: "pant",
					element: <SingleOutletLayout />,
					children: [
						{
							path: "pant-style",
							element: <ChoosePant />,
						},
						{
							path: "back-pocket",
							element: <ChooseBackPocket />,
						},

					],
				},
				{
					path: "color-contrast",
					element: <SingleOutletLayout />,
					children: [
						{
							path: "pocket",
							element: <ChoosePocketColor />,
						},
						{
							path: "button",
							element: <ChooseButtonColor />,
						},
					],
				},
			],
		},
		{
			path: "customize-suit/costume/measurements",
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
			path: "cart",
			element: <Cart />,
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
		{
			path: "hire-suit",
			element: <HireSuitLayout />,
			children: [
				{
					path: "jacket",
					element: <JacketsGallery />,
				},
				{
					path: "pants",
					element: <PantsGallery />,
				},
				{
					path: ":suitType/:suitId", // Dynamic route parameter for both suit type and suit ID
					element: <SuitDescription />,
				},
			],
		},
		{
			path: "cart",
			element: <Cart />,
		},
		{
			path: "payment",
			element: <Payment />,
		},
	],
};

export default costumerRoutes;
