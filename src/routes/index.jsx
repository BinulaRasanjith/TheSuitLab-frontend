import { createBrowserRouter } from "react-router-dom";

import costumeCustomizationRoutes from "./costumeCustomizationRoutes";
import customerRoutes from "./customerRoutes";
import landingPageRoutes from "./landingPageRoutes";
import tailorRoutes from "./tailorRoutes";
import adminRoutes from "./adminRoutes";

const router = createBrowserRouter([
    landingPageRoutes, // This is the landing page routes
    customerRoutes, // This is the customer routes
    tailorRoutes, // This is the tailor routes
    adminRoutes, // This is the admin routes
])

export default router;