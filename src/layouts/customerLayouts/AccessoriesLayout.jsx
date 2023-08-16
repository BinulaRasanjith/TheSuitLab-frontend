import { GiRolledCloth } from 'react-icons/gi'
import { Outlet } from 'react-router-dom'

import ContentWrapper from '../../components/ContentWrapper'
import Sidebar from '../../components/Sidebar/Sidebar'

const sidebarItems = [
    {
        label: 'Accessories',
        icon: <GiRolledCloth />,
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
                label: 'Bow Ties',
                to: '/customer/accessories/bow-ties',
            },
            {
                label: 'Neck Ties',
                to: '/customer/accessories/neck-ties',
            },

        ]
    }
]

const AccessoriesLayout = () => {
    return (
        <>
            <Sidebar items={sidebarItems} />
            <ContentWrapper customizeLayout>
                <Outlet />
            </ContentWrapper>
        </>
    )
}

export default AccessoriesLayout