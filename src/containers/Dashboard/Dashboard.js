import React, {Component} from 'react';
import { connect } from 'react-redux';
import DashboardView from '../../components/DashboardView/DashboardView';
import * as interviewersActions from '../../store/actions/interviewersIndex';
import * as interviewsActions from '../../store/actions/interviewsIndex';

class Dashboard extends Component{
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.onFetchTopInterviewers();
        this.props.onFetchTotalInterviewsNumber();
    }

    render(){
        return(
            <DashboardView
                totalNumberOfInterviews={this.props.interviewsNumber}
                topInterviewers={this.props.topInterviewers}
            />
        )
    }
}

const mapStateToProps = state => {

    return{
        topInterviewers: state.interviewersReducer.topInterviewers,
        interviewsNumber: state.interviewersReducer.interviewsNumber
    }

}

const mapDispatchToProps = (dispatch) => {
    return{
        onFetchTopInterviewers: () => dispatch(interviewersActions.fetchTopInterviewers()),
        onFetchTotalInterviewsNumber: () => dispatch(interviewsActions.fetchInterviewsNumber())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);