import { FaAccessibleIcon } from 'react-icons/fa'
import { Outlet } from 'react-router-dom'

import ContentWrapper from '../../components/ContentWrapper'
import UpperModel from '../../components/Customer/UpperModel'
import Sidebar from '../../components/Sidebar/Sidebar'

const sidebarItems = [
    {
        label: 'Fabric',
        icon: <FaAccessibleIcon />,
        to: '/customer/customize-suit/jacket/fabric',
        subItems: [
            {
                label: 'All',
                to: '/customer/customize-suit/jacket/fabric/all',
            },
            {
                label: 'Solid colors',
                to: '/customer/customize-suit/jacket/fabric/solid-colors',
            },
            {
                label: 'Patterns',
                to: '/customer/customize-suit/jacket/fabric/patterns',
            },
            {
                label: 'Pure linen',
                to: '/customer/customize-suit/jacket/fabric/pure-linen',
            },
            {
                label: 'Pure wool',
                to: '/customer/customize-suit/jacket/fabric/pure-wool',
            },
        ]
    },
    {
        label: 'Style',
        to: '/customer/customize/jacket/style',
        subItems: [
            {
                label: 'Buttons',
                to: '/customer/customize/jacket/style/button'
            },
            {
                label: 'Lapel',
                to: '/customer/customize/jacket/style/lapel'
            },
            {
                label: 'Bottom',
                to: '/customer/customize/jacket/style/bottom'
            },
            {
                label: 'Pocket',
                to: '/customer/customize/jacket/style/pocket'
            },
            {
                label: 'Sleeve button',
                to: '/customer/customize/jacket/style/sleeve-button'
            },
            {
                label: 'Vent',
                to: '/customer/customize/jacket/style/vent'
            },
        ]
    },
    {
        label: 'Color contrast',
        to: '/customer/customize/jacket/color-contrast',
        subItems: [
            {
                label: 'Jacket Contrast',
                to: '/customer/customize/jacket/color-contrast/jacket-contrast'
            },
            {
                label: 'Button',
                to: '/customer/customize/jacket/color-contrast/button'
            },
        ]
    },
    {
        label: 'Measurements',
        to: '/customer/customize/jacket/measurements',
    },
]

const JacketStyleLayout = () => {
    return (
        <div className='flex'>
            <Sidebar items={sidebarItems} />
            <ContentWrapper customizeLayout>
                <Outlet />
                <UpperModel />
            </ContentWrapper>
        </div>
    )
}

export default JacketStyleLayout