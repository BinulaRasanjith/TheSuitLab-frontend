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
        to: '/admin/dashboard',
    },
    {
        label: 'Employees',
        icon: <BiSolidBookReader />,
        to: '/admin/employees',
    },
    {
        label: 'Customers',
        icon: <PiShirtFoldedFill />,
        to: '/admin/customer',
        // subItems: [
        //     {
        //         label: 'Fabric',
        //         to: '/customer/custom-suit/fabric',
        //     },
        //     {
        //         label: 'Style',
        //         to: '/customer/custom-suit/style',
        //     },
        //     {
        //         label: 'Color contrast',
        //         to: '/customer/custom-suit/color-contrast',
        //     },
        //     {
        //         label: 'Measurements',
        //         to: '/customer/custom-suit/measurements',
        //     },
        // ]
    },
    {
        label: 'Orders',
        icon: <IoMdBowtie />,
        to: '/admin/orders',
        // subItems: [
        //     {
        //         label: 'Shoes',
        //         to: '/customer/accessories/shoes',
        //     },
        //     {
        //         label: 'Belts',
        //         to: '/customer/accessories/belts',
        //     },
        //     {
        //         label: 'Bow ties',
        //         to: '/customer/accessories/bow-ties',
        //     },
        //     {
        //         label: 'Neck ties',
        //         to: '/customer/accessories/neck-ties',
        //     }
        // ]
    },
    {
        label: 'Reviews',
        icon: <BsFillCartFill />,
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