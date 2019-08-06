import React from 'react';
import classes from './Input.module.css';

const input = props => {
    let inputElement = null;

    let attachedClass = classes.custom_form_control
    if(props.error){
        attachedClass = `${classes.custom_form_control} ${classes.custom_form_control__error}`
    }

    switch (props.inputtype){
        case('input'):
            inputElement = <input className={attachedClass} {...props} />
            break;
        case('textarea'):
            inputElement = <textarea className={attachedClass} {...props} />
            break;
        default:
            inputElement = <input className={attachedClass} {...props} />
    }

    // {console.log(props)}
    
    return(
        <div>
            <label htmlFor="feFirstname" className={classes.label}>{props.label}</label>
            {inputElement}
        </div>
    )
}

export default input;