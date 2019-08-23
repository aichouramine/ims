import React from 'react';
import classes from './InterviewerCard.module.css'
import {levels} from "../../../enums/levels";
import {locations} from "../../../enums/locations";
import moment from "moment/moment";

const interviewerCard = props => {
    function goToProfile(obj) {
        props.onInterviewerEdit(obj)
    }

    return(
        <li className={`${classes.card} h-100`} >
            <ul className={classes.wrapper} onClick={() => goToProfile(props.interviewer)}>
                <div style={{padding: '10px 20px'}}>
                    <div className={`${classes.small_avatar} mr-2 pr-2`}
                         style={{backgroundImage: `url(${props.interviewer.profilePhoto})`}}/>
                </div>
                <ul className={classes.right_info}>
                    <li className={`${classes.right_info__field} ${classes.right_info__field_name}`}>
                        {`${props.interviewer.firstname} ${props.interviewer.lastname}`}
                    </li>
                    <li className={`${classes.right_info__field} ${classes.right_info__field_title} `} >
                        {`${levels[props.interviewer.level]} Engineer`}
                    </li>
                    <li className={`${classes.right_info__field} ${classes.right_info__field_location} ${classes.right_info__field_icon}`}>
                        <i className="material-icons" >
                            location_on
                        </i>
                        <span>{locations[props.interviewer.location]}</span>
                    </li>
                    <li className={`${classes.right_info__field} ${classes.right_info__field_email} ${classes.right_info__field_icon}`}>
                        <i className="material-icons" >
                            email
                        </i>
                        <span>{props.interviewer.email}</span>
                    </li>
                </ul>
            </ul>
            <ul className={classes.footer}>
                <li>
                    <span className={classes.header}>Total interviews</span>
                    <span className={classes.number}>{props.interviewer.totalInterviews}</span>
                </li>
                <li>
                    <span className={classes.header}>Last i-view date</span>
                    <span className={classes.date}>{moment(props.interviewer.lastInterviewDate).format("DD-MMMM-YY")}</span>
                </li>
            </ul>
        </li>
    )
}

export default interviewerCard;