import AdminMainLayout from "../layouts/adminLayouts/AdminMainLayouts"
import AddEmployee from "../pages/Admin/AddEmployee"
import AdminDashboard from "../pages/Admin/Dashboard"
import Employees from "../pages/Admin/Employees"
import Orders from "../pages/Admin/Orders"
import Profile from "../pages/Admin/Profile"
// import test2 from "../pages/Admin/test2"

const adminRoutes = {
    path: "/admin",
    element: <AdminMainLayout />,
    children: [
        { path: "", element: <AdminDashboard /> },
        { path: "employees", element: <Employees /> },
        { path: "add-employee", element: <AddEmployee /> },
        { path: "orders", element: <Orders /> },
        { path: "profile", element: <Profile /> },
        { path: "reviews", element: <div>Reviews</div> },
        // { path: "test", element: <test2 /> },

    ],
}

export default adminRoutes