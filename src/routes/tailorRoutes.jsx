//layouts
import TailorMainLayout from "../layouts/tailorLayouts/TailorMainLayouts"
import MaterialsLayout from "../layouts/tailorLayouts/MaterialsLayout"


//pages
import TailorDashboard from "../pages/Tailor/Dashboard"
import Orders from "../pages/Tailor/Orders"
import Profile from "../pages/Tailor/Profile"
import Reviews from "../pages/Tailor/Test1"


const tailorRoutes = {
    path: "/tailor",
    element: <TailorMainLayout />,
    children: [
        { path: "dashboard", element: <TailorDashboard /> },
        { path: "orders", element: <Orders /> },
        { path: "profile", element: <Profile /> },
        { 
            path: "materials", 
            element: <MaterialsLayout />,
            children: [
                { path: "fabric", element: <div>Fabrics</div> },
                { path: "string", element: <div>String</div> },
                { path: "buttons", element: <div>Color contrast</div> },
                { path: "colors", element: <div>Color contrast</div> },
            ]    
    },  
        { path: "test", element: <Reviews /> }, 
    ],
}

export default tailorRoutes