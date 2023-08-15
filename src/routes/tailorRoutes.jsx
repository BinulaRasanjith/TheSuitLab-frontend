import TailorMainLayout from "../layouts/tailorLayouts/TailorMainLayouts"
import MaterialsLayout from "../layouts/tailorLayouts/MaterialsLayout"
import SingleOutletLayout from "../layouts/SingleOutletLayout"


//pages
import TailorDashboard from "../pages/tailor/Dashboard"
import Orders from "../pages/tailor/Orders"
import Profile from "../pages/tailor/Profile"
import Reviews from "../pages/Tailor/Test1"
import Buttons from "../pages/tailor/Buttons"
import Fabrics from "../pages/tailor/Fabrics"
import Strings from "../pages/tailor/Strings"
import TEST from "../pages/tailor/test"



const tailorRoutes = {
    path: "/tailor",
    element: <TailorMainLayout />,
    children: [
        { path: "dashboard", element: <TailorDashboard /> },
        { path: "orders", element: <Orders />,
        children: [
            { path: "AllOrders", element: <Buttons/> },
            { path: "Collected", element: <div>String</div> },
            { path: "ToBeCollected", element: <Buttons/> },
            { path: "Processing", element: <div>Color contrast</div> },
        ]    
    },
        
        { path: "profile", element: <Profile /> },
        { 
            path: "materials", 
            element: <MaterialsLayout />,
            children: [
                { path: "fabric", element: <Fabrics/> },
                { path: "string", element: <Strings/> },
                { path: "buttons", element: <Buttons/> },
                { path: "colors", element: <div>Color contrast</div> },
            ]    
    },  
        { path: "reviews", element: <Reviews /> },
       
    ],
}

export default tailorRoutes