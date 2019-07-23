import React from 'react';
import classes from './CandidateDetails.module.css';
import Hoc from '../../hoc/Hoc';
import PageHeader from '../Layout/PageHeader/PageHeader';

const candidateDetails = props => {

    return(
        <Hoc>
            <div className="page-header no-gutters py-4 row mb-5 d-flex justify-content-between align-items-center ">
                <PageHeader subtitle="People" title="Candidate Details"/>
            </div>
            <div className="row ">
                <div className="col">
                    <div className={`${classes.card} card-small mb-4`}>
                        {/*<div className={`${classes.card_header} card-header border-bottom`}>*/}
                            {/*<h6 className="m-0 pt-2 pb-2" >Candidates</h6>*/}
                        {/*</div>*/}
                        {/*<div className="card-body p-0 pb-3 text-center">*/}

                        {/*</div>*/}
                    </div>
                </div>
            </div>
        </Hoc>
    )
}

export default candidateDetails;