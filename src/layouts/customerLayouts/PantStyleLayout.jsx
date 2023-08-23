import { BiSolidColor } from 'react-icons/bi'
import { GiRolledCloth } from 'react-icons/gi'
import { SiStylelint } from 'react-icons/si'
import { TbRulerMeasure } from 'react-icons/tb'
import { Outlet } from 'react-router-dom'

import ContentWrapper from '../../components/ContentWrapper'
import PantModel from '../../components/Customer/PantModel'
import Sidebar from '../../components/Sidebar/Sidebar'

const sidebarItems = [
    {
        label: 'Fabric',
        icon: <GiRolledCloth />,
        to: '/customer/customize-suit/pant/fabric',
    },
    {
        label: 'Style',
        icon: <SiStylelint />,
        to: '/customer/customize-suit/pant/style',
        subItems: [
            {
                label: 'Pant Style',
                to: '/customer/customize-suit/pant/style/pant-style'
            },
            {
                label: 'Pleat',
                to: '/customer/customize-suit/pant/style/pleat'
            },
            {
                label: 'Pant Pocket',
                to: '/customer/customize-suit/pant/style/pant-pocket'
            },
            {
                label: 'Back Pocket',
                to: '/customer/customize-suit/pant/style/back-pocket'
            },
            {
                label: 'Belt Loop',
                to: '/customer/customize-suit/pant/style/belt-loop'
            },
            {
                label: 'Cuff',
                to: '/customer/customize-suit/pant/style/cuff'
            },
        ]
    },
    {
        label: 'Color contrast',
        icon: <BiSolidColor />,
        to: '/customer/customize-suit/pant/color-contrast',
        subItems: [
            {
                label: 'Pant Contrast',
                to: '/customer/customize-suit/pant/color-contrast/pant-contrast'
            },
            {
                label: 'Button Contrast',
                to: '/customer/customize-suit/pant/color-contrast/button-color'
            },
        ]
    },
    {
        label: 'Measurements',
        icon: <TbRulerMeasure />,
        to: '/customer/customize-suit/pant/measurements',
    },
]

const PantStyleLayout = () => {
    return (
        <>
            <Sidebar items={sidebarItems} />
            <ContentWrapper customizeLayout>
                <div className='w-1/2 h-full overflow-y-auto scroll-m-1'>
                    <Outlet />
                </div>
                <PantModel />
            </ContentWrapper>
        </>
    )
}

export default PantStyleLayout