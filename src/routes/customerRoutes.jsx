import BeltsGallery from "../components/Customer/BeltsGallery"
import BowsGallery from "../components/Customer/BowsGallery"
import ChooseBottom from "../components/Customer/ChooseBottom"
import ChooseButtonContrast from "../components/Customer/ChooseButtonContrast"
import ChooseButtons from "../components/Customer/ChooseButtons"
import ChooseJacketContrast from "../components/Customer/ChooseJacketContrast"
import ChooseLapels from "../components/Customer/ChooseLapels"
import ChooseMeasurements from "../components/Customer/ChooseMeasurements"
import ChoosePocket from "../components/Customer/ChoosePocket"
import ChooseSleeveButtons from "../components/Customer/ChooseSleeveButtons"
import ChooseVent from "../components/Customer/ChooseVent"
import Materials_PureLinen from "../components/Customer/Materials_PureLinen"
import Materials_PureWool from "../components/Customer/Materials_PureWool"
import Materials_SolidColors from "../components/Customer/Materials_SolidColors"
import Materials_ViewAll from "../components/Customer/Materials_ViewAll"
import Materials_patterns from "../components/Customer/Materials_patterns"
import ShoesGallery from "../components/Customer/ShoesGallery"
import NecktiesGallery from "../components/Customer/TiesGallery"
import BeltsLayout from "../layouts/customerLayouts/BeltsLayout"
import BowsLayout from "../layouts/customerLayouts/BowsLayout"
import CustomerAccessoriesLayout from "../layouts/customerLayouts/CustomerAccessoriesLayout"
import CustomerCostumeCustomizationLayout from "../layouts/customerLayouts/CustomerCostumeCustomizationLayout"
import CustomerMainLayout from "../layouts/customerLayouts/CustomerMainLayout"
import CustomerPantAndJacketCustomizeLandingLayout from "../layouts/customerLayouts/CustomerPantAndJacketCustomizeLandingLayout"
import JacketColorContrastLayout from "../layouts/customerLayouts/JacketColorContrastLayout"
import JacketCustomizationLayout from "../layouts/customerLayouts/JacketCustomizationLayout"
import JacketFabricLayout from "../layouts/customerLayouts/JacketFabricLayout"
import JacketStyleLayout from "../layouts/customerLayouts/JacketStyleLayout"
import NecktiesLayout from "../layouts/customerLayouts/NecktiesLayout"
import ShoesLayout from "../layouts/customerLayouts/ShoesLayout"
import Home from "../pages/Home"
import LookBook from "../pages/customer/LookBook"
import SuitCustomizationLanding from "../pages/customer/SuitCustomizationLanding"



const costumerRoutes = {
    path: "/customer",
    element: <CustomerMainLayout />,
    children: [
        {
            path: '',
            element: <Home />
        }, {
            path: 'customize', element: <CustomerPantAndJacketCustomizeLandingLayout />,
            children: [
                { path: '', element: <SuitCustomizationLanding /> },
                {
                    path: 'jacket', element: <JacketCustomizationLayout />,
                    children: [
                        { path: "", element: <Home /> },
                        { path: "home", element: <Home /> },
                        { path: "lookbooks", element: <LookBook /> },
                        {
                            path: "custom-suit",
                            element: <CustomerCostumeCustomizationLayout />,
                            children: [
                                {
                                    path: "fabric", element: <JacketFabricLayout />,
                                    children: [
                                        { path: "", element: <Materials_ViewAll /> },
                                        { path: "view-all", element: <Materials_ViewAll /> },
                                        { path: "solid-colors", element: <Materials_SolidColors /> },
                                        { path: "patterns", element: <Materials_patterns /> },
                                        { path: "pure-linen", element: <Materials_PureLinen /> },
                                        { path: "pure-wool", element: <Materials_PureWool /> },

                                    ]
                                },
                                {
                                    path: "style", element: <JacketStyleLayout />,
                                    children: [
                                        { path: "", element: <ChooseButtons /> },
                                        { path: "buttons", element: <ChooseButtons /> },
                                        { path: "bottom", element: <ChooseBottom /> },
                                        { path: "lapels", element: <ChooseLapels /> },
                                        { path: "pockets", element: <ChoosePocket /> },
                                        { path: "sleeve-buttons", element: <ChooseSleeveButtons /> },
                                        { path: "vents", element: <ChooseVent /> },
                                    ]
                                },
                                {
                                    path: "color-contrast", element: <JacketColorContrastLayout />,
                                    children: [
                                        { path: "", element: <ChooseJacketContrast /> },
                                        { path: "jacket-contrast", element: <ChooseJacketContrast /> },
                                        { path: "button-contrast", element: <ChooseButtonContrast /> }
                                    ]
                                },
                                { path: "measurements", element: <ChooseMeasurements /> },
                            ]
                        },
                        {
                            path: "accessories",
                            element: <CustomerAccessoriesLayout />,
                            children: [
                                {
                                    path: "shoes", element: <ShoesLayout />,
                                    children: [
                                        { path: "", element: <ShoesGallery /> },
                                    ]
                                },
                                {
                                    path: "belts", element: <BeltsLayout />,
                                    children: [{ path: "", element: <BeltsGallery /> }
                                    ]
                                },
                                {
                                    path: "bow-ties", element: <BowsLayout />,
                                    children: [{ path: "", element: <BowsGallery /> }
                                    ]
                                },
                                {
                                    path: "neck-ties", element: <NecktiesLayout />,
                                    children: [{ path: "", element: <NecktiesGallery /> }
                                    ]
                                },
                            ]
                        },
                        { path: "cart", element: <div>Cart</div> },
                        { path: "profile", element: <div>Profile</div> },
                    ]
                },

            ]
        },
        // 
    ],
}

export default costumerRoutes