import React from 'react';
import classes from './Details.module.css';
import {levels} from "../../../enums/levels";
import Datepicker from '../../shared_components/Datepicker/Datepicker';
import Input from '../../shared_components/Input/Input';
import Dropdown from '../../shared_components/Dropdown/Dropdown';
import {candidate_location} from "../../../enums/candidate_location";

const details = props => {
    return(
        <div className={`${classes.summary_card} h-100 `}>
            <div className={`${classes.summary_card_header} ${classes.border_bottom}`}>
                <h6 className="m-0">Details</h6>
            </div>
            <div className="d-flex py-2 flex-column">
                <form style={{padding: '15px'}} noValidate>
                    <div className={classes.form_group_wrapper}>
                        <div className=" p-0 mb-0" style={{width: '25%'}}>
                            <Input value={props.profile.firstname} inputtype="input" label="Firstname *" type="text" placeholder="Firstname"
                                   onChange={props.onFirstnameChanged}
                                   error={props.errors.firstNameError}
                            />
                        </div>
                        <div className=" p-0 mb-0" style={{width: '25%'}}>
                            <Input value={props.profile.lastname} inputtype="input" label="Lastname *" type="text" placeholder="Lastname"
                                   onChange={props.onLastnameChanged}
                                   error={props.errors.lastNameError}
                            />
                        </div>
                        <div className=" p-0 mb-0" style={{width: '20%'}}>
                            <Dropdown value={props.profile.level} type="Level" label="Level *" options={levels} onChange={props.onLevelChanged}
                                      error={props.errors.levelError}/>
                        </div>
                        <div className="p-0 mb-0" style={{width: '20%'}}>
                            <Dropdown value={props.profile.location} type="Location" label="Location *" options={candidate_location}
                                      onChange={props.onLocationChanged}
                                      error={props.errors.locationError}
                            />
                        </div>
                    </div>
                    <div className="pt-4 ">
                        <div className="form-row">
                            <div className="col col-md-12">
                                <Input inputtype="textarea" label="Skills" type="text" placeholder="Skills"
                                       rows="6" style={{resize: 'none'}} onChange={props.onSkillsChanged}/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col col-md-12">
                                <Input inputtype="textarea" label="Comment" type="text" placeholder="Comment"
                                       rows="6" style={{resize: 'none'}} onChange={props.onCommentChanged}/>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default details;