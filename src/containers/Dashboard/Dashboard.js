import React, {Component} from 'react';
import { connect } from 'react-redux';
import DashboardView from '../../components/DashboardView/DashboardView';
import * as interviewersActions from '../../store/actions/interviewersIndex';
import * as interviewsActions from '../../store/actions/interviewsIndex';
import { getInterviewsStatisticByDate } from '../../api/axios-interviews';
import {getCandidatesLevelsCountByDate, getCandidatesByStatus,
    getCandidatesLocationsCountByDate, getNewcomersWithDates} from '../../api/axios-candidates';

class Dashboard extends Component{
    constructor(props) {
        super(props);

        this.state = {
            rejected: null,
            jo_rejected: null,
            started: null,
            levels: [],
            locations: [],
            prevYearStatistic: [],
            currentYearStatistic: [],
            statistic: {
                prevYear: [],
                currentYear: []
            },
            newcomers: []
        }
    }

    componentDidMount(){
        window.scrollTo(0, 0)
        this.props.onFetchTopInterviewers();
        this.props.onFetchTotalInterviewsNumber();
        this.getRejectedCandidates();
        this.getJoRejectedCandidates();
        this.getStartedCandidates();
        this.getLevels("currentYear");
        this.getLocationsByDate("currentYear");
        this.getInterviewStatisticByDate("currentYear");
        this.getInterviewStatisticByDate("prevYear");
        this.getNewcomers();
    }

    getRejectedCandidates = () => {
        getCandidatesByStatus("REJECTED")
            .then((response) => this.setState({
                rejected: response.data
            }))
    }

    getJoRejectedCandidates = () => {
        getCandidatesByStatus("JO_REJECTED")
            .then((response) => this.setState({
                jo_rejected: response.data
            }))
    }

    getStartedCandidates = () => {
        getCandidatesByStatus("JO_MADE")
            .then((response) => this.setState({
                started: response.data
            }))
    }

    getLevels = (date) => {
        getCandidatesLevelsCountByDate(date)
            .then((response) => this.setState({
                levels: response.data
            }))
    }

    getLocationsByDate = (date) => {
        getCandidatesLocationsCountByDate(date)
            .then((response) => this.setState({
                locations: response.data
            }))
    }

    getInterviewStatisticByDate = date => {
        getInterviewsStatisticByDate(date)
            .then(response => {
                if(date==='prevYear'){
                    this.setState(prevState => ({
                        statistic: {
                            ...prevState.statistic,
                            prevYear: response.data
                        }
                    }))
                } else if(date==='currentYear'){
                    this.setState(prevState => ({
                        statistic: {
                            ...prevState.statistic,
                            currentYear: response.data
                        }
                    }))
                }
            })
    }

    getNewcomers = () => {
        getNewcomersWithDates()
            .then(response => {
                this.setState({
                    newcomers: response.data
                })
            })
            .catch(error => {
                console.log(error)
            })
    }

    redirectTo = (page) => {
        this.props.history.push({
            pathname: `${page}`
        })
    }

    render(){
        return(
            <DashboardView
                totalNumberOfInterviews={this.props.interviewsNumber}
                rejectedCandidates={this.state.rejected}
                started={this.state.started}
                joRejected={this.state.jo_rejected}
                topInterviewers={this.props.topInterviewers}
                redirect={this.redirectTo}
                countByLevels={this.state.levels}
                countByLocations={this.state.locations}
                getLocationsByDate={this.getLocationsByDate}
                getLevelsByDate={this.getLevels}
                statistic={this.state.statistic}
                newcomers={this.state.newcomers}
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