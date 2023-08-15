import SingleOutletLayout from "../layouts/SingleOutletLayout";
import TailorMainLayout from "../layouts/tailorLayouts/TailorMainLayout";
import TailorDashboard from "../pages/Tailor/Dashboard";
import Buttons from "../pages/tailor/Buttons";
import Fabrics from "../pages/tailor/Fabrics";
import AllOrders from "../pages/tailor/Orders/AllOrders";
import CollectedOrders from "../pages/tailor/Orders/CollectedOrders";
import CompletedOrders from "../pages/tailor/Orders/CompletedOrders";
import TobeCollectedOrders from "../pages/tailor/Orders/TobeCollectedOrders";
import Profile from "../pages/tailor/Profile";
import Strings from "../pages/tailor/Strings";

const tailorRoutes = {
	path: "/tailor",
	element: <TailorMainLayout />,
	children: [
		{
			path: "dashboard",
			element: <TailorDashboard />,
		},
		{
			path: "orders",
			element: <SingleOutletLayout />,
			children: [
				{
					path: "all",
					element: <AllOrders />,
				},
				{
					path: "collected",
					element: <CollectedOrders />,
				},
				{
					path: "completed",
					element: <CompletedOrders />,
				},
				{
					path: "to-be-collected",
					element: <TobeCollectedOrders />,
				},
			],
		},
		{
			path: "materials",
			element: <SingleOutletLayout />,
			children: [
				{
					path: "Fabric",
					element: <Fabrics />,
				},
				{
					path: "Strings",
					element: <Strings />,
				},
				{
					path: "Buttons",
					element: <Buttons />,
				},
			],
		},
		{
			path: "reviews",
			element: <div>Review</div>,
		},
		{
			path: "profile",
			element: <Profile />,
		},
	],
};

export default tailorRoutes;
