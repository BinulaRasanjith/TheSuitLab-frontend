// import CustomerAccessoriesLayout from "../layouts/customerLayouts/CustomerAccessoriesLayout"
// import CustomerCostumeCustomizationLayout from "../layouts/customerLayouts/CustomerCostumeCustomizationLayout"
// import CustomerMainLayout from "../layouts/customerLayouts/CustomerMainLayout"

// import CustomerAccessoriesLayout from "../layouts/customerLayouts/CustomerAccessoriesLayout"
// import CustomerCostumeCustomizationLayout from "../layouts/customerLayouts/CustomerCostumeCustomizationLayout"
import AssistantMainLayout from "../layouts/assiatantLayouts/AssistantMainLayout"

const oaRoutes = {
    path: "/assistant",
    // element: <CustomerMainLayout />,
    element: <AssistantMainLayout />,
    children: [
        { path: "dashboard", element: <div>Dashboard</div> },
        { path: "materials", element: <div>Materials</div> },
        { path: "handover", element: <div>Handover</div> },
        { path: "orders", element: <div>Orders</div> },
        { path: "returns", element: <div>Returns</div> },
        { path: "notification", element: <div>Notification</div> },
        // {
        //     path: "custom-suit",
        //     element: <CustomerCostumeCustomizationLayout />,
        //     children: [
        //         { path: "fabric", element: <div>Fabrics</div> },
        //         { path: "style", element: <div>Styles</div> },
        //         { path: "color-contrast", element: <div>Color contrast</div> },
        //         { path: "measurements", element: <div>Measurements</div> },
        //     ]
        // },
        // {
        //     path: "accessories",
        //     element: <CustomerAccessoriesLayout />,
        //     children: [
        //         { path: "shoes", element: <div>Shoes</div> },
        //         { path: "belts", element: <div>Belts</div> },
        //         { path: "bow-ties", element: <div>Bow ties</div> },
        //         { path: "neck-ties", element: <div>Neck ties</div> },
        //     ]
        // },
        // { path: "cart", element: <div>Cart</div> },
        { path: "profile", element: <div>Profile</div> },
    ],
}

export default oaRoutes