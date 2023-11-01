import OrderDetails from "../components/OrderDetails";
import Reviews from "../components/Reviews";
import SingleOutletLayout from "../layouts/SingleOutletLayout";
import ManagerMainLayout from "../layouts/managerLayouts/ManagerMainLayouts";
import MaterialsLayout from "../layouts/managerLayouts/MaterialsLayout";
import AddSupplier from "../pages/Manager/AddSupplier";
import Buttons from "../pages/Manager/Buttons";
import Customers from "../pages/Manager/Customers";
import ManagerDashboard from "../pages/Manager/Dashboard";
import Fabrics from "../pages/Manager/Fabrics";
import Orders from "../pages/Manager/Orders";
import Payments from "../pages/Manager/Payments";
import Suppliers from "../pages/Manager/Suppliers";
import Profile from "../pages/Profile";
import Notifications from "../components/Notification";

const managerRoutes = {
	path: "/manager",
	element: <ManagerMainLayout />,
	children: [
		{ path: "", element: <ManagerDashboard /> },
		{
			path: "materials",
			element: <MaterialsLayout />,
			children: [
				{ path: "fabric", element: <Fabrics /> },
				{ path: "string", element: <div>String</div> },
				{ path: "buttons", element: <Buttons /> },
				{ path: "colors", element: <div>Color contrast</div> },
			],
		},
		{
			path: "orders",
			element: <SingleOutletLayout />,
			children: [
				{
					path: "",
					element: <Orders />,
				},
				{
					path: ":orderId",
					element: <OrderDetails />,
				},
			],
		},
		{ path: "payments", element: <Payments /> },
		{ path: "suppliers", element: <Suppliers /> },
		{ path: "suppliers/add-supplier", element: <AddSupplier /> },
		{ path: "customer", element: <Customers /> },
		{ path: "profile", element: <Profile /> },
		{ path: "reviews", element: <Reviews /> },
		{ path: "notifications", element: <Notifications /> },
		
	],
};

export default managerRoutes;
