import { HiBriefcase, HiChartBar, HiShoppingCart } from "react-icons/hi"
import { HiHandThumbUp, HiUserCircle } from "react-icons/hi2";
import { Outlet } from "react-router-dom"

import ContentWrapper from "../../components/ContentWrapper";
import MainLayout from "../../components/MainLayout";
import Navbar from "../../components/Navbar"
import Sidebar from "../../components/Sidebar/Sidebar"


const sidebarItems = [
    {
        label: 'Dashboard',
        icon: <HiChartBar />,
        to: '/admin',
    },
    {
        label: 'Employees',
        icon: <HiBriefcase />,
        to: '/admin/employees',
    },
    // {
    //     label: 'Customers',
    //     icon: <PiShirtFoldedFill />,
    //     to: '/admin/customer',
    // },
    {
        label: 'Orders',
        icon: <HiShoppingCart />,
        to: '/admin/orders',
    },
    {
        label: 'Reviews',
        icon: <HiHandThumbUp />,
        to: '/admin/reviews',
    },
    {
        label: 'Profile',
        icon: <HiUserCircle />,
        to: '/admin/profile',
    },
]

const AdminMainLayout = () => {
    return (
        <>
            <Navbar />
            <MainLayout>
                <Sidebar items={sidebarItems} />
                <ContentWrapper>
                    <Outlet />
                </ContentWrapper>
            </MainLayout>
        </>
    )
}

export default AdminMainLayout