import { GiBelt } from 'react-icons/gi'
import { GiConverseShoe } from 'react-icons/gi'
import { TbTie } from 'react-icons/tb'
import { Outlet } from 'react-router-dom'

import ContentWrapper from '../../components/ContentWrapper'
import Sidebar from '../../components/Sidebar/Sidebar'


const sidebarItems = [
    {
        label: 'Shoes',
        icon: <GiConverseShoe />,
        to: '/customer/accessories/shoes',
    },
    {
        label: 'Belts',
        icon: <GiBelt />,
        to: '/customer/accessories/belts',
    },
    {
        label: 'Ties',
        icon: <TbTie />,
        to: '/customer/accessories/ties',
    },
];

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