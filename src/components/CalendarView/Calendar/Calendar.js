import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './Calendar.module.css';

const localizer = BigCalendar.momentLocalizer(moment); // or globalizeLocalizer
// let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])
const events = [
    {
        id: 0,
        title: 'All Day Event very long title',
        allDay: true,
        start: new Date(2019, 4, 3),
        end: new Date(2019, 4, 20),
    },
    {
        id: 1,
        title: 'Long Event',
        start: new Date(2015, 3, 7),
        end: new Date(2015, 3, 10),
    },
]


const calendar = props => (
    <BigCalendar
        events={events}
        // views={allViews}
        timeslots={2}
        step={60}
        showMultiDayTimes
        defaultDate={new Date()}
        defaultView={BigCalendar.Views.WEEK}
        localizer={localizer}
        startAccessor="start"
        endAccessor="end"
    />
)

export default calendar;