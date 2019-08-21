import React, {useState} from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import classes from './Calendar.module.css';

const localizer = BigCalendar.momentLocalizer(moment); // or globalizeLocalizer
let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])
const events = [
    {
        id: 0,
        title: 'All Day Event very long title',
        allDay: true,
        start: new Date(2019, 8, 3),
        end: new Date(2019, 8, 20),
    },
    {
        id: 1,
        title: 'Long Event',
        start: new Date(2015, 3, 7),
        end: new Date(2015, 3, 10),
    },
]



const calendar = props => {
    const [view, setView] = useState("month");

    return(
        <div style={{width: '100%'}}>
            <div className="btn btn-group " style={{width: '30%'}}>
                <button  onClick={() => setView("week")}>Week</button>
                <button  onClick={() => setView("month")}>Month</button>
            </div>
            <BigCalendar
                toolbar={false}
                style={{ height: 500, width: '100%'}}
                events={events}
                views={allViews}
                timeslots={2}
                step={60}
                showMultiDayTimes
                defaultDate={new Date()}
                view={view}
                localizer={localizer}
                startAccessor="start"
                endAccessor="end"
            />
        </div>
    )
}

export default calendar;