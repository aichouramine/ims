import React from 'react';
import classes from './Dropdown.module.css';
import {levels} from "../../../enums/levels";
import {candidate_location} from "../../../enums/candidate_location";
import {english_levels} from "../../../enums/english_levels";
import {candidate_status} from "../../../enums/candidate_status";

const dropdown = (props) => {
    let options = []
    for (let [key, value] of Object.entries(props.options)) {
        options.push(`${value}`);
    }

    let category = null;
    if(props.type === "Level"){
        category = {...levels}
    } else if(props.type === "Location"){
        category = {...candidate_location}
    } else if(props.type === "English"){
        category = {...english_levels}
    } else if(props.type === "Status"){
        category = {...candidate_status}
    }

    let attachedClass = classes.dropdown
    let labelAttachedClass = classes.label
    if(props.error){
        attachedClass = `${classes.dropdown} ${classes.dropdown__error}`
        labelAttachedClass = `${classes.label} ${classes.label__error}`
    }

    let value = "Select";
    if(props.value){
       value = category[props.value]
    }

    return(
        <div>
            <label className={labelAttachedClass}>{props.label}</label>
            <select className={`${attachedClass} form-control`} {...props}
                    value={value}>
                <option >Select...</option>
                {options.map((o, ind) => (
                    <option key={ind} >{o}</option>
                ))}
            </select>
            <div className={classes.invalidFeedback}>{props.error}</div>
        </div>
    )
}

export default dropdown;