import React, {useState} from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Hoc from '../../../hoc/Hoc';
import classes from './Calendar.module.css';
import EventPopover from '../EventPopover/EventPopover';
import {candidate_location} from "../../../enums/candidate_location";
import {levels} from "../../../enums/levels";
import {interview_status} from "../../../enums/interview_status";

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
    const [showPopover, setPopoverState] = useState(false);
    const [selectedElement, setElement] = useState(null);
    const [selectedDate, setDate] = useState(new Date())

    const minTime = new Date();
    minTime.setHours(9,0,0);
    const maxTime = new Date();
    maxTime.setHours(19,30,0);

    moment.locale('ru');

    let interviewers = (
        <div>
            None
        </div>
    )

    function selectSlotEvent() {
        if(selectedElement){
            let el = selectedElement.parentElement
            el.classList.remove("rbc-selected");

            setPopoverState(false)
            setElement(null)
        }

    }

    function selectEvent(data, element) {
        let elementId = `Popover_${data.id}`;
        element.target.parentElement.setAttribute("id", elementId);
        element.target.parentElement.classList.add("rbc-selected");
        setId(elementId);
        setInterview(data.desc);
        setElement(element.target)
        setPopoverState(true)
    }

    function printInterviewers(arr) {
        if(arr && arr.length > 0){
            interviewers = arr.map((int, i) => {
                return(
                    <div key={`${i}`}>
                        {`${int.firstname} ${int.lastname} `}
                    </div>
                )
            })
        }

        return interviewers;
    }

    function onNavigate(d){
        setDate(d)
        setPopoverState(false)
    }

    return(
        <Hoc>
            <EventPopover
                popoverHeader={`i-view with ${interview.candidateName} (${levels[interview.level]})`} elementId={elementId}
                intId={interview.id} show={showPopover}>

                <div className="d-flex flex-row">
                    <ul>
                        <li>Status: </li>
                        <li>Start: </li>
                        <li style={{paddingBottom: '10px'}}>Location: </li>
                        <li>Participants: </li>
                    </ul>
                    <ul className={classes.desc}>
                        <li>{interview_status[interview.status]}</li>
                        <li>{interview.startDate}</li>
                        <li style={{paddingBottom: '10px'}}>{candidate_location[interview.location]}</li>
                        <li>{printInterviewers(interview.interviewers)}</li>
                    </ul>
                </div>
            </EventPopover>
            <div style={{width: '100%'}}>
                <BigCalendar
                    toolbar={true}
                    style={{ height: '600px', width: '100%'}}
                    events={props.events}
                    views={['week', 'month']}
                    timeslots={2}
                    step={30}
                    selectable={true}
                    showMultiDayTimes
                    // defaultDate={new Date()}
                    view={view}
                    localizer={localizer}
                    startAccessor="startDate"
                    endAccessor="endDate"
                    onView={(e) => setView(e)}
                    onSelectEvent={(data, element) => selectEvent(data, element)}
                    popup={true}
                    onSelectSlot={selectSlotEvent}
                    onNavigate={onNavigate}
                    date={selectedDate}
                    min={minTime}
                    max={maxTime}
                />
            </div>
        </Hoc>
    )
}

export default calendar;