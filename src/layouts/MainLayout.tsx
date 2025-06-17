import { Outlet } from "react-router-dom"
import Navbar from "../components/NavBar/Navbar"

export const MainLayout = () => {
    return (
        <>
            <Navbar />

            <Outlet />
        </>
    )
}
