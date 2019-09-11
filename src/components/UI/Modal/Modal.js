import React from 'react';
import classes from './Modal.module.css';
import Hoc from '../../../hoc/Hoc';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => {
    let additionalStyle = {
        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: props.show ? '1' : '0'
    }

    return(
        <Hoc>
            <Backdrop show={props.show} clicked={props.modalClosed}/>
            <div
                className={classes.modal}
                style={Object.assign(additionalStyle, props.customStyle)}
            >
                {React.cloneElement(props.children, {onConfirm: props.modalClosed, onClose: props.modalClosed})}
                {/*{props.children}*/}
            </div>
        </Hoc>
    )
}

export default modal;