
import AssistantMainLayout from "../layouts/assistantLayouts/AssistantMainLayout"
import OA_Dashboard from "../pages/Assistant/Dashboard"

const oaRoutes = {
    path: "/assistant",
    element: <AssistantMainLayout />,
    children: [
        // { path: "dashboard", element: <div>Dashboard</div> },
        { path: "dashboard", element: <OA_Dashboard /> },
        { path: "materials", element: <div>Materials</div> },
        { path: "handover", element: <div>Handover</div> },
        { path: "orders", element: <div>Orders</div> },
        { path: "returns", element: <div>Returns</div> },
        { path: "notifications", element: <div>Notifications</div> },
        { path: "profile", element: <div>Profile</div> },
    ],
}

export default oaRoutes