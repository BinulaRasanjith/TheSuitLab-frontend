import { Outlet } from 'react-router-dom'

import RightSideBar from '../../components/Customer/RightSideBar'
import UpperModel from '../../components/Customer/UpperModel'

const JacketColorContrast = () => {
    return (
        <div className='flex'>
            <Outlet />
            <UpperModel />
            <RightSideBar />


        </div>
    )
}

export default JacketColorContrast