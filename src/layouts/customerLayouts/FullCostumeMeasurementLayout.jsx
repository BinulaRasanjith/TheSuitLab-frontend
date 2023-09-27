import { useEffect } from "react";
import { BiSolidColor } from "react-icons/bi";
import { GiRolledCloth } from "react-icons/gi";
import { PiPantsFill } from "react-icons/pi";
import { SiStylelint } from "react-icons/si";
import { TbRulerMeasure } from "react-icons/tb";
import { Outlet } from "react-router-dom";

import ContentWrapper from "../../components/ContentWrapper";
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

const FullCostumeMeasurementLayout = () => {

    // This function will be called when the user attempts to refresh the page
    const handleBeforeUnload = (e) => {
        e.preventDefault();
        e.returnValue = ''; // This text will be displayed in the confirmation dialog

        // You can customize the warning message here
        const confirmationMessage = 'Are you sure you want to leave this page?';

        // Display a confirmation dialog
        if (window.confirm(confirmationMessage)) {
            // The user clicked "OK," so allow the refresh
            e.returnValue = undefined;
        } else {
            // The user clicked "Cancel," so prevent the refresh
            e.returnValue = '';
        }
    };

    useEffect(() => {
        // Add the beforeunload event listener when the component mounts
        window.addEventListener('beforeunload', handleBeforeUnload);

        // Remove the beforeunload event listener when the component unmounts
        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, []);


    return (
        <>
            <Sidebar items={sidebarItems} />
            <ContentWrapper>
                <Outlet />

            </ContentWrapper>
        </>
    )
}

export default FullCostumeMeasurementLayout