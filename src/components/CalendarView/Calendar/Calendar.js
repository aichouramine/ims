import React, {useState} from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Hoc from '../../../hoc/Hoc';
import classes from './Calendar.module.css';
import EventPopover from '../EventPopover/EventPopover';
import {candidate_location} from "../../../enums/candidate_location";
import {levels} from "../../../enums/levels";

const localizer = BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

// const events = [
//     {
//         id: 0,
//         title: 'All Day Event very long title',
//         allDay: true,
//         'startDate': new Date(2019, 7, 12, 12, 0, 0, 0),
//         'endDate': new Date(2019, 7, 12, 13, 0, 0, 0),
//         desc: 'Power lunch'
//     },
//     {
//         id: 1,
//         title: 'Long Event',
//         'startDate': new Date(2019, 7, 7, 12, 0, 0 ,0 ),
//         'endDate': new Date(2019, 7, 10, 12, 0, 0, 0),
//     },
// ]


// new Date(year, month, day, hours, minutes, seconds, milliseconds)
const calendar = props => {
    const [view, setView] = useState("month");
    const [elementId, setId] = useState(null);
    const [interview, setInterview] = useState({});
    const [showPopover, set] = useState(false);
    const [selectedElement, setElement] = useState(null);

    function selectSlotEvent() {
        let el = selectedElement.parentElement
        el.classList.remove("rbc-selected");

        set(false)
        setElement(null)
    }

    function selectEvent(data, element) {
        let elementId = `Popover_${data.id}`;
        element.target.parentElement.setAttribute("id", elementId);
        element.target.parentElement.classList.add("rbc-selected");
        setId(elementId);
        setInterview(data.desc);
        setElement(element.target)
        set(true)
    }

    return(
        <Hoc>
            <EventPopover
                popoverHeader={`i-view with ${interview.candidateName} (${levels[interview.level]})`} elementId={elementId}
                intId={interview.id} show={showPopover}>

                <ul className={classes.desc}>
                    <li>Start: <span></span></li>
                    <li>End: <span></span></li>
                    <li>Location: <span>{candidate_location[interview.location]}</span></li>
                    <li>Participants: <span></span></li>
                </ul>
            </EventPopover>
            <div style={{width: '100%'}}>
                <BigCalendar
                    toolbar={true}
                    style={{ height: '600px', width: '100%'}}
                    events={props.events}
                    views={['week', 'month']}
                    timeslots={2}
                    step={60}
                    selectable={true}
                    showMultiDayTimes
                    defaultDate={new Date()}
                    view={view}
                    localizer={localizer}
                    startAccessor="startDate"
                    endAccessor="endDate"
                    onView={(e) => setView(e)}
                    onSelectEvent={(data, element) => selectEvent(data, element)}
                    popup={true}
                    onSelectSlot={selectSlotEvent}
                />
            </div>
        </Hoc>
    )
}

export default calendar;