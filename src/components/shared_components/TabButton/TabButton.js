import React from 'react';
import classes from './TabButton.module.css';

const tabButton = props => (
    <div className={`${classes.Tab_button} nav nav-tabs`} id="nav-tab" role="tablist" onClick={props.onClicked}>
        <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab"
           aria-controls="nav-home" aria-selected="true">
            <i className="material-icons">add_circle_outline</i>
                <span>{props.label}</span>
            </a>
    </div>
);

export default tabButton;