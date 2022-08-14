import { Fragment } from 'react';
import ReactDOM from 'react-dom';

import classes from './MenuModal.module.css';

const ModalOverlay = (props) => {
    return (
        <div className={classes.menuModal}>
            <div>{props.children}</div>
        </div>
    )
}

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        </Fragment>
    )
}

export default Modal;