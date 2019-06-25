import React, {Component} from 'react';
import { connect } from 'react-redux';
import Hoc from '../../hoc/Hoc'
import InterviewersView from '../../components/InterviewersView/InterviewersView';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as interviewersActions from '../../store/actions/index';
import {fetchInterviewers} from '../../store/actions/interviewers'
import Modal from '../../components/UI/Modal/Modal';
import InterviewerEditView from '../../components/InterviewersView/InterviewerEditView/InterviewerEditView';

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
         this.props.onFetchInterviewers();
    }

    editHandler() {
        this.props.history.push({
            pathname: 'profile',
            state: { interviewer: true }
        })
        // this.setState({editable: true})
    }

    editCancelHandler() {
        this.setState({editable: false})
    }

    render(){
        return(
           <Hoc>
               <Modal show={this.state.editable} modalClosed={this.editCancelHandler}>
                   <InterviewerEditView
                       onConfirm={this.props.onUpdateInterviewer}
                   />
               </Modal>
               <InterviewersView
                   interviewers={this.props.interviewers}
                   editInterviewer={this.editHandler}
                   removeInterviewer={this.props.onRemoveInterviewer}
               />
           </Hoc>
        )
    }
}

const mapStateToProps = state => {

    return{
        interviewers: state.interviewers
    }

}

const mapDispatchToProps = (dispatch) => {
    return{
        onFetchInterviewers: () => dispatch(interviewersActions.fetchInterviewers()),
        onRemoveInterviewer: (id) => dispatch(interviewersActions.removeInterviewer(id)),
        onUpdateInterviewer: (obj) => dispatch(interviewersActions.updateInterviewer(obj))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InterviewersContainer);