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
        label: 'Home',
        icon: <HiHome />,
        to: '/customer/home',
    },
    {
        label: 'Lookbooks',
        icon: <BiSolidBookReader />,
        to: '/customer/lookbooks',
    },
    {
        label: 'Custom Suit',
        icon: <PiShirtFoldedFill />,
        to: '/customer/custom-suit',
        subItems: [
            {
                label: 'Fabric',
                to: '/customer/custom-suit/fabric',
            },
            {
                label: 'Style',
                to: '/customer/custom-suit/style',
            },
            {
                label: 'Color contrast',
                to: '/customer/custom-suit/color-contrast',
            },
            {
                label: 'Measurements',
                to: '/customer/custom-suit/measurements',
            },
        ]
    },
    {
        label: 'Accessories',
        icon: <IoMdBowtie />,
        to: '/customer/accessories',
        subItems: [
            {
                label: 'Shoes',
                to: '/customer/accessories/shoes',
            },
            {
                label: 'Belts',
                to: '/customer/accessories/belts',
            },
            {
                label: 'Bow ties',
                to: '/customer/accessories/bow-ties',
            },
            {
                label: 'Neck ties',
                to: '/customer/accessories/neck-ties',
            }
        ]
    },
    {
        label: 'Cart',
        icon: <BsFillCartFill />,
        to: '/customer/cart',
    },
    {
        label: 'Profile',
        icon: <HiUserCircle />,
        to: '/customer/profile',
    },
]

const CustomerMainLayout = () => {
    // const sidebarIsOpen = useSelector(selectSidebarIsOpen)

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

export default CustomerMainLayout