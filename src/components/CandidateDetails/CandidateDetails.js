import React from 'react';
import classes from './CandidateDetails.module.css';
import Hoc from '../../hoc/Hoc';
import PageHeader from '../Layout/PageHeader/PageHeader';
import Summary from '../CandidateDetails/Summary/Summary'
import Details from '../CandidateDetails/Details/Details'

const candidateDetails = props => {

    return(
        <Hoc>
            <div className="page-header no-gutters py-4 row mb-5 d-flex justify-content-between align-items-center ">
                <PageHeader subtitle="People" title="Candidate Details"/>
            </div>
            <div className="row ">
                <div className="col-md-9">
                    <Details/>
                </div>
                <div className="col-md-3">
                    <Summary/>
                </div>
            </div>
        </Hoc>
    )
}

export default candidateDetails;