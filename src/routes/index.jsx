import { createBrowserRouter } from "react-router-dom";

import costumeCustomizationRoutes from "./costumeCustomizationRoutes";
import landingPageRoutes from "./landingPageRoutes";
import testRoutes from "./testRoutes";
import customerRoutes from "./customerRoutes";
import adminRoutes from "./adminRoutes";
import tailorRoutes from "./tailorRoutes";
import managerRoutes from "./managerRoutes";

const router = createBrowserRouter([
    landingPageRoutes, // This is the landing page routes
    costumeCustomizationRoutes, // This is the costume customization routes
    testRoutes, // This is the test routes
    customerRoutes, // This is the customer routes
    adminRoutes, // This is the admin routes
    tailorRoutes, // This is the tailor routes
    managerRoutes,

])

export default router;