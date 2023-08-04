import { Outlet } from "react-router-dom"

import Navbar from "../components/Navbar"

const CostumeCustomizationLayout = () => {
    return (
        <>
            <Navbar />
            <main className="flex min-h-screen w-screen pt-16">
                <Outlet />
            </main>
        </>
    )
}

export default CostumeCustomizationLayout