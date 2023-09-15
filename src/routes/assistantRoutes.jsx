import AssistantMainLayout from "../layouts/assistantLayouts/AssistantMainLayout";
import Accessories from "../pages/Assistant/Accessories";
import Dashboard from "../pages/Assistant/Dashboard";
import Handover from "../pages/Assistant/Handover";
import Hiring from "../pages/Assistant/Hiring";
import Materials from "../pages/Assistant/Materials";
// import Notifications from "../pages/Assistant/Notifications";
import Orders from "../pages/Assistant/Orders";
import Returns from "../pages/Assistant/Returns";
import Profile from "../pages/Profile";

const AssistantRoutes = {
  path: "/assistant",
  element: <AssistantMainLayout />,
  children: [
    // { path: "dashboard", element: <div>Dashboard</div> },
    { path: "", element: <Dashboard /> },
    { path: "materials", element: <Materials /> },
    { path: "handover", element: <Handover /> },
    { path: "orders", element: <Orders /> },
    { path: "returns", element: <Returns /> },
    { path: "accessories", element: <Accessories /> },
    { path: "hiring", element: <Hiring /> },
    // { path: "notifications", element: <Notifications /> },
    { path: "profile", element: <Profile /> },
  ],
};

export default AssistantRoutes;
