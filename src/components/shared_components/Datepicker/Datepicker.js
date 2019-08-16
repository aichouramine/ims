import React, {useState} from 'react';
import DatePicker from "react-datepicker";
import Hoc from '../../../hoc/Hoc'
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import classes from './Datepicker.module.css';

const datepicker = props => {
    const [date, setDate] = useState(new Date());

    function handleDateChange(day) {
        if(props.onChangeDate){
            props.onChangeDate(day)
        }

        setDate(day)
    }

    let labelAttachedClass = classes.label
    if(props.error){
        labelAttachedClass = `${classes.label} ${classes.label__error}`
    }

    return(
        <Hoc>
            <div className="d-flex flex-column">
                <label className={labelAttachedClass}>{props.label}</label>
                <div className="d-flex flex-row">
                    <DatePicker
                        showTimeSelect={false}
                        selected={date}
                        onChange={day => handleDateChange(day)}
                        timeFormat="HH:mm"
                        timeIntervals={15}
                        dateFormat="MMMM d, yyyy h:mm aa"
                        timeCaption="Time"

                        // minDate={new Date()}
                        // calendarContainer={MyContainer}
                        calendarClassName={classes.input__error}
                    />
                    <div className="input-group-append">
                        <span className={classes.datepicker_calendar__append}>
                            <i className="material-icons">date_range</i>
                        </span>
                    </div>
                </div>
            </div>
            <div className={classes.invalidFeedback}>{props.error}</div>
        </Hoc>
        )
};

export default datepicker;