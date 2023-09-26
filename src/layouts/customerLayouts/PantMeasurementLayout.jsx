import { BiSolidColor } from 'react-icons/bi'
import { GiRolledCloth } from 'react-icons/gi'
import { SiStylelint } from 'react-icons/si'
import { TbRulerMeasure } from 'react-icons/tb'
import { Outlet } from 'react-router-dom'

import ContentWrapper from '../../components/ContentWrapper'
import Sidebar from '../../components/Sidebar/Sidebar'

const sidebarItems = [
    {
        label: 'Fabric',
        icon: <GiRolledCloth />,
        to: '/customer/customize-suit/pant/fabric',
        subItems: [
            {
                label: 'Solid',
                to: '/customer/customize-suit/pant/fabric/solid'
            },
            {
                label: 'Pattern',
                to: '/customer/customize-suit/pant/fabric/pattern'
            },
        ]
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
                label: 'Back Pocket',
                to: '/customer/customize-suit/pant/style/back-pocket'
            },
        ]
    },
    {
        label: 'Color contrast',
        icon: <BiSolidColor />,
        to: '/customer/customize-suit/pant/color-contrast',
        subItems: [
            {
                label: 'Back Pocket Color',
                to: '/customer/customize-suit/pant/color-contrast/back-pocket-color'
            },
            {
                label: 'Back Button Color',
                to: '/customer/customize-suit/pant/color-contrast/back-button-color'
            },
        ]
    },
    {
        label: 'Measurements',
        icon: <TbRulerMeasure />,
        to: '/customer/customize-suit/pant/measurements',
    },
]

const PantMeasurementLayout = () => {
    return (
        <>
            <Sidebar items={sidebarItems} />
            <ContentWrapper>
                <Outlet />

            </ContentWrapper>
        </>
    )
}

export default PantMeasurementLayout