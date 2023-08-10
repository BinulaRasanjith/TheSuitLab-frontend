import CustomerAccessoriesLayout from "../layouts/customerLayouts/CustomerAccessoriesLayout"
import CustomerCostumeCustomizationLayout from "../layouts/customerLayouts/CustomerCostumeCustomizationLayout"
import AdminMainLayout from "../layouts/adminLayouts/AdminMainLayouts"

//pages
import AdminDashboard from "../pages/Admin/Dashboard"
import Employees from "../pages/Admin/Employees"
import Customers from "../pages/Admin/Customers"
import Orders from "../pages/Admin/Orders"
import Profile from "../pages/Admin/Profile"
import Reviews from "../pages/Admin/Test1"


const costumerRoutes = {
    path: "/admin",
    element: <AdminMainLayout />,
    children: [
        { path: "dashboard", element: <AdminDashboard /> },
        { path: "employees", element: <Employees /> },
        { path: "customer", element: <Customers />},
        { path: "orders", element: <Orders /> },
        { path: "profile", element: <Profile /> },  
        { path: "test", element: <Reviews /> }, 
    ],
}

export default costumerRoutes