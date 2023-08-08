import { createBrowserRouter } from "react-router-dom";

import costumeCustomizationRoutes from "./costumeCustomizationRoutes";
import landingPageRoutes from "./landingPageRoutes";
import oaRoutes from "./oaRoutes";

const router = createBrowserRouter([
    landingPageRoutes, // This is the landing page routes
    costumeCustomizationRoutes, // This is the costume customization routes
    oaRoutes, // This is the costume customization routes
])

export default router;