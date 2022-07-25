import React, { createContext, useContext, useEffect, useState } from 'react'
import MessagePopper from "../utilities/message.popper"

const ClientContext = createContext()

export function useClientContext() {
    return useContext(ClientContext)
}

export function ClientProvider({ children }) {
    const [popper, setpopper] = useState(false)
    const [popconfig, setpopconfig] = useState({
        message: "Pop",
        duration: 2000
    })
    const [theme, settheme] = useState()
    const [user, setuser] = useState()
    const [config, setconfig] = useState({
        topic: "This a easy template",
        search: "",
    })

    const showPopper = (message, duration = 2000) => {
        setpopper(true)
        setpopconfig({
            message: message,
            duration: duration
        })
    }

    const changeTopic = (topic) => {
        setconfig({...config, topic: topic})
    }

    useEffect(() => {
        console.log(config)
    }, [config])


    return (
        <ClientContext.Provider value={{ config, changeTopic, theme, settheme, user, setuser, showPopper }} >
            <div className="w-[100vw] h-[100vh] relative flex justify-center">
                {children}
                <MessagePopper show={popper} setshow={setpopper} message={popconfig.message} duration={popconfig.duration} />
            </div>
        </ClientContext.Provider>
    )
}

export default ClientContext