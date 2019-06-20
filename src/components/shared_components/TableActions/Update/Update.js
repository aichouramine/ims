import React from 'react';
import classes from './Update.module.css';

const update = (props) => (
    <div className={classes.Update} onClick={props.onEdit}>
        <i className="material-icons">edit</i>
    </div>
);

export default update;