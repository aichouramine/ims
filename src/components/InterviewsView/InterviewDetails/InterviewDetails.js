import React, {useState} from 'react';
import classes from './InterviewDetails.module.css';
import Datepicker from '../../shared_components/Datepicker/Datepicker';
import Input from '../../shared_components/Input/Input';
import Dropdown from '../../shared_components/Dropdown/Dropdown';
import {levels} from "../../../enums/levels";
import {locations} from "../../../enums/locations";
import {interview_status} from "../../../enums/interview_status";
import {candidate_location} from "../../../enums/candidate_location";
import MultipleDropdown from '../../shared_components/MultipleDropdown/MultipleDropdown';

const interviewDetails = props => {
    const [searchString, setSearch] = useState(" ");

    let list = props.interviewers ? props.interviewers.map(interviewer => {
        return {
            value: interviewer.id,
            label: `${interviewer.firstname} ${interviewer.lastname}`
        }
    }) : [];

    function handleChange(e){
        console.log(e)
    }


    return(
        <div className={`${classes.card} h-100 `}>
            <div className={`${classes.card_header} ${classes.border_bottom}`}>
                <h6 className="m-0">Add new record</h6>
                <div className={classes.cancel} onClick={props.onClose}>
                    <i className="material-icons">clear</i>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <form>
                        <div className={`px-3 list-group-item ${classes.form_body}`}>
                            <strong className={`d-block mb-2 mt-3 ${classes.text_muted}`}>Candidate details</strong>
                            <div className={classes.form_group_wrapper}>
                                <div className="form-group pl-0 mb-0" style={{width: '45%'}}>
                                    <label className={classes.label}>Name</label>
                                    <select disabled className={`${classes.dropdown} form-control`}
                                            value={`${props.candidate.firstname} ${props.candidate.lastname}`}>
                                        <option selected>{`${props.candidate.firstname} ${props.candidate.lastname}`}</option>
                                    </select>
                                    {/*<Input disabled value={`${props.candidate.firstname} ${props.candidate.lastname}`}*/}
                                           {/*inputtype="input" label="Name" type="text" placeholder="Name"/>*/}
                                </div>
                                <div className=" p-0 mb-0" style={{width: '25%'}}>
                                    <Dropdown disabled value={props.candidate.level} label="Level" options={levels}/>
                                </div>
                                <div className=" p-0 mb-0" style={{width: '25%'}}>
                                    <Dropdown disabled value={props.candidate.location} label="Location" options={candidate_location}
                                    />
                                </div>
                            </div>

                            <strong className={`d-block mb-2 mt-3 ${classes.text_muted}`}>Interview details</strong>
                            <div className={classes.form_group_wrapper}>
                                <div className="form-group p-0 mb-0 d-flex flex-column">
                                    <label className={classes.label}>When</label>
                                    <div className="d-flex my-auto date-range input-group">
                                        <Datepicker showTimeSelect={false}/>
                                        <div className="input-group-append">
                                            <span className={classes.datepicker_calendar__append}>
                                                <i className="material-icons">date_range</i>
                                            </span></div>
                                    </div>
                                </div>
                            </div>
                            <div className={classes.form_group_wrapper} style={{paddingTop: '10px', }}>
                                <div className="form-group p-0 mb-0 d-flex flex-column" style={{width: '100%'}}>
                                    <label className={classes.label}>Interviewers</label>
                                    <MultipleDropdown onChange={handleChange} list={list}/>
                                </div>
                            </div>
                            <div className={classes.form_group_wrapper} style={{paddingTop: '10px', paddingBottom: '10px'}}>
                                <Input inputtype="textarea" label="Comment" type="text" placeholder="Comment"
                                       rows="4" style={{resize: 'none', width: '100%'}} onChange={props.onCommentChanged}/>
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

export default interviewDetails;