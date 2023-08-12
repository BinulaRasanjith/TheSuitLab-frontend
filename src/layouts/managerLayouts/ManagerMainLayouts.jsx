import { BiSolidBookReader } from "react-icons/bi"
import { HiUserGroup, HiChartBar, HiShoppingCart, HiCreditCard } from "react-icons/hi"
import { HiHandThumbUp,HiUserCircle } from "react-icons/hi2";
import { IoMdBowtie } from "react-icons/io"
import { Outlet } from "react-router-dom"

import Navbar from "../../components/Navbar"
import Sidebar from "../../components/Sidebar/Sidebar"

const sidebarItems = [
    {
        label: 'Dashboard',
        icon: <HiChartBar />,
        to: '/manager',
    },
    {
        label: 'Materials',
        icon: <IoMdBowtie />,
        to: '/manager/materials',
        subItems: [
            {
                label: 'Fabric',
                to: '/manager/materials/fabric',
            },
            {
                label: 'String',
                to: '/manager/materials/string',
            },
            {
                label: 'Buttons',
                to: '/manager/materials/buttons',
            },
        ]
    },
    {
        label: 'Orders',
        icon: <HiShoppingCart />,
        to: '/manager/orders',   
    },
    {
        label: 'Suppliers',
        icon: <HiUserGroup />,
        to: '/manager/suppliers',
    },
    {
        label: 'Payments',
        icon: <HiCreditCard />,
        to: '/manager/payments',
    },
    {
        label: 'Customers',
        icon: <HiUserGroup />,
        to: '/manager/customer',
    },
    {
        label: 'Reviews',
        icon: <HiHandThumbUp />,
        to: '/manager/reviews',
    },
    {
        label: 'Profile',
        icon: <HiUserCircle />,
        to: '/manager/profile',
    },
]

const ManagerMainLayout = () => {
    // const sidebarIsOpen = useSelector(selectSidebarIsOpen)

    return (
        <>
            <Navbar />
            <main className="flex min-h-screen w-screen pt-16 transition-all ease-in-out duration-300">
                <Sidebar items={sidebarItems} />
                <div className="block transition-all w-full ease-in-out duration-300" id="main-left">
                    <Outlet />
                </div>
            </main>
        </>
    )
}

export default ManagerMainLayout