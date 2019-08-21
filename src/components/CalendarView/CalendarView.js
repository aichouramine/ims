import React from 'react';
import Calendar from './Calendar/Calendar';
import PageHeader from '../Layout/PageHeader/PageHeader';
import Hoc from '../../hoc/Hoc';
import classes from './CalendarView.module.css';

const calendarView = props => (
    <Hoc>
        <div className="page-header no-gutters py-4 row">
            <PageHeader subtitle="Calendar" title="Schedule"/>
        </div>
        <div className={`${classes.Card} h-100`}>
            <div className={`${classes.Card_header} ${classes.Border_bottom}`}>
                <h6 className="m-0">Schedule overview</h6>
            </div>
            <div className="d-flex card-body w-100">
                <Calendar/>
            </div>
            <div className={`${classes.Card_footer} ${classes.Border_top}`}>
                <div className={`${classes.View_report} ${classes.Text_right} col`}>
                    <div onClick={() => props.redirect('interviews')}>Go to interviews view →</div>
                </div>
            </div>
        </div>
    </Hoc>
)

export default calendarView;