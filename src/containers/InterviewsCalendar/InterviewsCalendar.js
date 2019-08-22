import React, { Component } from 'react';
import CalendarView from '../../components/CalendarView/CalendarView';
import {connect} from "react-redux";
import * as interviewsActions from "../../store/actions/interviewsIndex";

class InterviewsCalendar extends Component{
    redirectTo = (page) => {
        this.props.history.push({
            pathname: `${page}`
        })
    }

    componentDidMount(){
        this.props.onFetchInterviews(0, 30)
    }

    render(){
        return(
            <CalendarView interviews={this.props.interviews} redirect={this.redirectTo}/>
        )
    }
}

const mapStateToProps = state => {
    return{
        interviews: state.interviewsReducer.interviews,

    }

}

const mapDispatchToProps = (dispatch) => {
    return{
        onFetchInterviews: (page, size) => dispatch(interviewsActions.fetchInterviews(page, size)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (InterviewsCalendar);