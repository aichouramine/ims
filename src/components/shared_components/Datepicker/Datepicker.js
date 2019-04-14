import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import classes from './Datepicker.module.css';

const datepicker = () => (
    <DayPickerInput classNames={classes} onDayChange={day => console.log(day)} />
);

export default datepicker;