import React, {Component} from 'react';
import classes from './CandidateDetails.module.css';
import Hoc from '../../hoc/Hoc';
import PageHeader from '../Layout/PageHeader/PageHeader';
import Summary from '../CandidateDetails/Summary/Summary'
import Details from '../CandidateDetails/Details/Details'

class CandidateDetails extends Component{
    constructor(props){
        super(props)

        this.state = {
            firstname: "",
            lastname: "",
            skills: "",
            comment: "",
            status: ""
        }
    }

    onFirstNameChanged = () => {

    }

    onLastNameChanged = () => {

    }

    onStatusChanged = () => {

    }

    render() {
        return (
            <Hoc>
                <div className="page-header no-gutters py-4 row mb-5 d-flex justify-content-between align-items-center ">
                    <PageHeader subtitle="People" title="Candidate Details"/>
                </div>
                <div className="row ">
                    <div className="col-md-9">
                        <Details
                            onFirstnameChanged={this.onFirstNameChanged}
                            onLastnameChanged={this.onLastNameChanged}
                            // onSkillsChanged={}
                            //  onCommentChanged={}
                        />
                    </div>
                    <div className="col-md-3">
                        <Summary
                            name={`${this.state.firstname} ${this.state.lastname}`}
                            cancel={this.props.onChangesCanceled}
                        />
                    </div>
                </div>
            </Hoc>
        )
    }
}

export default CandidateDetails;