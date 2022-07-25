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
        <div className="w-[100%] h-[100px] bg-[#eeeef0] bg-opacity-30 drop-shadow-2xl flex justify-between items-center px-[20px]">
            <div className="cursor-pointer no-select font-bold h-[100%] flex items-center justify-center relative" onClick={() => moveto("")}>
                <span className="text-[#ffffff]">SYNTAX</span>
                <div className="absolute w-[50px] h-[50px] bg-[#7c7c7c] rounded-[10px] z-[-1] rotate-[45deg] border-[5px] border-[#ffffff]"></div>
            </div>
            <div className="flex text-[16px] h-[100%] items-center text-[#ffffff]">
                {/* <div className="mr-[10px] px-[10px] h-[100%] flex items-center cursor-pointer hover:text-[#c8fd06] hover:border-b-[#ffffff] hover:border-b-[5px] hover:pt-[5px] hover:ease-in duration-100 no-select" onClick={() => moveto("")}>
                    Home
                </div>
                <div className="mr-[10px] px-[10px] h-[100%] flex items-center cursor-pointer hover:text-[#c8fd06] hover:border-b-[#ffffff] hover:border-b-[5px] hover:pt-[5px] hover:ease-in duration-100 no-select" onClick={() => moveto("topics")}>
                    Topics
                </div>
                <div className="mr-[10px] px-[10px] h-[100%] flex items-center cursor-pointer hover:text-[#c8fd06] hover:border-b-[#ffffff] hover:border-b-[5px] hover:pt-[5px] hover:ease-in duration-100 no-select" onClick={() => moveto("page")}>
                    Page
                </div> */}
                <div className="mr-[15px] px-[20px] h-[50%] w-[90px] flex justify-center items-center cursor-pointer bg-[#f39b18] hover:bg-[#dd890a] text-[#ffffff] no-select neubrutalism" onClick={() => moveto("")}>
                    Home
                </div>
                <div className="mr-[15px] px-[20px] h-[50%] w-[90px] flex justify-center items-center cursor-pointer bg-[#f39b18] hover:bg-[#dd890a] text-[#ffffff] no-select neubrutalism" onClick={() => moveto("topics")}>
                    Topics
                </div>
                <div className="mr-[15px] px-[20px] h-[50%] w-[90px] flex justify-center items-center cursor-pointer bg-[#f39b18] hover:bg-[#dd890a] text-[#ffffff] no-select neubrutalism" onClick={() => moveto("page")}>
                    Page
                </div>
                <div className="ml-[30px] h-[100%] flex items-center cursor-pointer hover:text-[#c8fd06] hidden">
                    <FaPowerOff />
                </div>
                {/* <div className="ml-[30px] h-[100%] flex items-center cursor-pointer hover:text-[#c8fd06]">
                    <FaUserAlt />
                </div> */}
                <div className="ml-[30px] h-[50%] w-[50px] flex justify-center items-center cursor-pointer bg-[#c718f3] hover:bg-[#b80ae4] neubrutalism">
                    <FaUserAlt />
                </div>
            </div>
        </div>
    )
}

export default Header