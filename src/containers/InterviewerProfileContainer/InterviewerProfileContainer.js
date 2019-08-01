import React, { Component } from 'react';
import { connect } from 'react-redux';
import InterviewerProfile from '../../components/InterviewerProfile/InterviewerProfile';
import * as interviewersActions from '../../store/actions/interviewersIndex';
import { getInterviewerStatistic } from '../../api/axios-interviewers';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Hoc from '../../hoc/Hoc';

class InterviewerProfileContainer extends Component{
    constructor(props) {
        super(props);

        this.state = {
            confirm: false,
            statisticData: []
        };

        this.confirmHandler = this.confirmHandler.bind(this)
        this.confirmCancelHandler = this.confirmCancelHandler.bind(this)
    }

    componentDidMount(){
        this.getStatisticData(this.props.interviewerProfile.id)
    }

    getStatisticData = (id) => {
        getInterviewerStatistic(id)
            .then((response) => this.setState({
                statisticData: response.data.slice()
            }))
    }

    onRemoveFromProfile = () => {
        this.props.onRemoveInterviewer(this.props.interviewerProfile.id)
        // console.log('removed')
        // this.props.history.push({
        //     pathname: 'interviewers'
        // })
        this.setState({confirm: false})
    }

    confirmHandler() {
        this.setState({
            confirm: true
        })
    }

    // notify = () => toast("Profile is updated successfully");

    confirmCancelHandler() {
        this.setState({confirm: false})
    }

    onSuccessUpdate = (obj) => {
        this.props.onUpdateInterviewerProfile(obj);
        // if(this.props.updateSuccess){
        //
        // }
        // toast.success("Profile is updated successfully",
        //     {
        //         className: 'black-background',
        //         bodyClassName: "grow-font-size"
        //     }
        // );
    }

    render(){
        return(
            <Hoc>
                <InterviewerProfile
                    interviewer={this.props.interviewerProfile}
                    updateInterviewer={this.onSuccessUpdate}
                    remove={this.confirmHandler}
                    removeStatus={this.props.removeSuccess}
                    statistic={this.state.statisticData}
                />
                <ToastContainer
                    position="bottom-right"
                    hideProgressBar={false}
                    autoClose={3000}
                    newestOnTop={true}
                    closeOnClick={true}
                    draggable={false}
                    rtl={false}
                />
            </Hoc>
        )
    }
}

const mapStateToProps = state => {
    return{
        interviewerProfile: state.interviewersReducer.interviewerProfile,
        removeSuccess: state.interviewersReducer.removeSuccess,
        updateSuccess: state.interviewersReducer.updateSuccess
    }

}

const mapDispatchToProps = (dispatch) => {
    return{
        onUpdateInterviewerProfile: (obj) => dispatch(interviewersActions.updateInterviewer(obj)),
        onRemoveInterviewer: (id) => dispatch(interviewersActions.removeInterviewer(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (InterviewerProfileContainer);