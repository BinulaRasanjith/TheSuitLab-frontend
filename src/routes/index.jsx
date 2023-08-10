import { createBrowserRouter } from "react-router-dom";

import costumeCustomizationRoutes from "./costumeCustomizationRoutes";
import customerRoutes from "./customerRoutes";
import landingPageRoutes from "./landingPageRoutes";
import testRoutes from "./testRoutes";

const router = createBrowserRouter([
    landingPageRoutes, // This is the landing page routes
    costumeCustomizationRoutes, // This is the costume customization routes
    testRoutes, // This is the test routes
    customerRoutes, // This is the customer routes
])


/* 
[
    {path: '/' , element: <LandingPageLayout />},
    {path: 'login' , element: <Login />},
    {path: 'home' , element: <Home />},
]

*/

export default router;