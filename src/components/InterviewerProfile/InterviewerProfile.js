import React from 'react';
import classes from './InterviewerProfile.module.css';
import Introduction from './Introduction/Introduction';
import Details from './Details/Details';
import Hoc from '../../hoc/Hoc';
import PageHeader from '../Layout/PageHeader/PageHeader';

const interviewerProfile = props => {

    return(
        <Hoc>
            <div className="page-header no-gutters py-4 row mb-4">
                <PageHeader subtitle="People" title="Interviewer Profile"/>
            </div>
            <div className="row">
                <div className="col-lg-4 col-sm-6 col-md-4">
                    <Introduction/>
                </div>
                <div className="col-lg-8 col-sm-6 col-md-8">
                    <Details/>
                </div>
            </div>
        </Hoc>
    )
}

export default interviewerProfile;