import { createBrowserRouter } from "react-router-dom";

import costumeCustomizationRoutes from "./costumeCustomizationRoutes";
import landingPageRoutes from "./landingPageRoutes";
import testRoutes from "./testRoutes";
import customerRoutes from "./customerRoutes";
import admiin from "./adminRoutes";

const router = createBrowserRouter([
    landingPageRoutes, // This is the landing page routes
    costumeCustomizationRoutes, // This is the costume customization routes
    testRoutes, // This is the test routes
    customerRoutes, // This is the customer routes
    admiin, // This is the admin routes
])

export default router;