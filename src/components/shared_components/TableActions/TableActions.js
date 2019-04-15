import React from 'react';
import classes from './TableActions.module.css';

const tableActions = props => (
    <div className={classes.TableActions}>
        {props.children}
    </div>
);

export default tableActions;