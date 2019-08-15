import React, {useState} from 'react';
import classes from './InterviewDetails.module.css';
import Datepicker from '../../shared_components/Datepicker/Datepicker';
import Input from '../../shared_components/Input/Input';
import Dropdown from '../../shared_components/Dropdown/Dropdown';
import {levels} from "../../../enums/levels";
import {locations} from "../../../enums/locations";
import {interview_status} from "../../../enums/interview_status";
import {candidate_location} from "../../../enums/candidate_location";
import Select from 'react-select';

const interviewerDetails = props => {
    // console.log(props.interviewers)
    // const [selectedOption]
    const [searchString, setSearch] = useState(" ");

    let list = props.interviewers ? props.interviewers.slice() : [];
    let selectedInterviewers = [];

    function handleChange(e){
        setSearch(e.target.value.trim().toLowerCase())
    }

    function filterInterviewers(event) {


        // console.log(searchString);


    }

    let search = searchString.trim().toLowerCase();

    if(search.length > 0) {
        list = list.filter((el) => el.lastname.toLowerCase().match(search))
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
                                    <Input disabled value={`${props.candidate.firstname} ${props.candidate.lastname}`}
                                           inputtype="input" label="Name" type="text" placeholder="Name"/>
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
                                    <Datepicker showTimeSelect={false}/>
                                </div>
                                <div className="form-group p-0 mb-0 d-flex flex-column">
                                    {/*<Input onChange={handleChange} value={searchString}*/}
                                           {/*inputtype="input" label="Interviewers" type="text" placeholder="Type here..."/>*/}
                                    <label className={classes.label}>Interviewers</label>
                                    {/*<Select*/}
                                        {/*defaultValue={[]}*/}
                                        {/*isMulti*/}
                                        {/*name="colors"*/}
                                        {/*options={ props.interviewers}*/}
                                        {/*className="basic-multi-select"*/}
                                        {/*classNamePrefix="select"*/}
                                    {/*/>*/}
                                </div>
                                {/*<div className="form-group p-0 mb-0">*/}
                                    {/*<input list="interviewers"/>*/}
                                        {/*<datalist id="interviewers">*/}
                                            {/*{list.map(el => {*/}
                                                {/*return(*/}
                                                    {/*<option value={`${el.firstname} ${el.lastname}`}/>*/}
                                                {/*)*/}
                                            {/*})}*/}

                                        {/*</datalist>*/}
                                {/*</div>*/}

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

export default interviewerDetails;