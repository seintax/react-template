import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import HomePage from "../pages/home"
import InvalidPage from "../pages/invalid"

export const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route index element={<Navigate to="/home" />} />
            <Route path="*" element={<InvalidPage />} />
        </Routes >
    )
}

export default MainRoutes
