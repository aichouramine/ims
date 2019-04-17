import React from 'react';
import classes from './EntriesDropdown.module.css';

const entriesDropdown = props => (
    <div className={classes.Entries_wrapper}>
        <label>Show </label>
        <select className={`form-control custom-select form-group ${classes.Entries_dropdown}`}>
            <option>10</option>
            <option>25</option>
            <option>50</option>
            <option>100</option>
        </select>
        <label>{props.label}</label>
    </div>
);

export default entriesDropdown;