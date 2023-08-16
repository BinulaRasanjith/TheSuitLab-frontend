import AdminMainLayout from "../layouts/adminLayouts/AdminMainLayouts";
import AddEmployee from "../pages/Admin/AddEmployee";
import Customers from "../pages/Admin/Customers";
import AdminDashboard from "../pages/Admin/Dashboard";
import Employees from "../pages/Admin/Employees";
import Orders from "../pages/Admin/Orders";
import Profile from "../pages/Admin/Profile";
import Reviews from "../pages/Admin/Test1";

const costumerRoutes = {
	path: "/admin",
	element: <AdminMainLayout />,
	children: [
		{ path: "", element: <AdminDashboard /> },
		{ path: "employees", element: <Employees /> },
		{ path: "customer", element: <Customers /> },
		{ path: "orders", element: <Orders /> },
		{ path: "profile", element: <Profile /> },
		{ path: "test", element: <Reviews /> },
		{ path: "add-employee", element: <AddEmployee /> },
	],
};

export default costumerRoutes;
