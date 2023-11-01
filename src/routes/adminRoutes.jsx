import AdminMainLayout from "../layouts/adminLayouts/AdminMainLayouts";
import AddEmployee from "../pages/Admin/AddEmployee";
import Customers from "../pages/Admin/Customers";
import AdminDashboard from "../pages/Admin/Dashboard";
import Employees from "../pages/Admin/Employees";
import Orders from "../pages/Admin/Orders";
import Reviews from "../pages/Admin/Test1";
import Profile from "../pages/Profile";
import Notifications from "../components/Notification";

const costumerRoutes = {
	path: "/admin",
	element: <AdminMainLayout />,
	children: [
		//{ path: "", element: <AdminDashboard /> },
		{ path: "", element: <Employees /> },
		// { path: "customer", element: <Customers /> },
		// { path: "orders", element: <Orders /> },
		{ path: "profile", element: <Profile /> },
		// {
		// 	path: "test",
		// 	element: <h1 className="text-center text-4xl">Still in development</h1>,
		// },
		{ path: "add-employee", element: <AddEmployee /> },
		{ path: "notifications", element: <Notifications /> },	],
};

export default costumerRoutes;
