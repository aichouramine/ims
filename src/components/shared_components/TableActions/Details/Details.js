import React from 'react';
import classes from './Details.module.css';

const details = props => (
    <div className={classes.Details} onClick={props.onClick}>
        <i className="material-icons" >insert_chart_outlined</i>
    </div>
);

export default details;