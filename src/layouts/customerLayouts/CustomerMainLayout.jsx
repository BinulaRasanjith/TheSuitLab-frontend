

// import ContentWrapper from "../../components/ContentWrapper";
// import MainLayout from "../../components/MainLayout";
import { Outlet } from "react-router-dom"

import Navbar from "../../components/Navbar"
// import Sidebar from "../../components/Sidebar/Sidebar"

// 

const CustomerMainLayout = () => {
    // const sidebarIsOpen = useSelector(selectSidebarIsOpen)

    return (
        <>
            <Navbar />
            <Outlet />

        </>
    )
}

export default CustomerMainLayout