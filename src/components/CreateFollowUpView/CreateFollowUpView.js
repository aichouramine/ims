import React, {Component} from 'react';
import PageHeader from '../Layout/PageHeader/PageHeader';
import classes from '../CreateFollowUpView/CreateFollowUpView.module.css';
import Hoc from '../../hoc/Hoc';
import FeedbackForm from './FeedbackForm/FeedbackForm';

class CreateFollowUpView extends Component{
    constructor(props){
        super(props)

        this.state = {
            profile: {
                id: '',
                firstname: '',
                lastname: '',
                level: '',
                location: '',
                skills: '',
                comment: '',
                candidateStatus: '',
                startDate: '',
            },
            errors: {
                firstNameError: '',
                lastNameError: '',
                levelError: '',
                locationError: '',
            }
        }
    }

    render(){
        return(
            <Hoc>
                <div className="page-header no-gutters py-4 row mb-5 d-flex justify-content-between align-items-center ">
                    <PageHeader subtitle="Feedback" title="Follow-up"/>
                </div>
                <div className="row ">
                    <div className="col-md-9">
                        <FeedbackForm
                            profile={this.state.profile}
                            errors={this.state.errors}
                        />
                        {/*<Details*/}
                            {/*onFirstnameChanged={this.onFirstNameChanged}*/}
                            {/*onLastnameChanged={this.onLastNameChanged}*/}
                            {/*onLevelChanged={this.onLevelChanged}*/}
                            {/*onLocationChanged={this.onLocationChanged}*/}
                            {/*onSkillsChanged={this.onSkillsChanged}*/}
                            {/*onCommentChanged={this.onCommentChanged}*/}
                            {/*profile={this.state.profile}*/}
                            {/*errors={this.state.errors}*/}
                        {/*/>*/}
                    </div>
                    <div className="col-md-3">
                        {/*<Summary*/}
                            {/*name={`${this.state.firstname} ${this.state.lastname}`}*/}
                            {/*onConfirm={this.saveCandidateProfile}*/}
                            {/*cancel={this.props.onChangesCanceled}*/}
                            {/*profile={this.state.profile}*/}
                            {/*interviewDate={this.props.interviewDate}*/}
                        {/*/>*/}
                    </div>
                </div>
            </Hoc>
        )
    }
}

export default CreateFollowUpView;