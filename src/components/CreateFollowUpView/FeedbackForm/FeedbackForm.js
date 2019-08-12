import React from 'react';
import classes from './FeedbackForm.module.css';
import {levels} from "../../../enums/levels";
import {candidate_location} from "../../../enums/candidate_location";
import {english_levels} from "../../../enums/english_levels";
import Datepicker from '../../shared_components/Datepicker/Datepicker';
import Input from '../../shared_components/Input/Input';
import Dropdown from '../../shared_components/Dropdown/Dropdown';

const feedbackForm = props => {
    return(
        <div className={`${classes.feedback_card} h-100 `}>
            <div className={`${classes.feedback_card_header} ${classes.border_bottom}`}>
                <h6 className="m-0">Feedback</h6>
            </div>
            <div className="d-flex py-2 flex-column">
                <form style={{padding: '15px'}} noValidate>
                    <div className={classes.form_group_wrapper}>
                        <div className=" p-0 mb-0" style={{width: '20%'}}>
                            <Input disabled value={props.profile.name}  inputtype="input" label="Name" type="text" placeholder="Name"
                                   onChange={props.onLastnameChanged}
                                   error={props.errors.nameError}/>
                        </div>
                        <div className=" p-0 mb-0" style={{width: '25%'}}>
                            <Dropdown value={props.profile.level} label="Level" options={levels}
                                      onChange={props.onLevelChanged}
                                      error={props.errors.levelError}
                            />
                        </div>
                        <div className=" p-0 mb-0" style={{width: '25%'}}>
                            <Dropdown value={props.profile.english} label="English" options={english_levels}
                                      onChange={props.onEnglishChanged}
                                      error={props.errors.englishError}
                            />
                        </div>
                        <div className=" p-0 mb-0" style={{width: '20%'}}>
                            <Input value={props.profile.lastname} inputtype="input" label="Salary" type="text" placeholder="Salary"
                                   onChange={props.onLastnameChanged}
                                   error={props.errors.lastNameError}/>
                        </div>
                    </div>
                    <div className="pt-4 ">
                        <div className="form-row">
                            <div className="col col-md-12">
                                <Input inputtype="textarea" label="Education" type="text" placeholder="Education"
                                       rows="3" style={{resize: 'none'}} onChange={props.onSkillsChanged}/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col col-md-12">
                                <Input inputtype="textarea" label="Soft skills" type="text" placeholder="Soft skills"
                                       rows="3" style={{resize: 'none'}} onChange={props.onCommentChanged}/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col col-md-12">
                                <Input inputtype="textarea" label="Communication with customer" type="text" placeholder="Communication with customer"
                                       rows="3" style={{resize: 'none'}} onChange={props.onSkillsChanged}/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col col-md-12">
                                <Input inputtype="textarea" label="Technical skills" type="text" placeholder="Technical skills"
                                       rows="4" style={{resize: 'none'}} onChange={props.onCommentChanged}/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col col-md-12">
                                <Input inputtype="textarea" label="Reasons" type="text" placeholder="Reasons"
                                       rows="2" style={{resize: 'none'}} onChange={props.onCommentChanged}/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col col-md-12">
                                <Input inputtype="textarea" label="Summary" type="text" placeholder="Summary"
                                       rows="6" style={{resize: 'none'}} onChange={props.onCommentChanged}/>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default feedbackForm;