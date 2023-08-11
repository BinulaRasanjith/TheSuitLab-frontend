import { BiSolidBookReader } from "react-icons/bi"
import { BsFillCartFill } from "react-icons/bs"
import { HiHome, HiUserCircle } from "react-icons/hi2";
import { IoMdBowtie } from "react-icons/io"
import { PiShirtFoldedFill } from "react-icons/pi"
import { Outlet } from "react-router-dom"

import Navbar from "../../components/Navbar"
import Sidebar from "../../components/Sidebar/Sidebar"


const sidebarItems = [
    {
        label: 'Dashboard',
        icon: <HiHome />,
        to: '/manager/dashboard',
    },
    {
        label: 'Employees',
        icon: <BiSolidBookReader />,
        to: '/manager/employees',
    },
    {
        label: 'Customers',
        icon: <PiShirtFoldedFill />,
        to: '/manager/customer',
    },
    {
        label: 'Orders',
        icon: <IoMdBowtie />,
        to: '/manager/orders',
    },
    {
        label: 'Reviews',
        icon: <BsFillCartFill />,
        to: '/manager/test',
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