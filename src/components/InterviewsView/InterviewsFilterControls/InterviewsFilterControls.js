import React from 'react';
import Datepicker from '../../shared_components/Datepicker/Datepicker';
import Dropdown from '../../shared_components/Dropdown/Dropdown';
import classes from './InterviewsFilterControls.module.css';

const LEVEL_OPTIONS = ['Choose...', 'Mastery', 'Junior', 'Middle', 'Senior', 'Lead'];
const STATUS_OPTIONS = ['Choose...', 'To Do', 'Done', 'JO Made', 'JO Rejected', 'JO Accepted', 'Rejected'];
const INTERVIEWER_OPTIONS = ['Choose...', 'Dzmitry Ihnatovich', 'Vitaly Rodin', 'Volha Mukasey'];
const HR_INTERVIEWER_OPTIONS = ['Choose...', 'Olga Kazimirskaya', 'Yulia Haurys',];

const interviewsFilterControls = () => (
    <div className={classes.Wrapper}>
        <div className="form-group">
            <label className={classes.Label}>From</label>
            <Datepicker showTimeSelect={false}/>
        </div>
        <div className="form-group p-0">
            <label className={classes.Label}>To</label>
            <Datepicker showTimeSelect={false}/>
        </div>
        <div className="form-group p-0">
            <label className={classes.Label}>Interviewer</label>
            <Dropdown options={INTERVIEWER_OPTIONS}/>
        </div>
        <div className="form-group p-0">
            <label className={classes.Label}>HR Interviewer</label>
            <Dropdown options={HR_INTERVIEWER_OPTIONS}/>
        </div>
        <div className="form-group p-0">
            <label className={classes.Label}>Level</label>
            <Dropdown options={LEVEL_OPTIONS}/>
        </div>
        <div className="form-group">
            <label className={classes.Label}>Status</label>
            <Dropdown options={STATUS_OPTIONS}/>
        </div>
    </div>
);

export default interviewsFilterControls;