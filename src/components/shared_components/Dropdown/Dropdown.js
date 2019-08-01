import React from 'react';
import classes from './Dropdown.module.css';
import {levels} from "../../../enums/levels";

const dropdown = (props) => {
    let options = []
    for (let [key, value] of Object.entries(props.options)) {
        options.push(`${value}`);
    }

    // {console.log(props.value)}

    return(                
        <div>
            <label className={classes.label}>{props.label}</label>
            <select className={`${classes.dropdown} form-control custom-select`} onChange={props.onChange}
                    value={levels[props.value]}>
                {options.map((o, ind) => (
                    <option key={ind}>{o}</option>
                ))}
            </select>
        </div>
    )
}

export default dropdown;