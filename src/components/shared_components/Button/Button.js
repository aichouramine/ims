import React from 'react';
import classes from './Button.module.css';

const button = (props) => (
    <button onClick={()=>console.log('clicked')} className={`${classes.Button} mb-2 btn mr-2`} >{props.text}</button>
);

export default button;
