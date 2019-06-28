import React, {Component} from 'react';
import { connect } from 'react-redux';
import Hoc from '../../hoc/Hoc'
import InterviewersView from '../../components/InterviewersView/InterviewersView';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as interviewersActions from '../../store/actions/index';
import {fetchInterviewers} from '../../store/actions/interviewers'

class InterviewersContainer extends Component{
    constructor(props) {
        super(props);

        this.state = {
            editable: false,
        };

        this.editHandler = this.editHandler.bind(this)
        this.editCancelHandler = this.editCancelHandler.bind(this)
    }

    componentDidMount(){
         this.props.onFetchInterviewers(0, 10);
         this.props.onFetchInterviewersNumber()
    }

    editHandler(interviewer) {
        this.props.history.push({
            pathname: 'profile',
            state: { interviewer: interviewer }
        })
        // this.setState({editable: true})
    }

    editCancelHandler() {
        this.setState({editable: false})
    }

    render(){
        return(
           <Hoc>
               <InterviewersView
                   interviewers={this.props.interviewers}
                   editInterviewer={this.editHandler}
                   removeInterviewer={this.props.onRemoveInterviewer}
                   interviewersNumber={this.props.interviewersNum}
                   getInterviewers={this.props.onFetchInterviewers}
               />
           </Hoc>
        )
    }
}

const mapStateToProps = state => {

    return{
        interviewers: state.interviewers,
        interviewersNum: state.interviewersNum
    }

}

const mapDispatchToProps = (dispatch) => {
    return{
        onFetchInterviewers: (page, size) => dispatch(interviewersActions.fetchInterviewers(page, size)),
        onRemoveInterviewer: (id) => dispatch(interviewersActions.removeInterviewer(id)),
        onUpdateInterviewer: (obj) => dispatch(interviewersActions.updateInterviewer(obj)),
        onFetchInterviewersNumber: () => dispatch(interviewersActions.fetchInterviewersNumber())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InterviewersContainer);