import { useCallback, useEffect } from "react"
import styled from "styled-components"
import { FaSearch } from 'react-icons/fa'
import { useRef } from "react"

const Controls = ({ rcontrols, lcontrols, badges, descriptor }) => {
    return (
        <section className="panel">
            <div className="banner">
                <div className="ctrl">
                    {
                        (rcontrols && rcontrols.length) ? (
                            rcontrols.map((r, i) => (
                                <div key={i}>
                                    <button
                                        className={`ctrl-btn ${r.transition}`}
                                        onClick={() => r.onClick()}
                                    >
                                        <span className="hidden lg:flex">
                                            {r.label}{r?.transition?.toString()}
                                        </span>
                                        <span className="flex lg:hidden">
                                            {r.icon ? r.icon : r.label.substring(0, 2)}
                                        </span>
                                    </button>
                                </div>
                            ))
                        ) : null
                    }
                </div>
                <div className="ctrl">
                    {
                        (lcontrols && lcontrols.length) ? (
                            lcontrols.map((l, i) => (
                                <span
                                    key={i}
                                    className={`ctrl-icon ${l.transition}`}
                                    onClick={() => l.onClick()}
                                >
                                    {l.icon}
                                </span>
                            ))
                        ) : null
                    }
                </div>
            </div>
            <div className="display">
                {
                    (badges && badges.length) ? (
                        badges.map((b, i) => (
                            <span key={i} className={`badge ${b.transition}`}>
                                <span>{b.content}</span>
                            </span>
                        ))
                    ) : null
                }
                <span className="description">
                    {descriptor.description}
                    {descriptor.subscript}
                </span>
            </div>
        </section >
    )
}

const SearchBar = ({ search, onSearchChange, onSearchKeyDown, recordStatus }) => {
    const searchRef = useRef()
    const keydown = useCallback(e => {
        if (e.key === '`') {
            e.preventDefault()
            searchRef?.current?.focus()
        }
    })

    useEffect(() => {
        document.addEventListener('keydown', keydown)
        return () => {
            document.removeEventListener('keydown', keydown)
        }
    }, [keydown])

    return (
        <StyledSearchBar>
            <FaSearch className="icon" />
            <input ref={searchRef} type="text" value={search} onChange={onSearchChange} onKeyDown={onSearchKeyDown} placeholder="Search..." />
            <span className="hidden md:flex desc">Focus Search: Tilde</span>
            <span className="hidden md:flex desc">
                Clear: CTRL + Backspace
            </span>
            <span className="desc status">
                {recordStatus}
            </span>
        </StyledSearchBar>
    )
}

const StyledSearchBar = styled.div`
    width: 100%;
    margin-top: 10px;
    display: flex;
    padding: 10px;
    background: ${props => props.theme.page.search.bg};
    color: ${props => props.theme.page.search.text};
    align-items: center;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    gap: 5px;
    .icon {
        margin-right: 10px;
        font-size: 18px;
    }
    input {
        width: 100%;
        outline: none; 
        background: ${props => props.theme.page.search.input.bg};
        color: inherit;
        ::placeholder {
            color: ${props => props.theme.page.search.input.ph};
        }
    }
    .desc {
        flex: none;
        padding: 3px 5px;
        background: ${props => props.theme.page.search.marker.bg};
        font-size: 11px;
        color: ${props => props.theme.page.search.marker.text};
        border-radius: 5px;
        align-items: center;
    }
    .status {
        background: ${props => props.theme.page.search.status.bg};
        color: inherit;
    }
`

const StyledPage = styled.main`
    width: 100%;
    height: calc(100vh - 110px);
    color: ${props => props.theme.page.text};
    padding: 20px;
    overflow: hidden;
    .panel {
        width: 100%;
        min-height: 50px;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 5px;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        @media screen and (max-width: 600px) {
            flex-wrap: wrap;
        }
        .banner {
            display: flex;
            width: 100%;
            gap: 5px;
            justify-content: space-between;
            .ctrl {
                display: flex;
                gap: 5px;
                .ctrl-btn {
                    cursor: pointer;
                    background: ${props => props.theme.page.control.bg};
                    border-radius: 10px;
                    color: inherit;
                    padding: 7px 10px;
                    outline: none;
                    height: 100%;
                    text-align: center;
                    &:hover {
                        background: ${props => props.theme.page.control.hover}
                    }
                    @media screen and (max-width: 600px) {
                        font-size: 18px;
                        padding: 7px 10px;
                    }
                }
                .ctrl-icon {
                    font-size: 18px;
                    cursor: pointer;
                    background: ${props => props.theme.page.control.bg};
                    border-radius: 10px;
                    color: inherit;
                    padding: 10px 10px;
                    width: 40px;
                    text-align: center;
                    &:hover {
                        background: ${props => props.theme.page.control.hover};
                    }
                }
            }
        }
        .display {
            display: flex;
            gap: 5px;
            width: max-content;
            margin-left: auto;
            height: 38px;
            .badge {
                height: 100%;
                text-transform: uppercase;
                background: ${props => props.theme.page.badge.bg};
                border-top-right-radius: 10px;
                border-bottom-left-radius: 10px;
                align-items: center;
                display: flex;
                padding: 10px 10px;
                color: ${props => props.theme.page.badge.text};
                width: max-content;
                span {
                    display: flex;
                }
            }
            .description {
                height: 100%;
                padding: 5px 10px;
                background: ${props => props.theme.page.description.bg};
                color: inherit;
                border-top-right-radius: 10px;
                border-bottom-left-radius: 10px;
                display: flex;
                align-items: center;
                width: max-content;
            }
        }
    }
`

export const Page = {
    Controls,
    SearchBar,
    StyledPage
}