//layouts
import TailorMainLayout from "../layouts/tailorLayouts/TailorMainLayouts"
import MaterialsLayout from "../layouts/tailorLayouts/MaterialsLayout"


//pages
import TailorDashboard from "../pages/Tailor/Dashboard"
import Orders from "../pages/Tailor/Orders"
import Profile from "../pages/Tailor/Profile"
import Reviews from "../pages/Tailor/Test1"
import Fabrics from "../pages/Tailor/Fabrics"
import Buttons from "../pages/tailor/Buttons"


const tailorRoutes = {
    path: "/tailor",
    element: <TailorMainLayout />,
    children: [
        { path: "", element: <TailorDashboard /> },
        { path: "orders", element: <Orders /> },
        { path: "profile", element: <Profile /> },
        { 
            path: "materials", 
            element: <MaterialsLayout />,
            children: [
                { path: "fabric", element: <Fabrics /> },
                { path: "string", element: <div>String</div> },
                { path: "buttons", element: <Buttons /> },
                { path: "colors", element: <div>Color contrast</div> },
            ]    
    },  
        { path: "test", element: <Reviews /> }, 
    ],
}

export default tailorRoutes