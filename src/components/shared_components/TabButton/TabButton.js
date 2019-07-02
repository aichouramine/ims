import React from 'react';
import classes from './TabButton.module.css';

const tabButton = props => (
    <button className="btn btn-success" style={{width: '30px'}}>
        <i className="material-icons">add_circle_outline</i>
        {props.label}
    </button>
);

export default tabButton;