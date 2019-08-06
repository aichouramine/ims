import React from 'react';
import classes from './Dropdown.module.css';
import {levels} from "../../../enums/levels";
import {candidate_location} from "../../../enums/candidate_location";

const dropdown = (props) => {
    let options = []
    for (let [key, value] of Object.entries(props.options)) {
        options.push(`${value}`);
    }

    let category = null;
    if(props.label==="Level"){
        category = {...levels}
    } else if(props.label==="Location"){
        category = {...candidate_location}
    }

    let attachedClass = classes.dropdown
    if(props.error){
        attachedClass = `${classes.dropdown} ${classes.dropdown__error}`
    }

    return(
        <div>
            <label className={classes.label}>{props.label}</label>
            <select className={`${attachedClass} form-control`} onChange={props.onChange}
                    value={category[props.value]}>
                <option >Select...</option>
                {options.map((o, ind) => (
                    <option key={ind} >{o}</option>
                ))}
            </select>
        </div>
    )
}

export default dropdown;