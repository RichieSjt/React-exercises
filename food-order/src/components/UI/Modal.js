import React from 'react'
import ReactDOM from 'react-dom'
import classes from './Modal.module.css'

const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.onClose} />
}

const ModalOverlay = props => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
}

const Modal = props => {
    const portalDestination = document.getElementById('overlays')

    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalDestination)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalDestination)}
        </React.Fragment>
    )
}

export default Modal