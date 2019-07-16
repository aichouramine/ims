import React from 'react';
import classes from './InterviewerCard.module.css'
import {levels} from "../../../enums/levels";

const interviewerCard = props => {
    function goToProfile(obj) {
        props.onInterviewerEdit(obj)
    }

    return(
        <li className={`${classes.card} h-100`} onClick={() => goToProfile(props.interviewer)}>
            <div className={`${classes.wrapper} `}>
                <div className={classes.left} >
                    <div className={`${classes.small_avatar} user-avatar mr-2 pr-2`}
                         style={{backgroundImage: `url(${props.interviewer.profilePhoto})`}}/>
                </div>
                <div className={`${classes.right} ${classes.wrapper_field}`}>
                    <span className={classes.right__name}>{`${props.interviewer.firstname} ${props.interviewer.lastname}`}</span>
                    <span className={classes.right__level}>{`${levels[props.interviewer.level]} Engineer`}</span>
                    <span className={classes.right__location}>{props.interviewer.location}</span>
                    <div className={classes.email_wrapper}>
                        <i className="material-icons" >
                            email
                        </i>
                        <span>{props.interviewer.email}</span>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default interviewerCard;