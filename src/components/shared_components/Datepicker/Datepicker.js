import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './Datepicker.module.css';

const datepicker = props => (
    <DatePicker
        selected={new Date()}
        onChange={day => console.log(day)}
        showTimeSelect={props.showTimeSelect}
        dateFormat="Pp"
        // calendarContainer={MyContainer}
        // calendarClassName={"react-datepicker__header"}
    />
);

export default datepicker;