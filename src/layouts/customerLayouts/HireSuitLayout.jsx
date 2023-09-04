import { GiRolledCloth } from 'react-icons/gi'
import { Outlet } from 'react-router-dom'

import ContentWrapper from '../../components/ContentWrapper'
import Sidebar from '../../components/Sidebar/Sidebar'

const sidebarItems = [
    {
        label: 'Hire Suit',
        icon: <GiRolledCloth />,
        to: '/customer/hire-suit',
        subItems: [
            {
                label: 'Jacket',
                to: '/customer/hire-suit/jackets',
            },
            {
                label: 'Pant',
                to: '/customer/hire-suit/pants',
            },
            // {
            //     label: 'Bow Ties',
            //     to: '/customer/accessories/bow-ties',
            // },
            // {
            //     label: 'Neck Ties',
            //     to: '/customer/accessories/neck-ties',
            // },

        ]
    }
]

const HireSuitLayout = () => {
    return (
        <>
            <Sidebar items={sidebarItems} />
            <ContentWrapper customizeLayout>
                <Outlet />
            </ContentWrapper>
        </>
    )
}

export default HireSuitLayout