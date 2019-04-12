import React from 'react';
import classes from './MenuRow.module.css'

const menuRow = (props) => (
    <li className={`${classes.NavItem} nav-item`}>
        <a href="#section-1" className={`${classes.NavLink} nav-link`}>
            <i className="material-icons">{props.icon}</i>
            <span style={{paddingLeft: "15px"}}>{props.title}</span>
        </a>
    </li>
);

export default menuRow;