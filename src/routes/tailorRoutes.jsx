import OrderDetails from "../components/OrderDetails";
import SingleOutletLayout from "../layouts/SingleOutletLayout";
import TailorMainLayout from "../layouts/tailorLayouts/TailorMainLayout";
import Profile from "../pages/Profile";
import TailorDashboard from "../pages/Tailor/Dashboard";
import AllOrders from "../pages/Tailor/Orders/AllOrders";
import CollectedOrders from "../pages/tailor/Orders/CollectedOrders";
import CompletedOrders from "../pages/tailor/Orders/CompletedOrders";
import TobeCollectedOrders from "../pages/tailor/Orders/TobeCollectedOrders";
import Strings from "../components/StringData";
import Materials  from "../pages/Tailor/Materials";
import Reviews from "../components/Reviews";

const tailorRoutes = {
	path: "/tailor",
	element: <TailorMainLayout />,
	children: [
		{
			path: "",
			element: <TailorDashboard />,
		},
		{
			path: "orders",
			element: <AllOrders />,
			//element: <SingleOutletLayout />,
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
				{
					path: ":status/:orderId",
					element: <OrderDetails />,
				},
			],
		},
		{
			path: "materials",
			element: <Materials />,
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
