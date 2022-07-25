import React, { useEffect } from 'react'
import { BiMessageSquareDots } from 'react-icons/bi'

const MessagePopper = ({ show, setshow, message, duration }) => {

    useEffect(() => {
        if (show) {
            setTimeout(() => {
                setshow(false)
            }, duration)
        }
    }, [show])

    return (
        <div className={`absolute top-[20px] flex items-center z-auto transition ease-in duration-500 bg-gradient-to-r from-[#ee89d8] via-[#d2e470] to-[#6ae766] rounded-tl-[10px] rounded-br-[10px] drop-shadow-2xl px-[30px] py-[10px] text-[14px] ${show ? "" : "hidden"} neubrutalism-plain`}>
            <BiMessageSquareDots className="mr-[20px] animate-ping" />
            <span>{message.toUpperCase()}</span>
        </div>
    )
}

export default MessagePopper