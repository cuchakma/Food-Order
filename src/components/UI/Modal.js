import React, {Fragment} from 'react';
import ReactDOM  from 'react-dom';
import classes from './Modal.module.css';

const Backdrop = (props) => {
    return (
        <div className={classes.backdrop} onClick={props.onClick}/>
    );
};

const PortalElement = document.getElementById('overlays');

const ModalOverlay = (props) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
};

const Modal = (props) =>  {
    var overlay;
    var ModalContent;

    overlay      = ReactDOM.createPortal(<Backdrop onClick={props.onClick}/>, PortalElement);
    ModalContent = ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, PortalElement);

    return (
        <Fragment>  
            {overlay}
            {ModalContent}
        </Fragment>
    )
};

export default Modal;