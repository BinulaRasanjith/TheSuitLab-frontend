import { BiSolidColor } from "react-icons/bi";
import { GiRolledCloth } from "react-icons/gi";
import { SiStylelint } from "react-icons/si";
import { TbRulerMeasure } from "react-icons/tb";
import { Outlet } from "react-router-dom";

import ContentWrapper from "../../components/ContentWrapper";
import Sidebar from "../../components/Sidebar/Sidebar";

const sidebarItems = [
    {
        label: "Fabric",
        icon: <GiRolledCloth />,
        to: "/customer/customize-suit/jacket/fabric",
    },
    {
        label: "Style",
        icon: <SiStylelint />,
        to: "/customer/customize-suit/jacket/style",
        subItems: [
            {
                label: "Buttons",
                to: "/customer/customize-suit/jacket/style/buttons",
            },
            {
                label: "Lapel",
                to: "/customer/customize-suit/jacket/style/lapel",
            },
            {
                label: "Bottom",
                to: "/customer/customize-suit/jacket/style/bottom",
            },
            {
                label: "Pocket",
                to: "/customer/customize-suit/jacket/style/pocket",
            },
            {
                label: "Sleeve button",
                to: "/customer/customize-suit/jacket/style/sleeve-button",
            },
            {
                label: "Vent",
                to: "/customer/customize-suit/jacket/style/vent",
            },
        ],
    },
    {
        label: "Color contrast",
        icon: <BiSolidColor />,
        to: "/customer/customize-suit/jacket/color-contrast",
        subItems: [
            {
                label: "Jacket Contrast",
                to: "/customer/customize-suit/jacket/color-contrast/pocket",
            },
            {
                label: "Button",
                to: "/customer/customize-suit/jacket/color-contrast/button",
            },
        ]
    },
    {
        label: "Measurements",
        icon: <TbRulerMeasure />,
        to: "/customer/customize-suit/jacket/measurements",
    },
];

const JacketMeasurementLayout = () => {
    return (
        <>
            <Sidebar items={sidebarItems} />
            <ContentWrapper>
                <Outlet />

            </ContentWrapper>
        </>
    )
}

export default JacketMeasurementLayout