import { GiRolledCloth } from "react-icons/gi";
import { PiPantsFill } from "react-icons/pi";
import { SiStylelint } from "react-icons/si";
import { Outlet } from "react-router-dom";

import ContentWrapper from "../../components/ContentWrapper";
import Sidebar from "../../components/Sidebar/Sidebar";

const sidebarItems = [
    {
        label: "Jacket",
        icon: <SiStylelint />,
        to: "/customer/purchase-suit/jacket",
    }, {
        label: "Pant",
        icon: <PiPantsFill />,
        to: "/customer/purchase-suit/pants",
    }, {
        label: "jacket & pant",
        icon: <GiRolledCloth />,
        to: "/customer/purchase-suit/jacket-pant",
    }
];

const PurchaseSuitLayout = () => {
    return (
        <>
            <Sidebar items={sidebarItems} />
            <ContentWrapper customizeLayout>
                <Outlet />
            </ContentWrapper>
        </>
    )
}

export default PurchaseSuitLayout