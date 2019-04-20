import React from 'react';
import classes from './TopInterviewersRow.module.css';

const topInterviewersRow = props => (
    <li className={`${classes.List_item} d-flex px-3 list-group-item`}>
        <span className={`${classes.Text_semibold} ${classes.Text_fiord_blue}`}>{props.name}</span>
        <span className={`ml-auto text-right ${classes.Text_semibold} ${classes.Text_reagent_gray}`}>{props.count}</span>
    </li>
);

export default topInterviewersRow;