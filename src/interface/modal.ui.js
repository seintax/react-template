import { FaAngleDown, FaTimes } from 'react-icons/fa'
import styled from "styled-components"

const Close = () => {
    return <FaTimes />
}

const More = () => {
    return <FaAngleDown />
}

const StyledModal = styled.section`
    width: 100vw;
    height: 100vh;
    background: ${props => props.theme.modal.wrap.bg}; 
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    z-index: 30;
    .list {
        background: ${props => props.theme.modal.body.bg};
        color: ${props => props.theme.modal.body.text};
        display: flex;
        flex-direction: column;
        border-radius: 10px;
        padding: 10px 20px 20px 20px;
        box-shadow: 0px 0px 13px #00000080;
        @media screen and (max-width: 600px) {
            width: calc(100vw - 20px);
            height: calc(100vh - 20px);
        }
    }
    header {
        width: 100%;
        height: 30px;
        margin: 10px 0px 15px 0px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    form {
        background: ${props => props.theme.modal.form.bg};
        color: ${props => props.theme.modal.form.text};
        display: flex;
        flex-direction: column;
        border-radius: 10px;
        padding: 20px 40px 40px 40px;
        box-shadow: 0px 0px 13px #00000080;
        z-index: 10;
        header {
            font-size: 20px;
            font-weight: bold;
            text-transform: uppercase;
        }
        @media screen and (max-width: 600px) {
            width: calc(100vw - 20px);
            height: calc(100vh - 20px);
        }
    }
    .max-size {
        width: calc(100vw - 20px);
        height: calc(100vh - 20px);
    }
    .ctrl {
        height: 100%;
        display: flex;
        align-items: center;
        gap: 5px;
    }
    .brand {
        height: 100%;
        background: ${props => props.theme.modal.body.brand};
        display: flex;
        align-items: center;
        padding: 0px 10px;
        border-bottom-left-radius: 10px;
        border-top-right-radius: 10px;
        text-transform: uppercase;
        color: #ffffff;
    }
    .title {
        width: 100%;
        font-size: 25px;
        font-weight: bold;
        text-transform: uppercase;
    }
    .ctrl-btn {
        width: 30px;
        height: 30px;
        font-size: 18px;
        border: 1px solid ${props => props.theme.modal.body.brand};;
        cursor: pointer;
        border-bottom-left-radius: 10px;
        border-top-right-radius: 10px;
        color: ${props => props.theme.modal.body.brand};
        display: flex;
        justify-content: center;
        align-items: center;
        &:hover {
            color: #ffffff;
            background: ${props => props.theme.modal.body.brand};
        }
    }
    .close {
        width: 30px;
        height: 30px;
        font-size: 18px;
        background: ${props => props.theme.close.bg};
        cursor: pointer;
        border-bottom-left-radius: 10px;
        border-top-right-radius: 10px;
        color: ${props => props.theme.close.text};
        padding: 7px;
        display: flex;
        justify-content: center;
        align-items: center;
        &:hover {
            background: ${props => props.theme.close.hover};
        }
    }
    
    .search {
        margin-top: 2px;
        width: 100%;
        padding: 5px 10px 5px 10px;
        display: flex;
        align-items: center;
        cursor: pointer;
        color: inherit;
        background: ${props => props.theme.modal.body.search.bg};
        .key {
            width: 100%; 
            outline: none;
            background: ${props => props.theme.modal.body.search.bg};
            &::placeholder {
                color: ${props => props.theme.modal.body.search.ph};
            }
        }
        .option {
            margin-left: 5px;
            width: 120px;
            font-size: 12px; 
            outline: none;
            background: ${props => props.theme.modal.body.search.option};
            cursor: pointer;
        }
        .label {
            font-size: 12px;
            margin-left: 10px;
        }
    }
    .grid {    
        background: ${props => props.theme.modal.content.bg};
    }
    .content {
        width: 100%;
        height: 100%;
        overflow: auto;
        display: flex;
        flex-direction: column;
        .head {
            width: 100%;
            padding: 5px 10px 5px 15px;
            display: flex;
            cursor: pointer;
            background: ${props => props.theme.modal.content.head.bg};
            color: ${props => props.theme.modal.content.head.text};
            position: sticky;
            top: 0;
        }
        .row {
            margin-top: 2px;
            width: 100%;
            padding: 5px 10px 5px 15px;
            display: flex;
            cursor: pointer;
            background: inherit;
            &:hover {
                background: ${props => props.theme.modal.content.row.hover};
            }
        }
        .item {
            flex: none;
            text-transform: uppercase;
        } 
        .item-flex-row {
            flex: none;
            display: flex;

        } 
        .item-flex-col {
            flex: none;
            display: flex;
            flex-direction: column;
        } 
        .item-right {
            flex: none;
            display: flex;
            justify-content: flex-end;
            padding-right: 10px;
        }
    }
    .sub-content {
        width: 100%;
        min-height: 130px;
        max-height: 250px;
        overflow: auto;
        margin-top: 20px;
    }
    .not-found {
        width: 100%;
        padding: 5px 10px 5px 15px;
        text-transform: uppercase;
    }
    .load-more {
        width: 100%;
        padding: 5px 15px;
        align-items: center;
        gap: 10px;
        cursor: pointer;
        &:hover {
            background: #c7c6c6;
            text-decoration: underline;
        }
    }
    .load-more-show {
        display: flex;
    }
    .load-more-hide {
        display: none;
    }
`

export const Modal = {
    Element: {
        Close,
        More
    },
    StyledModal
}