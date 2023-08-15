import { Outlet } from "react-router-dom"

import MainLayout from "../components/MainLayout"
import Navbar from "../components/Navbar"

function LandingPageLayout() {

    return (
        <>
            <Navbar />
            <MainLayout>
                <Outlet />
            </MainLayout>

        </>
    )
}

export default LandingPageLayout