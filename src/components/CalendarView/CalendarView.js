import React from 'react';
import Calendar from './Calendar/Calendar';
import PageHeader from '../Layout/PageHeader/PageHeader';
import Hoc from '../../hoc/Hoc';
import classes from './CalendarView.module.css';
import {levels} from '../../enums/levels'
import moment from 'moment';

const calendarView = props => {
    let events = props.interviews ? props.interviews.map(interview => {
        return {
            id: interview.id,
            title: `${moment(interview.date).format("HH:mm")} ${interview.candidate.firstname} ${interview.candidate.lastname} 
            (${levels[interview.candidate.level]})`,
            'startDate': interview.date,
            'endDate': interview.date,
            desc: {
                candidateName: `${interview.candidate.firstname} ${interview.candidate.lastname}`,
                startDate: interview.date,
                location: interview.candidate.location,
                level: interview.candidate.level
            }
        }
    }) : []

    return(
        <Hoc>
            <div className="page-header no-gutters py-4 row">
                <PageHeader subtitle="Calendar" title="Schedule"/>
            </div>
            <div className={`${classes.Card}`}>
                <div className={`${classes.Card_header} ${classes.Border_bottom}`}>
                    <h6 className="m-0">Schedule overview</h6>
                </div>
                <div className="d-flex card-body w-100">
                    <Calendar events={events} interviews={props.interviews}/>
                </div>
                <div className={`${classes.Card_footer} ${classes.Border_top}`}>
                    <div className={`${classes.View_report} ${classes.Text_right} col`}>
                        <div onClick={() => props.redirect('interviews')}>Go to interviews view →</div>
                    </div>
                </div>
            </div>
        </Hoc>
    )
}

export default calendarView;