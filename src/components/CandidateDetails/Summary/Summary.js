import React, {useState} from 'react';
import classes from './Summary.module.css';
import {candidate_status} from "../../../enums/candidate_status";
import moment from "moment/moment";
import Datepicker from '../../shared_components/Datepicker/Datepicker'
import {levels} from "../../../enums/levels";
import Dropdown from '../../shared_components/Dropdown/Dropdown'

const summary = props => {
    // console.log(props)
    const [showDatePicker, setVisibility] = useState(false)
    const [showStatusPicker, setStatusPickerVisibility] = useState(false)

    let date = "none"
    if(props.interviewDate){
        date = moment(props.interviewDate).format("DD-MMMM-YY")
    }

    let startDate = "none";
    if(props.profile.startDate){
        startDate = moment(props.profile.startDate).format("DD-MMMM-YY")
    }

    function toggleDatePicker() {
        let show = showDatePicker;
        setVisibility(!show)
    }

    function toggleStatusPicker() {
        let show = showStatusPicker;
        setStatusPickerVisibility(!show)
    }

    if(showDatePicker){
        startDate = <Datepicker date={startDate || ''} dateFormat="dd-MMMM-yy"/>
    }

    let status = candidate_status[props.profile.candidateStatus];

    if(showStatusPicker){
        status = <Dropdown type="Status" value={props.profile.candidateStatus} options={candidate_status}/>
    }

    return(

        <div className={`${classes.summary} h-100 `}>
            <div className={`${classes.summary_card_header} ${classes.border_bottom}`}>
                <h6 className="m-0">Summary</h6>
            </div>
            <div className="d-flex" style={{padding: '10px 15px'}}>
                <ul className={`${classes.summary_body} `} >
                    <li className={classes.summary_body__row}>
                        <span><strong>Name: </strong>{`${props.profile.firstname} ${props.profile.lastname}`}</span>
                    </li>
                    <li className={classes.summary_body__row}>
                        <span><strong>Status: </strong>{status}</span>
                        {!showStatusPicker? <div className={classes.edit} onClick={toggleStatusPicker}>edit</div> : null}
                    </li>
                    <li className={classes.summary_body__row}>
                        <span><strong>Interview date: </strong>{date}</span>
                    </li>
                    {status==='Jo Accepted' || status==='Started' || showStatusPicker?
                        <li className={classes.summary_body__row}>
                            <span><strong>Start Date: </strong>{startDate}</span>
                            {!showDatePicker? <div className={classes.edit} onClick={toggleDatePicker}>edit</div> : null}

                        </li> : null}
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
                                style={{width: '25%'}} onClick={props.onConfirm}>Save</button>
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