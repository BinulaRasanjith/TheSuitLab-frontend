import { BiSolidBookReader } from "react-icons/bi"
import { BsFillCartFill } from "react-icons/bs"
import { HiHome, HiUserCircle } from "react-icons/hi2";
import { IoMdBowtie } from "react-icons/io"
import { PiShirtFoldedFill } from "react-icons/pi"
import { Outlet } from "react-router-dom"

import ContentWrapper from "../../components/ContentWrapper"
import MainLayout from "../../components/MainLayout"
import Sidebar from "../../components/Sidebar/Sidebar"

const sidebarItems = [
    {
        label: 'Home',
        icon: <HiHome />,
        to: '/customer/customize/jacket/home',
    },
    {
        label: 'Lookbooks',
        icon: <BiSolidBookReader />,
        to: '/customer/customize/jacket/lookbooks',
    },
    {
        label: 'Custom Suit',
        icon: <PiShirtFoldedFill />,
        to: '/customer/customize/jacket/custom-suit',
        subItems: [
            {
                label: 'Fabric',
                to: '/customer/customize/jacket/custom-suit/fabric',
            },
            {
                label: 'Style',
                to: '/customer/customize/jacket/custom-suit/style',
            },
            {
                label: 'Color contrast',
                to: '/customer/customize/jacket/custom-suit/color-contrast',
            },
            {
                label: 'Measurements',
                to: '/customer/customize/jacket/custom-suit/measurements',
            },
        ]
    },
    {
        label: 'Accessories',
        icon: <IoMdBowtie />,
        to: '/customer/customize/jacket/accessories',
        subItems: [
            {
                label: 'Shoes',
                to: '/customer/customize/jacket/accessories/shoes',
            },
            {
                label: 'Belts',
                to: '/customer/customize/jacket/accessories/belts',
            },
            {
                label: 'Bow ties',
                to: '/customer/customize/jacket/accessories/bow-ties',
            },
            {
                label: 'Neck ties',
                to: '/customer/customize/jacket/accessories/neck-ties',
            }
        ]
    },
    {
        label: 'Cart',
        icon: <BsFillCartFill />,
        to: '/customer/customize/jacket/cart',
    },
    {
        label: 'Profile',
        icon: <HiUserCircle />,
        to: '/customer/customize/jacket/profile',
    },
]

const JacketCustomizationLayout = () => {
    return (
        <>
            <MainLayout>
                <Sidebar items={sidebarItems} />
                <ContentWrapper>
                    <Outlet />
                </ContentWrapper>
            </MainLayout>
        </>
    )
}

export default JacketCustomizationLayout