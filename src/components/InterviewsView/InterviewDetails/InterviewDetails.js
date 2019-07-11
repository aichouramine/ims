import React from 'react';
import classes from './InterviewDetails.module.css';
import Datepicker from '../../shared_components/Datepicker/Datepicker';
import Dropdown from '../../shared_components/Dropdown/Dropdown';
import {levels} from "../../../enums/levels";
import {locations} from "../../../enums/locations";
import {statuses} from "../../../enums/statuses";

const newInterviewerView = props => {
    return(
        <div className={`${classes.card} h-100 `}>
            <div className={`${classes.card_header} ${classes.border_bottom}`}>
                <h6 className="m-0">Add new record</h6>
            </div>
            <div className="row">
                <div className="col">
                    <form>
                        <div className={`px-3 list-group-item ${classes.form_body}`}>
                            <strong className={`d-block mb-2 ${classes.text_muted}`}>Candidate details</strong>
                            <div className={classes.form_group_wrapper}>
                                <div className="form-group pl-0 mb-0">
                                    <label htmlFor="feFirstname" className={classes.label}>Firstname</label>
                                    <input id="feFirstname" type="text" placeholder="Firstname"
                                           className={`form-control ${classes.custom_input_control}`}/>
                                </div>
                                <div className="form-group p-0 mb-0">
                                    <label htmlFor="feLastname" className={classes.label}>Lastname</label>
                                    <input id="feLastname" type="text" placeholder="Lastname"
                                           className={`form-control ${classes.custom_input_control}`}/>
                                </div>
                            </div>
                            <div className={classes.form_group_wrapper}>
                                <div className="form-group p-0 mb-0">
                                    <label className={classes.label}>Level</label>
                                    <Dropdown options={levels}/>
                                </div>
                                <div className="form-group p-0 mb-0">
                                    <label className={classes.label}>Location</label>
                                    <Dropdown options={locations}/>
                                </div>
                            </div>

                            <strong className={`d-block mb-2 ${classes.text_muted}`}>Interview details</strong>
                            <div className={classes.form_group_wrapper}>
                                <div className="form-group p-0 mb-0 d-flex flex-column">
                                    <label className={classes.label}>When</label>
                                    <Datepicker showTimeSelect={true}/>
                                </div>
                                <div className="form-group p-0 mb-0">
                                    <label className={classes.label}>Who</label>
                                    <Dropdown options={locations}/>
                                </div>
                                <div className="form-group p-0 mb-0">
                                    <label className={classes.label}>Status</label>
                                    <Dropdown options={statuses}/>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className={`${classes.card_footer} ${classes.border_top}`}>
                <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <input type="submit" className={`mb-2 mr-1 btn btn-primary btn-sm ${classes.action_button}`}
                           value="Save" onClick={props.onConfirm}/>
                    <input type="submit"
                           className={`mb-2 mr-1 btn btn-outline-secondary btn-sm ${classes.action_button} ${classes.action_button__cancel}`}
                           value="Cancel" onClick={props.onClose}/>
                </div>
            </div>
        </div>
    )
}

export default newInterviewerView;