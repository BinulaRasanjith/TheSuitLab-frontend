import Reviews from "../components/Reviews";
import AssistantMainLayout from "../layouts/assistantLayouts/AssistantMainLayout";
import Accessories from "../pages/Assistant/Accessories";
import AccessoryInfo from "../pages/Assistant/AccessoryInfo";
import Customers from "../pages/Assistant/Customers";
import Dashboard from "../pages/Assistant/Dashboard";
import Handover from "../pages/Assistant/Handover";
import HiringCostume from "../pages/Assistant/HireCostumeInfo";
import Hiring from "../pages/Assistant/Hiring";
import Materials from "../pages/Assistant/Materials";
import Orders from "../pages/Assistant/Orders";
import Returns from "../pages/Assistant/Returns";
import Profile from "../pages/Profile";

const AssistantRoutes = {
  path: "/assistant",
  element: <AssistantMainLayout />,
  children: [
    { path: "", element: <Dashboard /> },
    { path: "materials", element: <Materials /> },
    { path: "handover", element: <Handover /> },
    { path: "orders", element: <Orders /> },
    { path: "customers", element: <Customers /> },
    { path: "returns", element: <Returns /> },
    { path: "accessories", element: <Accessories /> },
    { path: "hiring", element: <Hiring /> },
    { path: "hiring/:id", element: <HiringCostume /> },
    { path: "accessories/:id", element: <AccessoryInfo /> },
    { path: "profile", element: <Profile /> },
    { path: "reviews", element: <Reviews /> },
  ],
};

export default AssistantRoutes;