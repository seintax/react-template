import { useState, useRef, useEffect } from "react"
import { FaInfoCircle, FaListAlt } from 'react-icons/fa'
import styled from "styled-components"

const Input = ({ name, type, value, label, autoComplete, required, disabled, isValid, information, placeholder, onChange, onFocus, onBlur, startFocus }) => {
    const inputRef = useRef()
    const [inputid, setinputid] = useState()
    const dref = `dref${name}`

    const defFocus = (e) => {
        setinputid(name)
    }

    const defBlur = (e) => {
        setinputid()
    }

    useEffect(() => {
        if (startFocus) inputRef?.current?.focus()
    }, [])


    return (
        <StyledInput>
            <label htmlFor={name} className="label">
                {`${label}${label ? ":" : ""}`}
            </label>
            <div className={`wrap ${isValid === undefined ? "valid" : (isValid ? "valid" : "invalid")}`}>
                <input
                    ref={inputRef}
                    type={type}
                    id={name}
                    name={name}
                    value={value}
                    autoComplete={autoComplete}
                    required={isValid !== undefined ? true : required}
                    disabled={disabled}
                    aria-describedby={information?.description ? dref : undefined}
                    placeholder={placeholder}
                    onChange={onChange}
                    onFocus={onFocus || defFocus}
                    onBlur={onBlur || defBlur}
                />
                <p id={dref} className={`${inputid === document.activeElement.id && information?.description && value.length > 0 && !isValid ? "info" : "hide"}`}>
                    <span className="title">
                        <FaInfoCircle className="icon" />
                        {information?.title}
                    </span>
                    <span className="description">
                        {information?.description}
                    </span>
                </p>
            </div>

        </StyledInput>
    )
}

const StyledInput = styled.div`
    width: 100%;
    margin-bottom: 10px;
    isolation: isolate;
    background: inherit;
    .label {
        margin-left: 2px;
    }
    .wrap {
        border-bottom-left-radius: 10px;
        border-top-right-radius: 10px;
        background: inherit;
        margin-top: 5px;
        input {
            width: 100%;
            padding: 10px;
            outline: none;
            border-bottom-left-radius: 10px;
            border-top-right-radius: 10px;
            color: ${props => props.theme.modal.form.input.text};
            border: 1px solid ${props => props.theme.modal.form.input.border};
            &:focus {
                background: ${props => props.theme.modal.form.input.focus};
                color: ${props => props.theme.modal.form.input.text};
            }
        }
        .info {
            width: 100%;
            font-size: 0.7rem;            
            border-bottom-left-radius: 10px;
            border-top-right-radius: 10px;
            background: #00000020;
            color: ${props => props.theme.modal.form.input.info.text};
            padding: 20px 10px 8px 10px;
            border: 1px solid ${props => props.theme.modal.form.input.info.border};
            margin-top: -15px;
            z-index: -1;
            .title {
                font-size: 0.7rem; 
                display: flex;
                align-items: center;
                margin-bottom: 5px;
                .icon {
                    flex: none;
                    margin-right: 5px;
                    margin-top: 2px;
                    margin-bottom: 2px;
                }
            }
        }
        .hide {
            display: none;
        }
    }
    .valid {
        border: 2px solid ${props => props.theme.modal.form.input.valid};
    }
    .invalid {
        border: 2px solid ${props => props.theme.modal.form.input.invalid};
    }
`

const Select = ({ name, options, value, label, required, disabled, isValid, information, onChange, onFocus, onBlur, startFocus, startWithValue }) => {
    const selectRef = useRef()
    const [selectid, setselectid] = useState()
    const dref = `dref${name}`

    const defFocus = (e) => {
        setselectid(name)
    }

    const defBlur = (e) => {
        setselectid()
    }

    useEffect(() => {
        if (startFocus) selectRef?.current?.focus()
    }, [])

    const clickArrow = () => {
        selectRef?.current?.focus()
    }

    return (
        <StyledSelect>
            <label
                htmlFor={name}
                className="label">
                {`${label}${label ? ":" : ""}`}
            </label>
            <div className={`wrap ${isValid === undefined ? "valid" : (isValid ? "valid" : "invalid")}`}>
                <div className="inner">
                    <select
                        ref={selectRef}
                        id={name}
                        name={name}
                        value={value}
                        required={isValid !== undefined ? true : required}
                        disabled={disabled}
                        aria-describedby={information?.description ? dref : undefined}
                        onChange={onChange}
                        onFocus={onFocus || defFocus}
                        onBlur={onBlur || defBlur}
                    >
                        {
                            (startWithValue !== undefined) ? <option value={startWithValue.value}>{startWithValue.key}</option> : null
                        }
                        {
                            (options && options.length) ? (
                                options.map((option, index) => (
                                    <option key={index} value={option.value} disabled={option.disabled ? option.disabled : false}>
                                        {option.key}
                                    </option>
                                ))
                            ) : null
                        }
                    </select>
                    <FaListAlt className="mr-[5px]" onClick={() => clickArrow()} />
                </div>
                <p id={dref} className={`${selectid === document.activeElement.id && information?.description && value.length > 0 && !isValid ? "info" : "hide"}`}>
                    <span className="title">
                        <FaInfoCircle className="icon" />
                        {information?.title}
                    </span>
                    <span className="description">
                        {information?.description}
                    </span>
                </p>
            </div>
        </StyledSelect>
    )
}

