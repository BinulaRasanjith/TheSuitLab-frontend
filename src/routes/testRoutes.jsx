import TestLayout from "../layouts/TestLayout"
import TestOrdersLayout from "../layouts/testOrdersLayout"

const testRoutes = {
    path: '/test',
    element: <TestLayout />,
    children: [
        {
            path: '/test/dashboard',
            element: <h1>Dashboard</h1>
        },
        {
            path: '/test/orders',
            element: <TestOrdersLayout />,
            children: [
                {
                    path: '/test/orders/all',
                    element: <h1>All Orders</h1>
                },
                {
                    path: '/test/orders/collected',
                    element: <h1>Collected Orders</h1>
                },
                {
                    path: '/test/orders/completed',
                    element: <h1>Completed Orders</h1>
                },
                {
                    path: '/test/orders/tobecollected',
                    element: <h1>To Be Canceled Orders</h1>
                },
            ]
        },
        {
            path: '/test/materials',
            element: <h1>Materials</h1>
        },
        {
            path: '/test/reviews',
            element: <h1>Reviews</h1>
        },
        {
            path: '/test/profile',
            element: <h1>Profile</h1>
        },
    ]
}

export default testRoutes