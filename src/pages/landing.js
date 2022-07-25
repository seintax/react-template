import React, { useState } from 'react'
import { useClientContext } from "../contexts/client.context"
import Topic from "../features/topic"

const LandingPage = () => {
    const [notify, setnotify] = useState(false)
    const { showPopper } = useClientContext()
    const pagetitle = "Syntax Template"

    return (
        <div className="w-[100%] h-[calc(100vh-100px)] text-[20px] text-white flex justify-center items-center isolate">
            <div className="relative w-[300px] h-[300px] relative overflow-hidden rounded-[50px] neubrutalism">
                <div className="w-[300px] h-[300px] bg-[#0f32cc] opacity-50 origin-center rotate-[80deg] z-[1] absolute"></div>
                <div className="w-[300px] h-[300px] bg-[#eeff01] opacity-50 origin-center rotate-[60deg] z-[1] absolute"></div>
                <div className="w-[300px] h-[300px] bg-[#03f2fa] opacity-50 origin-center rotate-[40deg] z-[1] absolute"></div>
                <div className="w-[300px] h-[300px] bg-[#07f807] opacity-50 origin-center rotate-[20deg] z-[1] absolute"></div>
                <div className="w-[300px] h-[300px] bg-[#04ff75] opacity-50 origin-center rotate-[0deg] z-[1] absolute"></div>
                <div className="w-[300px] h-[300px] bg-transparent mt-[20px] flex flex-col justify-center items-center font-bold leading-[45px] absolute">
                    <div className="bungee text-[30px] z-[1] no-select">&lt;SEINTAX&gt;</div>
                    <div className="text-[#ffffff] animate-bounce z-[1] no-select">HOMEPAGE</div>
                    <div className="bg-[#000000] w-[80px] h-[15px] rounded-[50%] z-[1] opacity-[15%] shadow shadow-[#040552]"></div>
                </div>
            </div>
            <div className="top-[150px] left-[50px] absolute">
                <div className="px-[20px] py-[10px] bg-[#219aeb] hover:bg-[#0e8bdf] cursor-pointer neubrutalism" onClick={() => setnotify(true)}>View Topics</div>
                <div className="px-[20px] py-[10px] bg-[#219aeb] hover:bg-[#0e8bdf] cursor-pointer neubrutalism mt-[20px] flex justify-center" onClick={() => showPopper(`Welcome to the ${pagetitle}`, 1000)}>Click Me!</div>
            </div>
            <Topic show={notify} setshow={setnotify} />
        </div>
    )
}

export default LandingPage