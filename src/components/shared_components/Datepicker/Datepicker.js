import React from 'react';
import Hoc from '../../../hoc/Hoc'
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

const datepicker = () => (
    <Hoc>
        <p>Please type a day:</p>
        <DayPickerInput onDayChange={day => console.log(day)} />
    </Hoc>
);

export default datepicker;