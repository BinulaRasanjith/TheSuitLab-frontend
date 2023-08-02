import { HiChartBar, HiColorSwatch, HiShoppingCart } from "react-icons/hi"
import { HiHandThumbUp, HiUserCircle } from "react-icons/hi2";
import { Outlet } from "react-router-dom"

import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar/Sidebar"

const sidebarItems = [
    {
        label: 'Dashboard',
        icon: <HiChartBar />,
        to: '/test/dashboard',
    },
    {
        label: 'Orders',
        icon: <HiShoppingCart />,
        to: '/test/orders',
        subItems: [
            {
                label: 'All',
                to: '/test/orders/all',
            },
            {
                label: 'Collected',
                to: '/test/orders/collected',
            },
            {
                label: 'Completed',
                to: '/test/orders/completed',
            },
            {
                label: 'To be collected',
                to: '/test/orders/to-be-collected',
            },
        ]
    },
    {
        label: 'Materials',
        icon: <HiColorSwatch />,
        to: '/test/materials',
    },
    {
        label: 'Reviews',
        icon: <HiHandThumbUp />,
        to: '/test/reviews',
    },
    {
        label: 'Profile',
        icon: <HiUserCircle />,
        to: '/test/profile',
    },
]

const TestLayout = () => {

    return (
        <>
            <Navbar />
            <main className="flex min-h-screen w-screen pt-16 transition-all ease-in-out duration-300">
                <Sidebar items={sidebarItems} />
                <div className="block transition-all ease-in-out duration-300" id="main-left">
                    <Outlet />
                </div>
            </main>
        </>
    )
}

export default TestLayout