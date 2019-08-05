import React, { Component } from 'react';
import { connect } from 'react-redux';
import CandidateCreationDetails from '../../components/CandidateCreationDetails/CandidateCreationDetails';
import * as candidatesActions from '../../store/actions/candidatesIndex';
import Hoc from '../../hoc/Hoc'
import Modal from '../../components/UI/Modal/Modal';
import ConfirmDialog from '../../components/UI/ConfirmDialog/ConfirmDialog';

class CandidateCreationContainer extends Component{
    constructor(props) {
        super(props);

        this.state = {
            showConfirm: props.addCandidateSuccess || false,
        };
    }

    cancelChanges = () => {
        this.props.history.goBack();
    }

    componentDidMount(){
        // this.props.onFetchCandidates(0, 30);
    }

    callInterviewCreation = () => {
        this.setState({showConfirm: true})
    }

    cancelInterviewCreation = () => {
        this.setState({showConfirm: false})
        setTimeout(this.props.history.goBack, 300);
    }

    addNewCandidate = obj => {
        this.props.onAddingCandidate(obj);
        // this.props.history.goBack();
        this.callInterviewCreation();
    }

    render(){
        return(
            <Hoc>
                <Modal show={this.state.showConfirm} modalClosed={this.cancelInterviewCreation}>
                    <ConfirmDialog onCancel={this.cancelInterviewCreation}/>
                </Modal>
                <CandidateCreationDetails
                    onChangesCanceled={this.cancelChanges}
                    onCandidateAdded={this.addNewCandidate}
                    candidate={this.props.candidateInfo}
                />
            </Hoc>
        )
    }

}

const mapStateToProps = state => {
    return{
        candidateInfo: state.candidatesReducer.candidateInfo,
        addCandidateSuccess: state.candidatesReducer.addCandidateSuccess
    }

}

const mapDispatchToProps = (dispatch) => {
    return{
        onAddingCandidate: (obj) => dispatch(candidatesActions.addCandidateToTheList(obj))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (CandidateCreationContainer);