const StyledSelect = styled.div`
    width: 100%;
    margin-bottom: 10px;
    isolation: isolate;
    background: inherit;
    .label {
        margin-left: 2px;
    }
    .wrap {
        border-bottom-left-radius: 10px;
        border-top-right-radius: 10px;
        background: inherit;
        margin-top: 5px;
        display: flex;
        flex-direction: column;
        .inner {
            display: flex;
            align-items: center;
            padding: 10px 8px;
            background: ${props => props.theme.modal.form.select.bg};
            color: ${props => props.theme.modal.form.select.text};
            border-bottom-left-radius: 10px;
            border-top-right-radius: 10px;
            border: 1px solid ${props => props.theme.modal.form.select.border};
            &:focus-within {
                background: ${props => props.theme.modal.form.select.focus};
            }
            select {
                width: 100%;
                border: 1px solid ${props => props.theme.modal.form.select.bg};
                cursor: pointer;
                outline: none;
                appearance: none;
                -webkit-appearance: none;
                -moz-appearance: none;
                &:focus {
                    background: ${props => props.theme.modal.form.select.focus};
                    border: 1px solid ${props => props.theme.modal.form.select.focus};
                }
            }
        }
        .info {
            width: 100%;
            font-size: 0.7rem;            
            border-bottom-left-radius: 10px;
            border-top-right-radius: 10px;
            background: #00000020;
            color: ${props => props.theme.modal.form.input.info.text};
            padding: 20px 10px 8px 10px;
            border: 1px solid ${props => props.theme.modal.form.input.info.border};
            margin-top: -15px;
            z-index: -1;
            .title {
                font-size: 0.7rem; 
                display: flex;
                align-items: center;
                margin-bottom: 5px;
                .icon {
                    flex: none;
                    margin-right: 5px;
                    margin-top: 2px;
                    margin-bottom: 2px;
                }
            }
        }
        .hide {
            display: none;
        }
    }    
    .valid {
        border: 2px solid ${props => props.theme.modal.form.input.valid};
    }
    .invalid {
        border: 2px solid ${props => props.theme.modal.form.input.invalid};
    }
`

const Action = ({ submitLabel, canSubmit, cancelLabel, wrapperStyle, onCancelClick }) => {

    return (
        <StyledAction className={wrapperStyle}>
            <input
                type="submit"
                value={submitLabel}
                disabled={!canSubmit}
                className={`btn submit`}
            />
            {
                (cancelLabel) ? (
                    <>
                        <span className="break"></span>
                        <input
                            type="button"
                            value={cancelLabel}
                            onClick={onCancelClick}
                            className={`btn cancel`}
                        />
                    </>
                ) : null
            }
        </StyledAction>
    )
}

const StyledAction = styled.div`
    width: 100%;
    display: flex;
    color: ${props => props.theme.modal.form.action.text};
    padding-top: 20px;
    .btn {
        width: 100%;
        padding: 10px 0px;
        border-bottom-left-radius: 10px;
        border-top-right-radius: 10px;
        cursor: pointer;
        outline: none;
        &:focus {
            border: 1px solid ${props => props.theme.modal.form.action.border};
        }
    }
    .break {
        width: 10px;
        flex: none;
    }
    .submit {
        background: ${props => props.theme.modal.form.action.submit.bg};
        color: inherit;
        transition: ease-in;
        transition-duration: 200ms;
        border: 1px solid ${props => props.theme.modal.form.action.submit.border};
        &:hover {
            background: ${props => props.theme.modal.form.action.submit.hover};
        }
        &:disabled {
            background: transparent;
            cursor: default;
            color: ${props => props.theme.modal.form.action.submit.disable};
            &:hover {
                border: 1px solid ${props => props.theme.modal.form.action.submit.disable};
            }
        }
    }
    .cancel {
        background: transparent;
        color: inherit;
        transition: ease-in;
        transition-duration: 200ms;
        &:hover {
            background: ${props => props.theme.modal.form.action.cancel};
        }
    }
`

export const FormElement = {
    Input,
    Select,
    Action
}