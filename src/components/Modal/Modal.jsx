import React from 'react'
import ReactDom from 'react-dom'
import { IoMdClose } from 'react-icons/io'
import './Modal.css'

const OVERLAYS = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .6)',
    backdropFilter: 'blur(5px)',
    zIndex: 1000

}
export default function Modal({ children, open, onClose, openTwo, openThree, openFour, openFive, openSix, openSev }) {
    if (!open && !openTwo && !openThree && !openFour && !openFive && !openSix && !openSev) return null

    return ReactDom.createPortal(
        <>
            <div style={OVERLAYS} />
            <div className='modal-styles'>
                <IoMdClose id='x' onClick={onClose} />
                {children}
            </div>
        </>,
        document.getElementById('portal')
    )
}
