import React from 'react'
import { useClientContext } from "../contexts/client.context"

const Topics = () => {
    const { config } = useClientContext()
    return (
        <div className="w-full h-full flex justify-center items-center text-white text-[50px]">
            <div className="p-[20px] neubrutalism-static">
                &#10077; {config.topic} &#10078;
            </div>
        </div>
    )
}

export default Topics