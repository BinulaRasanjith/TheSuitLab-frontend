import SingleOutletLayout from "../layouts/SingleOutletLayout"
import TailorMainLayout from "../layouts/tailorLayouts/TailorMainLayout"
import Fabrics from "../pages/tailor/Fabrics"
import Buttons from "../pages/tailor/Buttons"

const tailorRoutes = {
    path: '/tailor',
    element: <TailorMainLayout />,
    children: [
        {
            path: 'dashboard',
            element: <h1>Dashboard</h1>
        },
        {
            path: 'orders',
            element: <SingleOutletLayout />,
            children: [
                {
                    path: 'all',
                    element: <h1>All Orders</h1>
                },
                {
                    path: 'collected',
                    element: <h1>Collected Orders</h1>
                },
                {
                    path: 'completed',
                    element: <h1>Completed Orders</h1>
                },
                {
                    path: 'to-be-collected',
                    element: <h1>To Be Canceled Orders</h1>
                },
            ]
        },
        {
            path: 'materials',
            element: <SingleOutletLayout />,
            children: [
                {
                    path: 'Fabric',
                    element: <Fabrics />
                },
                {
                    path: 'Strings',
                    element: <h1>String</h1>
                },
                {
                    path: 'Buttons',
                    element: <Buttons />
                },
            ]
        },
        {
            path: 'reviews',
            element: <h1>Reviews</h1>
        },
        {
            path: 'profile',
            element: <h1>Profile</h1>
        },
    ]
}

export default tailorRoutes