import { Outlet, useLocation } from "react-router-dom"
import Navbar from "../components/Navbar"

function LandingPageLayout() {
    const location = useLocation()
    console.log(location)

    return (
        <>
            <Navbar page={location.pathname.slice(1)} />
            <Outlet />
        </>
    )
}

export default LandingPageLayout