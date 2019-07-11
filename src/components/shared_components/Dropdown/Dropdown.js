import React from 'react';
import classes from './Dropdown.module.css';

const dropdown = (props) => {
    let levels = []
    for (let [key, value] of Object.entries(props.options)) {
       levels.push(`${value}`);
    }


    return(
        <select className={`${classes.Dropdown} form-control custom-select form-group`}>
            {levels.map((o, ind) => (
                <option key={ind}>{o}</option>
            ))}
        </select>
    )
}

export default dropdown;