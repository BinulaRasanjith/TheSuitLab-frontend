import { createBrowserRouter } from "react-router-dom";

import costumeCustomizationRoutes from "./costumeCustomizationRoutes";
// import testRoutes from "./testRoutes";
import customerRoutes from "./customerRoutes";
import landingPageRoutes from "./landingPageRoutes";
import tailorRoutes from "./tailorRoutes";
import admin from "./adminRoutes";


const router = createBrowserRouter([
    landingPageRoutes, // This is the landing page routes
    costumeCustomizationRoutes, // This is the costume customization routes
    // testRoutes, // This is the test routes
    customerRoutes, // This is the customer routes
    tailorRoutes, // This is the tailor routes
    admin, // This is the admin routes
   

])

export default router;