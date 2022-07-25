import React, { useCallback, useEffect, useState } from 'react'
import { FaWindowClose, FaTrash } from 'react-icons/fa'
import { useClientContext } from "../contexts/client.context"

const Topic = ({ show, setshow }) => {
    const { config, changeTopic } = useClientContext()
    const [topic, settopic] = useState("")

    const topicChange = (e) => {
        settopic(e.target.value)
    }

    const keydown = useCallback(e => {
        if (e.key === 'Escape' && show) {
            setshow(false)
        }
    })

    useEffect(() => {
        document.addEventListener('keydown', keydown)
        return () => {
            document.removeEventListener('keydown', keydown)
        }
    }, [keydown])

    const updateTopic = (e) => {
        e.preventDefault()
        changeTopic(topic)
    }

    return (
        (show && (
            <div className="w-screen h-screen bg-[#000000] text-[#000000] bg-opacity-40 flex justify-center items-center absolute top-0 left-0 z-10">
                <div className="w-[500px] h-[600px] bg-[#03dbf7] flex flex-col pb-[20px] neubrutalism-static">
                    <div className="w-full p-[10px] flex justify-between">
                        <div className="no-select neubrutalism-skewed px-[10px] text-[18px] font-bold">TOPIC</div>
                        <div className="text-[18px] text-[#fa0606]" onClick={() => setshow(false)}>
                            <FaWindowClose className="cursor-pointer" />
                        </div>
                    </div>
                    <form  onSubmit={updateTopic} className="p-[10px] overflow-auto flex flex-col items-center">
                        <div className="text-[15px]">&#10077; {config.topic} &#10078;</div>
                        <div className="w-full mt-[100px] px-[20px] text-[14px] flex flex-col">
                            <span className="w-[100px] neubrutalism-skewed ml-[-10px] text-center">New Topic</span>
                            <input type="text" value={topic} onChange={topicChange} className="p-[10px] w-full text-center neubrutalism-static" required />
                            <input type="submit" value="Change Topic" className="mt-[10px] bg-[#115bfc] hover:bg-[#084de0] p-[10px] text-[#ffffff] cursor-pointer neubrutalism-static" />
                        </div>
                    </form>
                </div>
            </div>
        ))
    )
}

export default Topic