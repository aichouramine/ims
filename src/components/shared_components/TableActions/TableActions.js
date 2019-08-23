import React from 'react';
import classes from './TableActions.module.css';

const tableActions = props => {
    let attachedClass = `${classes.TableActions}`

    return(
        <div style={props.style} className={attachedClass}>
            {props.children}
        </div>
        )
};

export default tableActions;