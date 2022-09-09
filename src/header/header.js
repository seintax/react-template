import React, { useEffect, useState } from 'react'
import { FaUserAlt, FaPowerOff } from 'react-icons/fa'
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

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
        <StyledNav>
            <div className="brand" onClick={() => moveto("")}>
                <div className={`absolute w-[55px] h-[55px] bg-transparent rounded-[15px] z-1 border-[5px] border-[#ffffff] animate-spin-slow`}></div>
                <div className={`absolute w-[55px] h-[55px] bg-transparent rounded-[15px] z-1 border-[5px] border-[#ffffff] animate-spin-slower`}></div>
                <span className="text-[#ffffff]">SYNTAX</span>
            </div>
            <div className="menu">
                <div className="item" onClick={() => moveto("")}>
                    <span className="skew-text">Home</span>
                </div>
                <div className="item" onClick={() => moveto("topics")}>
                    <span className="skew-text">Topics</span>
                </div>
                <div className="item" onClick={() => moveto("page")}>
                    <span className="skew-text">Page</span>
                </div>
                <div className="ml-[30px] h-[100%] flex items-center cursor-pointer hover:text-[#c8fd06] hidden">
                    <FaPowerOff />
                </div>
                <div className="ml-[30px] h-[50%] w-[50px] flex justify-center items-center cursor-pointer bg-[#c718f3] hover:bg-[#b80ae4] neubrutalism">
                    <FaUserAlt />
                </div>
            </div>
        </StyledNav>
    )
}

export default Header

const StyledNav = styled.nav`
    width: 100%;
    height: 100px;
    background: #eeeef030;
    filter: drop-shadow(0 25px 25px rgb(0 0 0 / 0.15));
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 20px;
    z-index: 5;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    .brand {
        cursor: pointer;
        font-weight: bold;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .menu {
        display: flex;
        font-size: 16px;
        height: 100%;
        align-items: center;
        color: #ffffff;
        gap: 10px;
        .item {
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            width: 80px;
            height: 60px;
            font-size: 18px;
            border-radius: 20px;
            transition-duration: 100ms;
            &:hover {
                background: #021b5f2e;
            }
        }
        .item-selected {
            background: #fcf806;
            &:hover {
                background: #fcf806;
            }
        }
        .item-hidden {
            display: none;
        }        
        .ctrl {
            margin-left: 30px;
            height: 100%;
            display: flex;
            align-items: center;
            cursor: pointer;;
            &:hover {
                color: #c8fd06;
            }
        }
        .ctrl-hidden {
            display: none;
        }
    }
`