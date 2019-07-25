import React, { Component } from 'react';
import { connect } from 'react-redux';
import InterviewerProfile from '../../components/InterviewerProfile/InterviewerProfile';
import * as interviewersActions from '../../store/actions/interviewersIndex';
import { getInterviewerStatistic } from '../../api/axios-interviewers';
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

    confirmCancelHandler() {
        this.setState({confirm: false})
    }

    render(){
        return(
            <Hoc>
                {/*<Modal show={this.state.confirm} modalClosed={this.confirmCancelHandler} confirmed={this.onRemoveFromProfile}>*/}
                    {/*<ConfirmDialog onConfirmRemove={this.onRemoveFromProfile} onCancel={this.confirmCancelHandler}/>*/}
                {/*</Modal>*/}
                <InterviewerProfile
                    interviewer={this.props.interviewerProfile}
                    updateInterviewer={this.props.onUpdateInterviewerProfile}
                    remove={this.confirmHandler}
                    removeStatus={this.props.removeSuccess}
                    statistic={this.state.statisticData}
                />
            </Hoc>
        )
    }
}

const mapStateToProps = state => {
    return{
        interviewerProfile: state.interviewersReducer.interviewerProfile,
        removeSuccess: state.interviewersReducer.removeSuccess
    }

}

const mapDispatchToProps = (dispatch) => {
    return{
        onUpdateInterviewerProfile: (obj) => dispatch(interviewersActions.updateInterviewer(obj)),
        onRemoveInterviewer: (id) => dispatch(interviewersActions.removeInterviewer(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (InterviewerProfileContainer);