import React, {useState} from 'react';
import DatePicker from "react-datepicker";
import Hoc from '../../../hoc/Hoc'
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import classes from './Datepicker.module.css';
import moment from 'moment';

const datepicker = props => {
    const [date, setDate] = useState(props.date);

    function handleDateChange(day) {
        if(props.onChangeDate){
            props.onChangeDate(day)
        }

        setDate(day)
    }

    let labelAttachedClass = classes.label
    if(props.error){
        labelAttachedClass = `${classes.label} ${classes.label__error}`

        let input = document.querySelector("input");
        input.classList.add(`${classes.error}`);
    }

    return(

        <Hoc>
            <div className="d-flex flex-column">
                <label className={labelAttachedClass}>{props.label}</label>
                <div className="d-flex flex-row">
                    <DatePicker
                        showTimeSelect={false}
                        selected={moment(date).toDate()}
                        onChange={day => handleDateChange(day)}
                        timeFormat="HH:mm"
                        timeIntervals={15}
                        dateFormat="MMMM d, yyyy h:mm a"
                        timeCaption="Time"
                        // showTimeInput
                        // minDate={new Date()}
                        // calendarContainer={MyContainer}
                        // calendarClassName={classes.input__error}
                    />
                    <div className="input-group-append">
                        <div id="calendar" className={classes.datepicker_calendar__append}>
                            <i className="material-icons">date_range</i>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.invalidFeedback}>{props.error}</div>
        </Hoc>
        )
};

export default datepicker;