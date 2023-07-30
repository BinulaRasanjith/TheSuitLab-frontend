import CostumeCustomizationLayout from '../layouts/CostumeCustomizationLayout'
import Dashboard from '../pages/Dashboard'


const costumeCustomizationRoutes = {
    path: '/costume-customization',
    element: <CostumeCustomizationLayout />,
    children: [
        { path: '', element: <Dashboard /> },
    ],
}

export default costumeCustomizationRoutes