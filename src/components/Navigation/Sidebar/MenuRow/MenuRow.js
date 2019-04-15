import React from 'react';
import classes from './MenuRow.module.css'
import { NavLink } from 'react-router-dom';

const menuRow = (props) => (
    <li className={`${classes.NavItem} nav-item`}>
        <NavLink to={props.navLink} exact className={`${classes.NavLink} nav-link`}>
            <i className="material-icons">{props.icon}</i>
            <span style={{paddingLeft: "15px"}}>{props.title}</span>
        </NavLink>
    </li>
);

export default menuRow;