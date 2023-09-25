import { BiSolidColor } from "react-icons/bi";
import { GiRolledCloth } from "react-icons/gi";
import { PiPantsFill } from "react-icons/pi";
import { SiStylelint } from "react-icons/si";
import { TbRulerMeasure } from "react-icons/tb";
import { Outlet } from "react-router-dom";

import ContentWrapper from "../../components/ContentWrapper";
import CostumeModel from "../../components/Customer/CostumeModel";
// import WholeCostume from "../../components/Customer/WholeCostume";
import Sidebar from "../../components/Sidebar/Sidebar";

const sidebarItems = [
    {
        label: "Fabric",
        icon: <GiRolledCloth />,
        to: "/customer/customize-suit/costume/fabric",
        subItems: [
            {
                label: "Solid",
                to: "/customer/customize-suit/costume/fabric/solid",
            },
            {
                label: "Pattern",
                to: "/customer/customize-suit/costume/fabric/pattern",
            },
        ],
    },
    {
        label: "Jacket",
        icon: <SiStylelint />,
        to: "/customer/customize-suit/costume/jacket",
        subItems: [
            {
                label: "Buttons",
                to: "/customer/customize-suit/costume/jacket/buttons",
            },
            {
                label: "Lapel",
                to: "/customer/customize-suit/costume/jacket/lapel",
            },
            {
                label: "Pocket",
                to: "/customer/customize-suit/costume/jacket/pocket",
            },
            {
                label: "Sleeve button",
                to: "/customer/customize-suit/costume/jacket/sleeve-button",
            },
        ],
    },
    {
        label: "Pant",
        icon: <PiPantsFill />,
        to: "/customer/customize-suit/costume/pant",
        subItems: [
            {
                label: 'Pant Style',
                to: '/customer/customize-suit/costume/pant/pant-style'
            },
            {
                label: 'Back Pocket',
                to: '/customer/customize-suit/costume/pant/back-pocket'
            },
        ]
    },
    {
        label: "Color contrast",
        icon: <BiSolidColor />,
        to: "/customer/customize-suit/costume/color-contrast",
        subItems: [
            {
                label: "Pocket",
                to: "/customer/customize-suit/costume/color-contrast/pocket",
            },
            {
                label: "Button",
                to: "/customer/customize-suit/costume/color-contrast/button",
            },
        ],
    },
    {
        label: "Measurements",
        icon: <TbRulerMeasure />,
        to: "/customer/customize-suit/costume/measurements",
    },
];

const CostumeCustomizationLayout = () => {
    return (
        <>
            <Sidebar items={sidebarItems} />
            <ContentWrapper customizeLayout>
                <div className='w-1/2 h-full overflow-y-auto scroll-m-1'>
                    <Outlet />
                </div>
                <CostumeModel />
            </ContentWrapper>
        </>
    )
}

export default CostumeCustomizationLayout