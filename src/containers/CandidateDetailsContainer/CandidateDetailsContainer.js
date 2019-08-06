import React, { Component } from 'react';
import { connect } from 'react-redux';
import CandidateDetails from '../../components/CandidateDetails/CandidateDetails';
import * as candidatesActions from '../../store/actions/candidatesIndex';
import {getInterviewDateByCandidateId} from '../../api/axios-interviews';
import {updateCandidate} from '../../api/axios-candidates';
import { toast, ToastContainer } from "react-toastify";
import Hoc from '../../hoc/Hoc'

class CandidateDetailsContainer extends Component{
    _isMounted = false;

    constructor(props) {
        super(props);

        this.state = {
            interviewDate: ""
        }
    }

    cancelChanges = () => {
        this.props.history.goBack();
    }

    componentDidMount(){
        this._isMounted = true;

        getInterviewDateByCandidateId(this.props.candidateInfo.id)
            .then(response => {
                this.setState({
                    interviewDate: response.data
                })
            })
        // this.props.onFetchCandidates(0, 30);
    }


    updateProfile = (obj) => {
        updateCandidate(obj)
            .then(() =>
                toast.success("Candidate is updated successfully",
                    {
                        className: 'toast-body__success',
                        onClose: this.props.history.goBack
                        // bodyClassName: "grow-font-size"
                    }
                )
            )
            .catch(() =>
                toast.error('Something went wrong. Please try again.',
                    {
                        className: 'toast-body__error',
                        onClose: this.props.history.goBack
                        // bodyClassName: "toast-body"
                    }
                )
            )
            // .finally(() => {
            //     this.props.history.goBack();
            // })
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render(){
        return(
            <Hoc>
                <CandidateDetails
                    onChangesCanceled={this.cancelChanges}
                    candidate={this.props.candidateInfo}
                    interviewDate={this.state.interviewDate}
                    onProfileUpdate={this.updateProfile}
                />
                <ToastContainer
                    position="bottom-right"
                    hideProgressBar={false}
                    autoClose={1500}
                    newestOnTop={true}
                    closeOnClick={true}
                    draggable={false}
                    rtl={false}
                    className="toast-container"
                />
            </Hoc>
        )
    }
}

const mapStateToProps = state => {
    return{
        candidateInfo: state.candidatesReducer.candidateInfo
    }

}

const mapDispatchToProps = (dispatch) => {

}

export default connect(mapStateToProps) (CandidateDetailsContainer);
