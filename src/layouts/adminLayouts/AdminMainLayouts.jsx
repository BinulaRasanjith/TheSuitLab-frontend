import { HiBriefcase, HiChartBar, HiShoppingCart } from "react-icons/hi"
import { HiHandThumbUp, HiUserCircle } from "react-icons/hi2";
import { Outlet } from "react-router-dom"

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

export default AdminMainLayout