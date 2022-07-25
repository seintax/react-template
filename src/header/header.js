import React, { useEffect, useState } from 'react'
import { FaUserAlt, FaPowerOff } from 'react-icons/fa'
import { useNavigate } from "react-router-dom"

const Header = () => {
    const navigate = useNavigate()
    const [onctrl, setonctrl] = useState(false)

    useEffect(() => {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Control') setonctrl(true)
        })
    }, [])

    useEffect(() => {
        document.addEventListener('keyup', (e) => {
            if (e.key === 'Control') setonctrl(false)
        })
    }, [])

    const moveto = (loc) => {
        if (onctrl) {
            window.open(`/home/${loc}`, "_blank")
            return
        }
        navigate(`/home/${loc}`)
    }

    return (
        <div className="w-[100%] h-[100px] bg-[#b5b5b6] bg-opacity-50 drop-shadow-2xl flex justify-between items-center px-[20px]">
            <div className="cursor-pointer no-select font-bold h-[100%] flex items-center justify-center relative" onClick={() => moveto("")}>
                <span className="text-[#ffffff]">SYNTAX</span>
                <div className="absolute w-[50px] h-[50px] bg-[#7c7c7c] rounded-[10px] z-[-1] rotate-[45deg] border-[5px] border-[#ffffff]"></div>
            </div>
            <div className="flex text-[16px] h-[100%] items-center text-[#ffffff]">
                <div className="mr-[10px] px-[10px] h-[100%] flex items-center cursor-pointer hover:text-[#c8fd06] hover:border-b-[#ffffff] hover:border-b-[5px] hover:pt-[5px] hover:ease-in duration-100 no-select" onClick={() => moveto("")}>
                    Home
                </div>
                <div className="mr-[10px] px-[10px] h-[100%] flex items-center cursor-pointer hover:text-[#c8fd06] hover:border-b-[#ffffff] hover:border-b-[5px] hover:pt-[5px] hover:ease-in duration-100 no-select" onClick={() => moveto("page1")}>
                    Page 1
                </div>
                <div className="mr-[10px] px-[10px] h-[100%] flex items-center cursor-pointer hover:text-[#c8fd06] hover:border-b-[#ffffff] hover:border-b-[5px] hover:pt-[5px] hover:ease-in duration-100 no-select" onClick={() => moveto("page2")}>
                    Page 2
                </div>
                <div className="ml-[30px] h-[100%] flex items-center cursor-pointer hover:text-[#c8fd06] hidden">
                    <FaPowerOff />
                </div>
                <div className="ml-[30px] h-[100%] flex items-center cursor-pointer hover:text-[#c8fd06]">
                    <FaUserAlt />
                </div>
            </div>
        </div>
    )
}

export default Header