import React, { Component } from 'react';
import CalendarView from '../../components/CalendarView/CalendarView';

class InterviewsCalendar extends Component{
    redirectTo = (page) => {
        this.props.history.push({
            pathname: `${page}`
        })
    }

    render(){
        return(
            <CalendarView redirect={this.redirectTo}/>
        )
    }
}

export default InterviewsCalendar;