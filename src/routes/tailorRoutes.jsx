import SingleOutletLayout from "../layouts/SingleOutletLayout";
import TailorMainLayout from "../layouts/tailorLayouts/TailorMainLayout";
import Profile from "../pages/Profile";
import TailorDashboard from "../pages/Tailor/Dashboard";
import Buttons from "../pages/tailor/Buttons";
import Fabrics from "../pages/tailor/Fabrics";
import AllOrders from "../pages/Tailor/Orders/AllOrders";
import CollectedOrders from "../pages/tailor/Orders/CollectedOrders";
import CompletedOrders from "../pages/tailor/Orders/CompletedOrders";
import TobeCollectedOrders from "../pages/tailor/Orders/TobeCollectedOrders";
import Strings from "../pages/tailor/Strings";
import OrderDetails from "../components/OrderDetails";


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
				{
					path: ":status/:orderId",
					element: <OrderDetails />,
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
