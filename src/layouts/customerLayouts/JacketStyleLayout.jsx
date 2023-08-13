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
                label: 'View all',
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
        to: '/customer/customize-suit/jacket/style',
        subItems: [
            {
                label: 'Buttons',
                to: '/customer/customize-suit/jacket/style/buttons'
            },
            {
                label: 'Lapel',
                to: '/customer/customize-suit/jacket/style/lapel'
            },
            {
                label: 'Bottom',
                to: '/customer/customize-suit/jacket/style/bottom'
            },
            {
                label: 'Pocket',
                to: '/customer/customize-suit/jacket/style/pocket'
            },
            {
                label: 'Sleeve button',
                to: '/customer/customize-suit/jacket/style/sleeve-button'
            },
            {
                label: 'Vent',
                to: '/customer/customize-suit/jacket/style/vent'
            },
        ]
    },
    {
        label: 'Color contrast',
        to: '/customer/customize-suit/jacket/color-contrast',
        subItems: [
            {
                label: 'Jacket Contrast',
                to: '/customer/customize-suit/jacket/color-contrast/jacket-contrast'
            },
            {
                label: 'Button',
                to: '/customer/customize-suit/jacket/color-contrast/button'
            },
        ]
    },
    {
        label: 'Measurements',
        to: '/customer/customize-suit/jacket/measurements',
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