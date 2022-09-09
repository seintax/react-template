import React, { useCallback, useEffect, useRef, useState } from 'react'
import { FaElementor } from "react-icons/fa"
import { Modal } from "../../interface/modal.ui"

const TopicSearch = ({ show, setshow, settopic }) => {
    const searchRef = useRef()
    const [isloading, setisloading] = useState(false)
    const [search, setsearch] = useState("")
    const [topics, settopics] = useState([])
    const [temp, settemp] = useState([])
    const limit = 100

    const searchChange = (e) => {
        setsearch(e.target.value.toUpperCase())
    }

    const searchKeyDown = (e) => {
        if (e.key === 'Enter') {
            if (search) {
                let result = temp.filter(d => {
                    return d.title?.toString().includes(search)
                })
                settopics(result)
                return
            }
            settopics(temp)
        }
    }

    const keydown = useCallback(e => {
        if (show) {
            if (e.key === 'Escape') setshow(false)
            if (e.key === '`') {
                e.preventDefault()
                if (searchRef) { searchRef.current.focus() }
            }
        }
    })

    useEffect(() => {
        document.addEventListener('keydown', keydown)
        return () => {
            document.removeEventListener('keydown', keydown)
        }
    }, [keydown])

    useEffect(() => {
        if (show) {
            settopics()
            setisloading(true)
            const delay = setTimeout(() => {
                let data = [
                    { title: "Random People Infos" },
                    { title: "Sample 1" },
                    { title: "Sample 2" },
                    { title: "Sample 3" }
                ]
                settopics(data)
                settemp(data)
                setisloading(false)
            }, 1000)
            return () => clearTimeout(delay)
        }
    }, [show])


    const selectTopic = (topic) => {
        settopic(topic)
        setshow(false)
    }

    return (
        (show && (
            <Modal.StyledModal>
                <div className="md:w-[650px] md:h-[600px] list">
                    <header>
                        <div className="ctrl">
                            <span className="brand">
                                Topics
                            </span>
                            <span className="ctrl-btn">
                                <FaElementor />
                            </span>
                        </div>
                        <div className="close" onClick={() => setshow(false)}>
                            <Modal.Element.Close />
                        </div>
                    </header>
                    <div className="search">
                        <input ref={searchRef} type="text" value={search} onChange={searchChange} onKeyDown={searchKeyDown} className="key" placeholder="Search..." />
                    </div>
                    <div className="content grid">
                        <div className="head" >
                            <div className="w-full item">
                                Title
                            </div>
                        </div>
                        {
                            (topics && topics.length) ? (
                                topics.map((t, i) => (
                                    <div key={i} className="row" onClick={() => selectTopic(t)}>
                                        <div className="w-full item">
                                            {t.title}
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="not-found">
                                    {isloading ? "Retrieving..." : "No Topic recorded."}
                                </div>
                            )
                        }
                        <div className={`load-more ${!isloading && topics?.length >= limit && topics?.length % limit === 0 ? "load-more-show" : "load-more-hide"}`}>
                            LOAD MORE <Modal.Element.More />
                        </div>
                    </div>
                </div>
            </Modal.StyledModal>
        ))
    )
}

export default TopicSearch