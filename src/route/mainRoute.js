import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import HomePage from "../pages/home"
import InvalidPage from "../pages/invalid"
import LandingPage from "../pages/landing"
import Page1 from "../pages/page1"
import Page2 from "../pages/page2"

export const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/home" element={<HomePage />}>
                <Route path="/home/page1" element={<Page1 />} />
                <Route path="/home/page2" element={<Page2 />} />
                <Route index element={<LandingPage />} />
            </Route>
            <Route index element={<Navigate to="/home" />} />
            <Route path="*" element={<InvalidPage />} />
        </Routes >
    )
}

export default MainRoutes
