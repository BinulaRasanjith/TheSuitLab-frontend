import CustomerAccessoriesLayout from "../layouts/customerLayouts/CustomerAccessoriesLayout"
import CustomerCostumeCustomizationLayout from "../layouts/customerLayouts/CustomerCostumeCustomizationLayout"
import CustomerMainLayout from "../layouts/customerLayouts/CustomerMainLayout"

const costumerRoutes = {
    path: "/customer",
    element: <CustomerMainLayout />,
    children: [
        { path: "home", element: <div>Home</div> },
        { path: "lookbooks", element: <div>Lookbooks</div> },
        {
            path: "custom-suit",
            element: <CustomerCostumeCustomizationLayout />,
            children: [
                { path: "fabric", element: <div>Fabrics</div> },
                { path: "style", element: <div>Styles</div> },
                { path: "color-contrast", element: <div>Color contrast</div> },
                { path: "measurements", element: <div>Measurements</div> },
            ]
        },
        {
            path: "accessories",
            element: <CustomerAccessoriesLayout />,
            children: [
                { path: "shoes", element: <div>Shoes</div> },
                { path: "belts", element: <div>Belts</div> },
                { path: "bow-ties", element: <div>Bow ties</div> },
                { path: "neck-ties", element: <div>Neck ties</div> },
            ]
        },
        { path: "cart", element: <div>Cart</div> },
        { path: "profile", element: <div>Profile</div> },
    ],
}

export default costumerRoutes