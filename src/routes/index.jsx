import { createBrowserRouter } from "react-router-dom";

import adminRoutes from "./adminRoutes";
import assistantRoutes from "./assistantRoutes";
import customerRoutes from "./customerRoutes";
import landingPageRoutes from "./landingPageRoutes";
import managerRoutes from "./managerRoutes";
import tailorRoutes from "./tailorRoutes";

const router = createBrowserRouter([
	landingPageRoutes,
	customerRoutes,
	tailorRoutes,
	adminRoutes,
	assistantRoutes,
	managerRoutes,
]);

export default router;
