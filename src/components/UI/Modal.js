import React, {Fragment} from 'react';
import ReactDOM  from 'react-dom';
import classes from '../styles/Modal.module.css';

const Backdrop = ( { dispatcher } ) => {
    return (
        <div className={classes.backdrop} onClick={() => dispatcher({type:'cart-modal-close'})}/>
    );
};

const PortalElement = document.getElementById('overlays');

const ModalOverlay = ( { children } ) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{children}</div>
        </div>
    )
};

const Modal = ({ dispatcher, children }) =>  {
    var overlay;
    var ModalContent;

    overlay      = ReactDOM.createPortal(<Backdrop dispatcher={dispatcher}/>, PortalElement);
    ModalContent = ReactDOM.createPortal(<ModalOverlay>{children}</ModalOverlay>, PortalElement);

    return (
        <Fragment>  
            {overlay}
            {ModalContent}
        </Fragment>
    )
};

export default Modal;