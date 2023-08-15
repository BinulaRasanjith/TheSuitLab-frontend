import { BiSolidMessageAltEdit } from "react-icons/bi"
import { BsBarChartFill } from "react-icons/bs"
import { FaUserCircle } from "react-icons/fa"
import { HiColorSwatch } from "react-icons/hi"
import { HiCalendarDays, HiShoppingCart } from "react-icons/hi2"
import { TbArrowBackUp, TbLogout } from "react-icons/tb"
import { Outlet } from "react-router-dom"

import ContentWrapper from "../../components/ContentWrapper";
import MainLayout from "../../components/MainLayout";
// import Navbar from "../../components/TopNavBar/Staffnavbar"
import Navbar from "../../components/Navbar"
// import Sidebar from "../../components/AssistantSidebar"
import Sidebar from "../../components/Sidebar/Sidebar"

const assistantSidebarItems = [
    {
        label: 'Dashboard',
        icon: <BsBarChartFill />,
        to: '/assistant',
    },
    {
        label: 'Materials',
        icon: <HiColorSwatch />,
        to: '/assistant/materials',
    },
    {
        label: 'Handover',
        icon: <HiCalendarDays />,
        to: '/assistant/handover',
    },
    {
        label: 'Orders',
        icon: <HiShoppingCart />,
        to: '/assistant/orders',
    },
    {
        label: 'Returns',
        icon: <TbArrowBackUp />,
        to: '/assistant/returns',
    },
    {
        label: 'Notification',
        icon: <BiSolidMessageAltEdit />,
        to: '/assistant/notification',
    },

    {
        label: 'Profile',
        icon: <FaUserCircle />,
        to: '/assistant/profile',
    },
    {
        label: 'Log Out',
        icon: <TbLogout />,
        to: '/',
    }
]

const AssistantMainLayout = () => {
    // const sidebarIsOpen = useSelector(selectSidebarIsOpen)

    return (
        <>
            <Navbar />
            <MainLayout>
                <Sidebar items={assistantSidebarItems} />
                <ContentWrapper>
                    <Outlet />
                </ContentWrapper>
            </MainLayout>
        </>
    )
}

export default AssistantMainLayout