import { createBrowserRouter } from "react-router-dom";

import customerRoutes from "./customerRoutes";
import landingPageRoutes from "./landingPageRoutes";
import testRoutes from "./testRoutes";

const router = createBrowserRouter([
    landingPageRoutes, // This is the landing page routes
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