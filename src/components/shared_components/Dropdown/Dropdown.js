import React from 'react';
import classes from './Dropdown.module.css';

const dropdown = (props) => (
    <select className={`${classes.Dropdown} form-control custom-select form-group`}>
        {props.options.map(o => (
            //console.log(o)
            <option>{o}</option>
        ))}
    </select>
);

export default dropdown;