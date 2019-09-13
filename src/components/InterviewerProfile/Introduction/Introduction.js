import React from 'react';
import Hoc from '../../../hoc/Hoc';
import classes from './Introduction.module.css';
import {levels} from "../../../enums/levels";

const introduction = props => {
    let mainData = (
        <div>Loading</div>
    )

    let interviewerStatus = (
        <input type="submit" className={`mt-1 mb-2 mr-1 btn btn-outline-primary btn-sm ${classes.action_button}`}
               value="Edit" onClick={props.onEdit}/>
    )

    let edit = (
        <div className={classes.update} onClick={props.onEdit}>
            <i className="material-icons">edit</i>
        </div>
    )

    if(props.currentStatus){
        interviewerStatus = (
            <span style={{color: 'red', fontWeight: '500'}}>NOT ACTIVE</span>
        )

        edit = null
    }

    if(props.data) {
        mainData = (
            <Hoc>
                <div className={`${classes.text_center} ${classes.card_header} `} >
                    <div className={`mb-3 mx-auto ${classes.avatar_img}` } style={{backgroundImage: `url(${props.data.profilePhoto})`}}>
                    </div>
                    <h4 className={`${classes.name_text} mb-1`}>
                        {`${props.data.firstname} ${props.data.lastname}`}
                    </h4>
                    <span className={`${classes.position_text} d-block mb-2`}>{`${levels[props.data.level]} Engineer`}</span>
                    <span className={`${classes.email_text} d-block mb-2`}>{props.data.email}</span>
                    {interviewerStatus}
                </div>
                <ul className={`list-group list-group-flush ${classes.workload}`} >
                    <li className="px-4">
                        <div className={classes.progress_wrapper}>
                            <div className={classes.workload_wrapper}>
                                <strong className={`${classes.skills_title} ${classes.text_uppercase} d-block mb-2`}>
                                    Workload
                                </strong>
                                <span>100%</span>
                            </div>
                            <div className={`${classes.progress} ${classes.progress_sm}`}>
                                <div className="progress-bar progress-value" role="progressbar" aria-valuenow="100"
                                     aria-valuemin="0" aria-valuemax="100" style={{width: "100%"}}>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className={`p-4 ${classes.skills_group}`}>
                        <strong className={`${classes.skills_title} ${classes.text_uppercase} d-block mb-2`}>
                            Key Skills
                        </strong>
                        <span className={classes.skills_text}>
                            {props.data.skills || 'No skills are set'}
                        </span>
                    </li>
                </ul>
            </Hoc>
        )
    }

    return(
        <Hoc>
            <div className={` ${props.styleClass} mb-4 pt-3`} >
                {mainData}
            </div>
        </Hoc>
    )
}

export default introduction;