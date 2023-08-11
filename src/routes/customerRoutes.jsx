import Materials_PureLinen from "../components/customer/Materials_PureLinen"
import Materials_PureWool from "../components/customer/Materials_PureWool"
import Materials_SolidColors from "../components/customer/Materials_SolidColors"
import Materials_ViewAll from "../components/customer/Materials_ViewAll"
import Materials_patterns from "../components/customer/Materials_patterns"
import SingleOutletLayout from "../layouts/SingleOutletLayout"
import CustomerMainLayout from "../layouts/customerLayouts/CustomerMainLayout"
import JacketStyleLayout from "../layouts/customerLayouts/JacketStyleLayout"
import Home from "../pages/customer/Home"
import LookBook from "../pages/customer/LookBook"
import SuitCustomizationLanding from "../pages/customer/SuitCustomizationLanding"

// TODO: complete the navigation routes
const costumerRoutes = {
    path: "/customer",
    element: <CustomerMainLayout />,
    children: [
        {
            path: '',
            element: <Home />
        },
        {
            path: 'lookbook',
            element: <LookBook />
        },
        {
            path: 'profile',
            element: <div>Profile</div>
        },
        {
            path: 'customize-suit',
            element: <SuitCustomizationLanding />
        },
        {
            path: 'customize-suit/jacket',
            element: <JacketStyleLayout />,
            children: [
                {
                    path: 'fabric',
                    element: <SingleOutletLayout />,
                    children: [
                        {
                            path: 'all',
                            element: <Materials_ViewAll />,
                        },
                        {
                            path: 'solid-colors',
                            element: <Materials_SolidColors />,
                        },
                        {
                            path: 'patterns',
                            element: <Materials_patterns />,
                        },
                        {
                            path: 'pure-linen',
                            element: <Materials_PureLinen />,
                        },
                        {
                            path: 'pure-wool',
                            element: <Materials_PureWool />,
                        },
                    ]
                }

            ]
        },
        {
            path: 'customize-suit/pant',
            element: <div>Style Pant</div>
        }
    ]
}


export default costumerRoutes