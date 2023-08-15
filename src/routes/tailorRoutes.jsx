import SingleOutletLayout from "../layouts/SingleOutletLayout";
import TailorMainLayout from "../layouts/tailorLayouts/TailorMainLayout";
import TailorDashboard from "../pages/Tailor/Dashboard";
import Orders from "../pages/Tailor/Orders";
import Profile from "../pages/Tailor/Profile";
import Reviews from "../pages/Tailor/Test1";
import Buttons from "../pages/tailor/Buttons";
import Fabrics from "../pages/tailor/Fabrics";
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
					element: <Orders />,
				},
				{
					path: "collected",
					element: <h1>Collected Orders</h1>,
				},
				{
					path: "completed",
					element: <h1>Completed Orders</h1>,
				},
				{
					path: "to-be-collected",
					element: <h1>To Be Canceled Orders</h1>,
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
			element: <Reviews />,
		},
		{
			path: "profile",
			element: <Profile />,
		},
	],
};

export default tailorRoutes;