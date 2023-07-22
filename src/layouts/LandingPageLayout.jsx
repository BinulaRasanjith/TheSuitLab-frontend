import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

function LandingPageLayout() {

    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

export default LandingPageLayout