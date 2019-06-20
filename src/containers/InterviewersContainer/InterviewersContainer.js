import React, {Component} from 'react';
import { connect } from 'react-redux';
import Hoc from '../../hoc/Hoc'
import InterviewersView from '../../components/InterviewersView/InterviewersView';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as interviewersActions from '../../store/actions/index';
import {fetchInterviewers} from '../../store/actions/interviewers'
import Modal from '../../components/UI/Modal/Modal';

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
        this.setState({editable: true})
    }

    editCancelHandler() {
        this.setState({editable: false})
    }

    render(){
        let ints = (
            <button>None</button>
        )

        {if(this.props.interviewers && this.props.interviewers.length > 0){
            ints = (
                <InterviewersView
                    interviewers={this.props.interviewers}
                    editInterviewer={this.editHandler}
                />
            )
        }}

        return(
           <Hoc>
               <Modal show={this.state.editable} modalClosed={this.editCancelHandler}>
               </Modal>
               {ints}
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
        onFetchInterviewers: () => dispatch(interviewersActions.fetchInterviewers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InterviewersContainer);