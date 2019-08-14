import React from 'react';
import classes from './Input.module.css';

const input = props => {
    let inputElement = null;

    let attachedClass = classes.custom_form_control
    let labelAttachedClass = classes.label
    if(props.error){
        attachedClass = `${classes.custom_form_control} ${classes.custom_form_control__error}`
        labelAttachedClass = `${classes.label} ${classes.label__error}`
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
            <label htmlFor="feFirstname" className={labelAttachedClass}>{props.label}</label>
            {inputElement}
            <div className={classes.invalidFeedback}>{props.error}</div>
        </div>
    )
}

export default input;