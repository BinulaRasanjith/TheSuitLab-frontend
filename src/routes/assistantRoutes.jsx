
import AssistantMainLayout from "../layouts/assistantLayouts/AssistantMainLayout"
import Dashboard from "../pages/Assistant/Dashboard"
import Materials from "../pages/Assistant/Materials"
import Handover from "../pages/Assistant/Handover"
import Orders from "../pages/Assistant/Orders"
import Returns from "../pages/Assistant/Returns"
import Notifications from "../pages/Assistant/Notifications"
import Profile from "../pages/Assistant/Profile"

const AssistantRoutes = {
    path: "/assistant",
    element: <AssistantMainLayout />,
    children: [
        // { path: "dashboard", element: <div>Dashboard</div> },
        { path: "dashboard", element: <Dashboard /> },
        { path: "materials", element: <Materials /> },
        { path: "handover", element: <Handover /> },
        { path: "orders", element: <Orders /> },
        { path: "returns", element: <Returns /> },
        { path: "notifications", element: <Notifications /> },
        { path: "profile", element: <Profile /> },
    ],
}

export default AssistantRoutes