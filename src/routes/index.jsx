import { createBrowserRouter } from "react-router-dom";

import landingPageRoutes from "./landingPageRoutes";
import costumeCustomizationRoutes from "./costumeCustomizationRoutes";

const router = createBrowserRouter([
    landingPageRoutes, // This is the landing page routes
    costumeCustomizationRoutes, // This is the costume customization routes
    

])

export default router;