import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import HomePage from "../pages/home"
import InvalidPage from "../pages/invalid"
import LandingPage from "../pages/landing"
import Topics from "../pages/topics"
import Page from "../pages/page"

export const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/home" element={<HomePage />}>
                <Route path="/home/topics" element={<Topics />} />
                <Route path="/home/page" element={<Page />} />
                <Route index element={<LandingPage />} />
            </Route>
            <Route index element={<Navigate to="/home" />} />
            <Route path="*" element={<InvalidPage />} />
        </Routes >
    )
}

export default MainRoutes
