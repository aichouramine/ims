import React from 'react';
import CandidatesTable from './CandidatesTable/CandidatesTable';
import classes from './CandidatesView.module.css';
import CandidatesFilterControls from './CandidatesFilterControls/CandidatesFilterControls';
import Hoc from '../../hoc/Hoc';
import Button from '../shared_components/Button/Button';

const candidatesView = () => (
    <Hoc>
        <CandidatesFilterControls/>
        <div style={{display: 'flex'}}>
            <div style={{marginLeft: 'auto'}}>
                <Button text="Add"/>
            </div>
        </div>
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
    </Hoc>
);

export default candidatesView;
