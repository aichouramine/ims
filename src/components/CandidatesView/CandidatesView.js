import React from 'react';
import CandidatesTable from './CandidatesTable/CandidatesTable';
import classes from './CandidatesView.module.css';

const candidatesView = (props) => (
    <div className="row">
        <div className="col">
            <div className={`${classes.Card} card-small mb-4`}>
                <div className={`${classes.Card_header} card-header border-bottom`}>
                    <h6 className="m-0">Candidates</h6>
                </div>
                <div className="card-body p-0 pb-3 text-center">
                    <CandidatesTable/>
                </div>
            </div>
        </div>
    </div>
);

export default candidatesView;
