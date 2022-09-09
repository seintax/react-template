import { createContext, useContext, useEffect, useState } from 'react'
import { ThemeProvider } from "styled-components"

const ClientContext = createContext()

export function useClientContext() {
    return useContext(ClientContext)
}

export function ClientProvider({ children }) {
    const [modal, setmodal] = useState(null)
    const theme = {
        close: {
            text: "#ffffff",
            bg: "#ff1818",
            hover: "#e01111"
        },
        page: {
            text: "#ffffff",
            control: {
                bg: "#7a9bf7",
                hover: "#6b8be6"
            },
            badge: {
                text: "#000000",
                bg: "#ffffff"
            },
            description: {
                bg: "#7a9bf7"
            },
            search: {
                text: "#ffffff",
                bg: "#7a9bf7",
                input: {
                    bg: "#7a9bf7",
                    ph: "#115dcf"
                },
                marker: {
                    text: "#000000",
                    bg: "#ffffff"
                },
                status: {
                    bg: "#115dcf",
                }
            }
        },
        grid: {
            text: "#ffffff",
            scroll: {
                track: "#3d7afd",
                thumb: "#0548d8",
                hover: "#053cb4"
            },
            head: {
                bg: "#0542c5",
            },
            row: {
                text: "#000000",
                bg: "#ffffff",
                hover: "#a5bff8",
                indicator: {
                    bg: "#0a4704",
                    hover: "#83d105",
                    active: "#f8d302",
                },
                active: {
                    bg: "#ffffff50",
                    hover: {
                        text: "#000000",
                        bg: "#ffffff30"
                    }
                },
            },
            page: {
                bg: "#ffffff"
            }
        },
        status: {
            text: "#ffffff",
        },
        modal: {
            wrap: {
                bg: "#0a640260",
            },
            body: {
                text: "#000000",
                bg: "#a2c7f7",
                brand: "#0542c5",
                search: {
                    bg: "#82aee7",
                    ph: "#4b4dda",
                    option: {
                        bg: "#4b4dda"
                    }
                }
            },
            form: {
                text: "#ffffff",
                bg: "#0542c5",
                input: {
                    text: "#000000",
                    focus: "#bfc0f8",
                    border: "#01a10e",
                    valid: "#ffffff",
                    invalid: "#f87307",
                    info: {
                        text: "#ffffff",
                        border: "#04520a"
                    }
                },
                select: {
                    bg: "#ffffff",
                    text: "#000000",
                    focus: "#bfc0f8",
                    border: "#01a10e",
                    valid: "#ffffff",
                    invalid: "#f87307",
                    info: {
                        text: "#ffffff",
                        border: "#04520a"
                    }
                },
                action: {
                    text: "#ffffff",
                    border: "#ffffff",
                    submit: {
                        bg: "#043aaf",
                        border: "#316dee",
                        hover: "#05359c",
                        disable: "#b9b8b8"
                    },
                    cancel: "#e61c1c"
                }
            },
            content: {
                bg: "#ffffff",
                head: {
                    text: "#ffffff",
                    bg: "#0542c5"
                },
                row: {
                    hover: "#a5bff8",
                },
                more: "#a5bff8",
            }
        }
    }

    const [config, setconfig] = useState({
        topic: "This an easy template",
        search: "",
        from: null
    })

    return (
        <ClientContext.Provider value={{ config, setconfig, modal, setmodal }} >
            <ThemeProvider theme={theme}>
                <div className="w-[100vw] h-[100vh] relative flex justify-center">
                    {children}
                </div>
            </ThemeProvider>
        </ClientContext.Provider>
    )
}

export default ClientContext