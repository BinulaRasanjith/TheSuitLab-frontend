import CustomerAccessoriesLayout from "../layouts/customerLayouts/CustomerAccessoriesLayout"
import CustomerCostumeCustomizationLayout from "../layouts/customerLayouts/CustomerCostumeCustomizationLayout"
import ManagerMainLayout from "../layouts/managerLayouts/ManagerMainLayouts"

//pages
import ManagerDashboard from "../pages/Manager/Dashboard"
import Employees from "../pages/Manager/Employees"
import Customers from "../pages/Manager/Customers"
import Orders from "../pages/Manager/Orders"
import Profile from "../pages/Manager/Profile"
import Reviews from "../pages/Manager/Test1"


const managerRoutes = {
    path: "/manager",
    element: <ManagerMainLayout />,
    children: [
        { path: "dashboard", element: <ManagerDashboard /> },
        { path: "employees", element: <Employees /> },
        { path: "customer", element: <Customers />},
        { path: "orders", element: <Orders /> },
        { path: "profile", element: <Profile /> },  
        { path: "test", element: <Reviews /> }, 
    ],
}

export default managerRoutes