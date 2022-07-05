import React from 'react'

const HomePage = () => {
    return (
        <div className="w-[100vw] h-[100vh] bg-gradient-to-r from-[#079ec4ff] to-[#0654fdff] text-[20px] text-white flex justify-center items-center isolate relative">
            <div className="w-[300px] h-[300px] bg-[#0f32cc] opacity-50 origin-center rotate-[80deg] z-[-1] absolute"></div>
            <div className="w-[300px] h-[300px] bg-[#0f32cc] opacity-50 origin-center rotate-[60deg] z-[-1] absolute"></div>
            <div className="w-[300px] h-[300px] bg-[#0f32cc] opacity-50 origin-center rotate-[40deg] z-[-1] absolute"></div>
            <div className="w-[300px] h-[300px] bg-[#0f32cc] opacity-50 origin-center rotate-[20deg] z-[-1] absolute"></div>
            <div className="w-[300px] h-[300px] bg-[#0f32cc] opacity-50 origin-center rotate-[0deg] z-[-1] absolute"></div>
            <div className="w-[300px] h-[300px] bg-transparent flex flex-col justify-center items-center font-bold leading-[25px] absolute">
                <div className="bungee text-[30px]">&lt;SEINTAX&gt;</div>
                <div className="text-[#8797f0]">HOMEPAGE</div>
                <div className="bg-[#000000] w-[80px] h-[15px] rounded-[50%] z-[-1] opacity-[15%] mt-[10px] shadow shadow-[#040552]"></div>
            </div>
        </div>
    )
}

export default HomePage