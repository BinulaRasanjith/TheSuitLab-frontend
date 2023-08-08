// import { BiSolidBookReader } from "react-icons/bs"
import { HiColorSwatch } from "react-icons/hi"
import { HiCalendarDays } from "react-icons/hi2";
import { HiShoppingCart } from "react-icons/hi2"
// import { TbArrowBackUp } from "react-icons/pi"
import { BiSolidMessageAltEdit } from "react-icons/bi"
import { FaUserCircle } from "react-icons/fa"

import { Outlet } from "react-router-dom"

import Navbar from "../../components/TopNavBar/Staffnavbar"
import Sidebar from "../../components/oaSidebar"

const oasidebarItems = [
    {
        label: 'Dashboard',
        icon: <HiShoppingCart />,
        to: '/assistant/dashboard',
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
        icon: <HiShoppingCart />,
        to: '/assistant/returns',
    },
    {
        label: 'Notification',
        icon: <BiSolidMessageAltEdit />,
        to: '/assistant/notification',
    },
    // {
    //     label: 'Custom Suit',
    //     icon: <PiShirtFoldedFill />,
    //     to: '/assistant/custom-suit',
    //     subItems: [
    //         {
    //             label: 'Fabric',
    //             to: '/assistant/custom-suit/fabric',
    //         },
    //         {
    //             label: 'Style',
    //             to: '/assistant/custom-suit/style',
    //         },
    //         {
    //             label: 'Color contrast',
    //             to: '/assistant/custom-suit/color-contrast',
    //         },
    //         {
    //             label: 'Measurements',
    //             to: '/assistant/custom-suit/measurements',
    //         },
    //     ]
    // },
    // {
    //     label: 'Accessories',
    //     icon: <IoMdBowtie />,
    //     to: '/assistant/accessories',
    //     subItems: [
    //         {
    //             label: 'Shoes',
    //             to: '/assistant/accessories/shoes',
    //         },
    //         {
    //             label: 'Belts',
    //             to: '/assistant/accessories/belts',
    //         },
    //         {
    //             label: 'Bow ties',
    //             to: '/assistant/accessories/bow-ties',
    //         },
    //         {
    //             label: 'Neck ties',
    //             to: '/assistant/accessories/neck-ties',
    //         }
    //     ]
    // },
    // {
    //     label: 'Cart',
    //     icon: <BsFillCartFill />,
    //     to: '/assistant/cart',
    // },
    {
        label: 'Profile',
        icon: <FaUserCircle />,
        to: '/assistant/profile',
    },
]

const AssistantMainLayout = () => {
    // const sidebarIsOpen = useSelector(selectSidebarIsOpen)

    return (
        <>
            <Navbar />
            <main className="flex min-h-screen w-screen pt-16 transition-all ease-in-out duration-300">
                <Sidebar items={oasidebarItems} />
                <div className="block transition-all w-full ease-in-out duration-300" id="main-left">
                    <Outlet />
                </div>
            </main>
        </>
    )
}

export default AssistantMainLayout