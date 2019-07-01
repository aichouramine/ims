import React, {Component} from 'react';
import { connect } from 'react-redux';
import DashboardView from '../../components/DashboardView/DashboardView';
import * as interviewersActions from '../../store/actions/interviewersIndex';
import * as interviewsActions from '../../store/actions/interviewsIndex';
import {getInterviewsByStatus} from '../../api/axios-interviews';
import {statuses}  from '../../enums/statuses'

class Dashboard extends Component{
    constructor(props) {
        super(props);

        this.state = {
            rejected: null,
            jo_rejected: null,
            jo_made: null
        }
    }

    componentDidMount(){
        this.props.onFetchTopInterviewers();
        this.props.onFetchTotalInterviewsNumber();
        this.getRejectedInterviews()
        this.getJoRejectedInterviews()
        this.getJoMadeInterviews()
    }

    getRejectedInterviews = () => {
        getInterviewsByStatus("REJECTED")
            .then((response) => this.setState({
                rejected: response.data
            }))
    }

    getJoRejectedInterviews = () => {
        getInterviewsByStatus("JO_REJECTED")
            .then((response) => this.setState({
                jo_rejected: response.data
            }))
    }

    getJoMadeInterviews = () => {
        getInterviewsByStatus("JO_MADE")
            .then((response) => this.setState({
                jo_made: response.data
            }))
    }

    render(){
        return(
            <DashboardView
                totalNumberOfInterviews={this.props.interviewsNumber}
                rejectedCandidates={this.state.rejected}
                joMade={this.state.jo_made}
                joRejected={this.state.jo_rejected}
                topInterviewers={this.props.topInterviewers}
            />
        )
    }
}

const mapStateToProps = state => {

    return{
        topInterviewers: state.interviewersReducer.topInterviewers,
        interviewsNumber: state.interviewsReducer.interviewsNumber
    }

}

const mapDispatchToProps = (dispatch) => {
    return{
        onFetchTopInterviewers: () => dispatch(interviewersActions.fetchTopInterviewers()),
        onFetchTotalInterviewsNumber: () => dispatch(interviewsActions.fetchInterviewsNumber())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);