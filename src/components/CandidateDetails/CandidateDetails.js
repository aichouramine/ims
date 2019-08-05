import React, {Component} from 'react';
import classes from './CandidateDetails.module.css';
import Hoc from '../../hoc/Hoc';
import PageHeader from '../Layout/PageHeader/PageHeader';
import Summary from '../CandidateDetails/Summary/Summary'
import Details from '../CandidateDetails/Details/Details'
import {levels} from "../../enums/levels";
import {candidate_location} from "../../enums/candidate_location";
import {candidate_status} from "../../enums/candidate_status";

class CandidateDetails extends Component{
    constructor(props){
        super(props)

        this.state = {
            profile: {
                firstname: this.props.candidate.firstname,
                lastname: this.props.candidate.lastname,
                level: this.props.candidate.level,
                location: this.props.candidate.location,
                skills: this.props.candidate.skills,
                comment: this.props.candidate.comment,
                candidateStatus: this.props.candidate.candidateStatus,
                startDate: this.props.candidate.startDate,
            }
        }
    }

    onFirstNameChanged = (event) => {
        let updated = {
            ...this.state.profile
        }

        updated.firstname = event.target.value;

        this.setState({ profile: updated});
    }

    onLastNameChanged = (event) => {
        let updated = {
            ...this.state.profile
        }

        updated.lastname = event.target.value;

        this.setState({ profile: updated});
    }

    onLevelChanged = (event) => {
        let updated = {
            ...this.state.profile
        }

        updated.level = Object.keys(levels).find(k => levels[k] === event.target.value)

        this.setState({ profile: updated});
    }

    onLocationChanged = (event) => {
        let updated = {
            ...this.state.profile
        }

        updated.location = Object.keys(candidate_location).find(k => candidate_location[k] === event.target.value)

        this.setState({ profile: updated});
    }

    onSkillsChanged = (event) => {
        let updated = {
            ...this.state.profile
        }

        updated.skills = event.target.value;

        this.setState({ profile: updated});
    }

    onCommentChanged = (event) => {
        let updated = {
            ...this.state.profile
        }

        updated.comment = event.target.value;

        this.setState({ profile: updated});
    }

    onStatusChanged = () => {

    }

    saveCandidateProfile = () => {
         // this.props.onCandidateAdded(this.state.profile)
        console.log(this.state.profile)
    }

    render() {
        return (
            <Hoc>
                <div className="page-header no-gutters py-4 row mb-5 d-flex justify-content-between align-items-center ">
                    <PageHeader subtitle="People"
                                title={`${this.props.candidate.firstname} ${this.props.candidate.lastname}`}/>
                </div>
                <div className="row ">
                    <div className="col-md-9">
                        <Details
                            onFirstnameChanged={this.onFirstNameChanged}
                            onLastnameChanged={this.onLastNameChanged}
                            onLevelChanged={this.onLevelChanged}
                            onLocationChanged={this.onLocationChanged}
                            onSkillsChanged={this.onSkillsChanged}
                            onCommentChanged={this.onCommentChanged}
                            profile={this.state.profile}
                        />
                    </div>
                    <div className="col-md-3">
                        <Summary
                            name={`${this.state.firstname} ${this.state.lastname}`}
                            onConfirm={this.saveCandidateProfile}
                            cancel={this.props.onChangesCanceled}
                            profile={this.state.profile}
                            interviewDate={this.props.interviewDate}
                        />
                    </div>
                </div>
            </Hoc>
        )
    }
}

export default CandidateDetails;