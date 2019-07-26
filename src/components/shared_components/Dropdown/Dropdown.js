import React from 'react';
import classes from './Dropdown.module.css';

const dropdown = (props) => {
    let options = []
    for (let [key, value] of Object.entries(props.options)) {
        options.push(`${value}`);
    }


    return(
        <select className={`${classes.dropdown} form-control custom-select form-group`}>
            {options.map((o, ind) => (
                <option key={ind}>{o}</option>
            ))}
        </select>
    )
}

export default dropdown;