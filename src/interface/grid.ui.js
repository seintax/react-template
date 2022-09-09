import { useRef } from "react"
import { useState, useEffect } from "react"
import styled from "styled-components"

const NotFound = ({ status }) => {
    return (
        <StyledNotFound>
            <div>
                {status}
            </div>
        </StyledNotFound>
    )
}

const StyledNotFound = styled.div`
    width: calc(100vw - 30px);
    height: 200px;
    font-weight: bold;
    display: flex;
    font-size: 18px;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme.status};
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
`

const DataList = ({ columnData, children }) => {
    const [fullwidth, setfullwidth] = useState(0)
    const gridRef = useRef()

    useEffect(() => {
        if (columnData) {
            setfullwidth(columnData.reduce((a, v) =>
                a = a + Number(v.width), 0
            ))
        }
    }, [columnData])

    useEffect(() => {
        if (children && !children.length) {
            gridRef.current.scrollTo({
                top: 0,
                behavior: 'smooth',
            })
        }
    }, [children])

    return (
        <StyledGrid ref={gridRef}>
            <div style={{ width: `${fullwidth + 10}px` }} className={`head ${columnData ? "" : "hidden"}`}>
                {
                    (columnData && columnData.length) ? (
                        columnData.map((c, i) => (
                            <div key={i} style={{ width: `${c.width}px` }} className="head-item">
                                {c.name}
                            </div>
                        ))
                    ) : null
                }
            </div>
            <div style={{ width: `${fullwidth + 10}px` }} className="data">
                {children}
            </div>
            <div className="pagination"></div>
        </StyledGrid>
    )
}

const Item = ({ column, itemStyle, children }) => {
    return (
        <div
            style={{ width: `${column?.width || 100}px` }}
            className={`item ${itemStyle}`}
        >
            {children}
        </div>
    )
}

const StyledGrid = styled.div`
    width: 100%;
    height: calc(100vh - 255px);
    overflow: auto;
    background: #00000010;
    color: ${props => props.theme.grid.text};
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    display: flex;
    flex-direction: column;
    isolation: isolate;
    ::-webkit-scrollbar {
        width: 15px;
        height: 15px;
    }
    ::-webkit-scrollbar-track {
        background: ${props => props.theme.grid.scroll.track}; 
    }
    ::-webkit-scrollbar-thumb {
        background: ${props => props.theme.grid.scroll.thumb};
    }
    ::-webkit-scrollbar-thumb:hover {
        background: ${props => props.theme.grid.scroll.hover}; 
    }
    .head {
        background: ${props => props.theme.grid.head.bg};
        color: inherit;
        margin-bottom: 1px;
        padding: 10px;
        display: flex;
        position: sticky;
        top: 0;
        left: 0;
        flex: none;
        z-index: 2;
        .head-item {
            background: inherit;
            display: flex;
            flex-wrap: wrap;
            flex: none;
        }
    }
    .data {
        display: flex;
        flex-direction: column;
        flex: none;
        height: 100%;
        .multi-row {
            flex-direction: column;
        }
        .row-wrap {
            width: 100%;
            color: ${props => props.theme.grid.row.text};
            margin-bottom: 1px;
            padding: 10px;
            white-space: pre-line;
            display: flex;
            position: relative;
            .row {
                display: flex;
                width: 100%;
                .item {
                    /* padding-right: 5px; */
                    display: flex;
                    flex: none;
                    align-items: start;
                    flex-wrap: wrap;
                    gap: 5px;
                    padding-right: 10px;
                    .info {
                        margin-right: auto;
                    }
                    .highlight {
                        cursor: pointer;
                        &:hover {
                            text-decoration: underline;
                        }
                    }
                    .icon-btn {
                        cursor: pointer;
                        padding: 3px;
                        color: #ffffff;
                        border-radius: 3px;
                        width: 18px;
                        height: 20px;
                        &:hover {
                            opacity: 0.7;
                        }
                    }
                }
            }
        }
        .row-wrap::before {
            content: "";
            width: 5px;
            height: 100%;
            background: ${props => props.theme.grid.row.indicator.bg};
            z-index: 1;
            position: absolute;
            top: 0;
            left: 0;
        }        
        .row-wrap:hover::before {
            background: ${props => props.theme.grid.row.indicator.hover};
        }
        .selected::before {
            background: ${props => props.theme.grid.row.indicator.active};
        }
        .selected:hover::before {
            background: ${props => props.theme.grid.row.indicator.active};
        }
        .selected {
            background: ${props => props.theme.grid.row.active.bg};
            color: inherit;
            &:hover {
                background: ${props => props.theme.grid.row.active.hover.bg};
                color: ${props => props.theme.grid.row.active.hover.text};
            }
        }
        .default {
            background: ${props => props.theme.grid.row.bg};
            &:hover {
                background: ${props => props.theme.grid.row.hover};
            }
        }
    }
    .pagination {
        width: 100%;
        display: flex;
        align-items: center;
        background: ${props => props.theme.grid.page};
        color: inherit;
        font-size: 11px;
        padding: 0px 5px;
    }
`

export const Grid = {
    DataList,
    Item,
    NotFound
}