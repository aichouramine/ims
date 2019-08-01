import React from 'react';
import classes from './Input.module.css';

const input = props => {
    let inputElement = null;

    switch (props.inputtype){
        case('input'):
            inputElement = <input className={classes.custom_form_control} {...props} />
            break;
        case('textarea'):
            inputElement = <textarea className={classes.custom_form_control} {...props} />
            break;
        default:
            inputElement = <input className={classes.custom_form_control} {...props} />
    }

    // {console.log(props)}
    
    return(
        <div className="form-group ">

            <label htmlFor="feFirstname" className={classes.label}>{props.label}</label>
            {inputElement}
        </div>
    )
}

export default input;