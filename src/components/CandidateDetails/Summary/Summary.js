import React from 'react';
import classes from './Summary.module.css';
import {candidate_status} from "../../../enums/candidate_status";
import moment from "moment/moment";

const summary = props => {

    let date = "none"
    if(props.interviewDate){
        date = moment(props.interviewDate).format("DD-MMMM-YY")
    }

    let startDate = "none";
    if(props.profile.startDate){
        startDate = moment(props.profile.startDate).format("DD-MMMM-YY")
    }

    return(

        <div className={`${classes.summary} h-100 `}>
            <div className={`${classes.summary_card_header} ${classes.border_bottom}`}>
                <h6 className="m-0">Summary</h6>
            </div>
            <div className="d-flex py-0">
                <ul className={`${classes.summary_body} list-group list-group-flush`} >
                    <li className={classes.summary_body__row}>
                        <span><strong>Name: </strong>{`${props.profile.firstname} ${props.profile.lastname}`}</span>
                    </li>
                    <li className={classes.summary_body__row}>
                        <span><strong>Status: </strong>{candidate_status[props.profile.candidateStatus]}</span>
                        <div className={classes.edit}>edit</div>
                    </li>
                    <li className={classes.summary_body__row}>
                        <span><strong>Interview date: </strong>{date}</span>
                    </li>
                    <li className={classes.summary_body__row}>
                        <span><strong>Start Date: </strong>{startDate}</span>
                        <div className={classes.edit}>edit</div>
                    </li>
                    <li className={classes.summary_body__row}>
                        <span><strong>I-view follow-up: </strong>link</span>
                        <div className={classes.edit}>add</div>
                    </li>
                </ul>

            </div>
            <div className={`${classes.card_footer} ${classes.border_top}`}>
                <div className="row">
                    <div style={{display: 'flex', justifyContent: 'space-between', width: '100%', padding: '0 15px'}}>
                        <button type="submit" className={`mb-2 mr-1 btn btn-primary btn-sm `}
                                style={{width: '25%'}} onClick={props.onConfirm}>Update</button>
                        <button type="cancel"
                               className={`mb-2 mr-1 btn btn-outline-secondary btn-sm`}
                                style={{width: '25%'}} onClick={props.cancel}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default summary;