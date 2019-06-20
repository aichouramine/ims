import React, {Component} from 'react';
import { connect } from 'react-redux';
import DashboardView from '../../components/DashboardView/DashboardView';
import * as interviewersActions from '../../store/actions/index';
import {fetchTopInterviewers} from '../../store/actions/interviewers'


class Dashboard extends Component{
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.onFetchTopInterviewers();
    }

    render(){
        return(
            <DashboardView topInterviewers={this.props.topInterviewers}/>
        )
    }
}

const mapStateToProps = state => {

    return{
        topInterviewers: state.topInterviewers
    }

}

const mapDispatchToProps = (dispatch) => {
    return{
        onFetchTopInterviewers: () => dispatch(interviewersActions.fetchTopInterviewers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);