import React from 'react';
import Hoc from '../../../hoc/Hoc';
import classes from './Introduction.module.css';

const introduction = props => {


    return(
        <Hoc>
            <div className={` ${classes.card} mb-4 pt-3`}>
                <div className={`${classes.text_center} ${classes.card_header}`}>
                    <div className="mb-3 mx-auto">
                        <img className="rounded-circle" src={require("../../../assets/images/user_avatar.jpeg")}
                             alt="Dzmitry Ihnatovich" style={{width: '110px'}}/>
                    </div>
                    <h4 className={`${classes.name_text} mb-1`}>
                        Dzmitry Ihnatovich
                    </h4>
                    <span className={`${classes.position_text} d-block mb-2`}>Lead QA Engineer</span>
                    <input type="submit" className={`mt-1 mb-2 mr-1 btn btn-outline-danger btn-sm ${classes.action_button}`}
                           value="Remove"/>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="px-4 list-group-item">
                        <div className={classes.progress_wrapper}>
                            <div className={classes.workload_wrapper}>
                                <strong className={`${classes.skills_title} ${classes.text_uppercase} d-block mb-2`}>
                                    Workload
                                </strong>
                                <span>74%</span>
                            </div>
                            <div className={`${classes.progress} ${classes.progress_sm}`}>
                                <div className="progress-bar bg-primary progress-value" role="progressbar" aria-valuenow="74"
                                     aria-valuemin="0" aria-valuemax="100" style={{width: "74%"}}>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className={`p-4 list-group-item ${classes.skills_group}`}>
                        <strong className={`${classes.skills_title} ${classes.text_uppercase} d-block mb-2`}>
                            Key Skills
                        </strong>
                        <span className={classes.skills_text}>
                            Scrum Guru
                        </span>
                    </li>
                </ul>
            </div>
        </Hoc>
    )
}

export default introduction;