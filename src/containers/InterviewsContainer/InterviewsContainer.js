import React, {Component} from 'react';
import Hoc from '../../hoc/Hoc'
import CandidatesView from '../../components/CandidatesView/CandidatesView';
import Modal from '../../components/UI/Modal/Modal';
import NewInterviewView from '../../components/CandidatesView/NewInterviewView/NewInterviewView';

class InterviewsContainer extends Component{
    constructor(props) {
        super(props);

        this.state = {
            showNew: false,
        };

        this.addNewHandler = this.addNewHandler.bind(this)
        this.addNewCancelHandler = this.addNewCancelHandler.bind(this)
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
                <CandidatesView addNew={this.addNewHandler}/>
            </Hoc>
        )
    }
}

export default InterviewsContainer;