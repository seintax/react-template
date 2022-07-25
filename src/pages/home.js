import React from 'react'
import { Outlet } from "react-router-dom"
import Header from "../header/header"

const HomePage = () => {

    return (
        <div className="w-[100%] h-[100%] bg-gradient-to-r from-[#079ec4ff] to-[#0654fdff] relative overflow-hidden">
            <Header />
            <Outlet />
        </div>
    )
}

export default HomePage