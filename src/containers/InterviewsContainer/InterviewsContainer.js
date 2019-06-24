import React, {Component} from 'react';
import { connect } from 'react-redux';
import Hoc from '../../hoc/Hoc'
import CandidatesView from '../../components/CandidatesView/CandidatesView';
import Modal from '../../components/UI/Modal/Modal';
import NewInterviewView from '../../components/CandidatesView/NewInterviewView/NewInterviewView';
import * as interviewsActions from '../../store/actions/index';

class InterviewsContainer extends Component{
    constructor(props) {
        super(props);

        this.state = {
            showNew: false,
        };

        this.addNewHandler = this.addNewHandler.bind(this)
        this.addNewCancelHandler = this.addNewCancelHandler.bind(this)
    }

    componentDidMount(){
        this.props.onFetchInterviews()
    }

    addNewHandler() {
        this.setState({showNew: true})
    }

    addNewCancelHandler() {
        this.setState({showNew: false})
    }

    render(){
        return (
            <Hoc>
                <Modal show={this.state.showNew} modalClosed={this.addNewCancelHandler}>
                    <NewInterviewView/>
                </Modal>
                <CandidatesView addNew={this.addNewHandler} interviews={this.props.interviews}/>
            </Hoc>
        )
    }
}

const mapStateToProps = state => {
    return{
        interviews: state.interviews
    }

}

const mapDispatchToProps = (dispatch) => {
    return{
        onFetchInterviews: () => dispatch(interviewsActions.fetchInterviews())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InterviewsContainer);