import React, {useState, useEffect} from 'react';
import classes from './InterviewDetails.module.css';
import Datepicker from '../../shared_components/Datepicker/Datepicker';
import Input from '../../shared_components/Input/Input';
import Dropdown from '../../shared_components/Dropdown/Dropdown';
import {levels} from "../../../enums/levels";
import {candidate_location} from "../../../enums/candidate_location";
import MultipleDropdown from '../../shared_components/MultipleDropdown/MultipleDropdown';
import moment from 'moment'

const initialState = {
    errors: {
        dateError: '',
        interviewersError: '',
    },
    comment: ""
}

const interviewDetails = props => {
    const [interviewEntity, update] = useState({
        date: moment(new Date()).format("YYYY-MM-DDThh:mm:ss+03:00"),
        status: "SCHEDULED",
        comment: null
    });

    const [interviewers, updateInterviewers] = useState([]);

    // const [comment, setComment] = useState(initialState.comment);

    useEffect(() => {
        let selectedInterviewers = props.interviewDetails.interviewers ? props.interviewDetails.interviewers.map(interviewer => {
            return {
                label: `${interviewer.firstname} ${interviewer.lastname}`,
                value: interviewer.id,
            }
        }) : [];

        update(props.interviewDetails);
        updateInterviewers(selectedInterviewers)
    }, [props.interviewDetails]);

    const details = props.interviewDetails.candidate ? props.interviewDetails.candidate : {}

    let list = props.interviewers ? props.interviewers.map(interviewer => {
        return {
            value: interviewer.id,
            label: `${interviewer.firstname} ${interviewer.lastname}`
        }
    }) : [];

    function onInterviewersChanged(e) {
        let updated = {
            ...interviewEntity
        };

        // let errors = {
        //     ...errorsEntity
        // }

        if(e){
            updated.interviewers = e.map(interviewer => {
                return {id: interviewer.value}
            });

            // errors.interviewersError = ''
            //
            // setErrors(errors)
        }
        else {
            updated.interviewers = [];
        }

        update(updated);

    }

    function onDateChanged(date){
        let updated = {
            ...interviewEntity
        }

        // let errors = {
        //     ...errorsEntity
        // }

        updated.date = moment(date).format("YYYY-MM-DDThh:mm:ss+03:00");
        // errors.dateError = '';

        update(updated);
        // setErrors(errors)
    }

    function onCommentChanged(event) {
        let updated = {
            ...interviewEntity
        }

        updated.comment = event.target.value;

        update(updated);

        // setComment(updated)
    }

    function updateInterview() {
        console.log(interviewEntity)
    }

    function close() {
        // setComment(initialState.comment);
        props.onClose();
    }

    return(
        <div className={`${classes.card} h-100 `}>
            <div className={`${classes.card_header} ${classes.border_bottom}`}>
                <h6 className="m-0">Details</h6>
                <div className={classes.cancel} onClick={close}>
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
                                            value={`${details.firstname} ${details.lastname}`}>
                                        <option>{`${details.firstname} ${details.lastname}`}</option>
                                    </select>
                                </div>
                                <div className=" p-0 mb-0" style={{width: '25%'}}>
                                    <Dropdown disabled type="Level" value={details.level} label="Level" options={levels}/>
                                </div>
                                <div className=" p-0 mb-0" style={{width: '25%'}}>
                                    <Dropdown disabled type="Location" value={details.location} label="Location" options={candidate_location}
                                    />
                                </div>
                            </div>
                            <strong className={`d-block mb-2 mt-3 ${classes.text_muted}`}>Interview details</strong>
                            <div className={classes.form_group_wrapper}>
                                <div className="form-group p-0 mb-0 d-flex flex-column">
                                    <div className="d-flex my-auto date-range input-group">
                                        <Datepicker
                                            date={props.interviewDetails.date}
                                            label="When *"
                                            error={false}
                                            dateFormat="MMMM d, yyyy, HH:mm"
                                            showTimeInput={true}
                                            onChangeDate={onDateChanged}
                                            />
                                    </div>
                                </div>
                            </div>
                            <div className={classes.form_group_wrapper} style={{paddingTop: '10px', }}>
                                <div className="form-group p-0 mb-0 d-flex flex-column" style={{width: '100%'}}>
                                    <MultipleDropdown
                                        label="Interviewers *"
                                        onChange={onInterviewersChanged}
                                        list={list}
                                        selectedInterviewers={interviewers}
                                        error={false}
                                    />
                                </div>
                            </div>
                            <div className={classes.form_group_wrapper} style={{paddingTop: '10px', paddingBottom: '10px'}}>
                                <Input inputtype="textarea" label="Comment" type="text" placeholder="Comment"
                                       rows="4" style={{resize: 'none', width: '100%'}} value={interviewEntity.comment || ''} onChange={onCommentChanged}/>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
            <div className={`${classes.card_footer} ${classes.border_top}`}>
                <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <input type="submit" className={`mb-2 mr-1 btn btn-primary btn-sm ${classes.action_button}`}
                           value="Save" onClick={updateInterview}/>
                    <input type="submit"
                           className={`mb-2 mr-1 btn btn-outline-secondary btn-sm ${classes.action_button} ${classes.action_button__cancel}`}
                           value="Cancel" onClick={props.cancel}/>
                </div>
            </div>
        </div>
    )
}

export default interviewDetails;