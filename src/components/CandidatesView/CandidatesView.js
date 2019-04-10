import React from 'react';
import CandidatesTable from './CandidatesTable/CandidatesTable';
import classes from './CandidatesView.module.css';

const candidatesView = (props) => (
    <div className={classes.Table}>
        <CandidatesTable/>
    </div>
);

export default candidatesView;
