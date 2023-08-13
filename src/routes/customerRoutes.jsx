import Materials_PureLinen from "../components/Customer/Materials_PureLinen"
import ChooseBottom from "../components/customer/ChooseBottom"
import ChooseButtonContrast from "../components/customer/ChooseButtonContrast"
import ChooseButtons from "../components/customer/ChooseButtons"
import ChooseJacketContrast from "../components/customer/ChooseJacketContrast"
import ChooseLapel from "../components/customer/ChooseLapels"
import ChooseMeasurements from "../components/customer/ChooseMeasurements"
import ChoosePockets from "../components/customer/ChoosePocket"
import ChooseSleeveButtons from "../components/customer/ChooseSleeveButtons"
import ChooseVents from "../components/customer/ChooseVent"
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
                }, {
                    path: 'style',
                    element: <SingleOutletLayout />,
                    children: [
                        {
                            path: 'buttons',
                            element: <ChooseButtons />,
                        },
                        {
                            path: 'lapel',
                            element: <ChooseLapel />,
                        },
                        {
                            path: 'bottom',
                            element: <ChooseBottom />,
                        },
                        {
                            path: 'pocket',
                            element: <ChoosePockets />,
                        },
                        {
                            path: 'sleeve-button',
                            element: <ChooseSleeveButtons />,
                        },
                        {
                            path: 'vent',
                            element: <ChooseVents />,

                        }
                    ]
                }, {
                    path: 'color-contrast',
                    element: <SingleOutletLayout />,
                    children: [
                        {
                            path: 'jacket-contrast',
                            element: <ChooseJacketContrast />
                        },
                        {
                            path: 'button',
                            element: <ChooseButtonContrast />
                        }
                    ]

                }, {
                    path: 'measurements',
                    element: <ChooseMeasurements />
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