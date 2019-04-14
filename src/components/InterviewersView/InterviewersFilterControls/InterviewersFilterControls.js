import React, {Component} from 'react';
import classes from './InterviewersFilterControls.module.css';
import Checkbox from '../../shared_components/Checkbox/Checkbox';
import Dropdown from '../../shared_components/Dropdown/Dropdown';

const INTERVIEWER_OPTIONS = ['Interviewer...', 'Dzmitry Ihnatovich', 'Vitaly Rodin', 'Volha Mukasey'];

const interviewersFilterControls = () => (
    <div className={classes.Wrapper}>
        <Checkbox label="Minsk"/>
        <Checkbox label="Brest"/>
        <Checkbox label="Grodno"/>
        <Checkbox label="Gomel"/>
        <Checkbox label="Mogilev"/>
        <Dropdown options={INTERVIEWER_OPTIONS}/>
    </div>
);

export default interviewersFilterControls;