import React, {useState} from 'react';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import './Datepicker.module.css';

const datepicker = props => {
    const [date, setDate] = useState(new Date());

    function handleDateChange(day) {
        setDate(day)
    }
    
    return(
        <DatePicker
            {...props}
            selected={date}
            onChange={day => handleDateChange(day)}
            className={"date_input"}
            timeFormat="HH:mm"
            timeIntervals={15}
            dateFormat="MMMM d, yyyy h:mm aa"
            timeCaption="time"
            // minDate={new Date()}
            // calendarContainer={MyContainer}
            // calendarClassName={classes["react-datepicker"]}
        />
        )
};

export default datepicker;