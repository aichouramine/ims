import React from 'react';
import classes from './InterviewersView.module.css';
import InterviewersFilterControls from '../InterviewersView/InterviewersFilterControls/InterviewersFilterControls';
import Hoc from '../../hoc/Hoc';
import InterviewersTable from '../InterviewersView/InterviewersTable/InterviewersTable';

const interviewersView = (props) => (
    <Hoc>
        <InterviewersFilterControls/>
        <div className="row">
            <div className="col">
                <div className={`${classes.Card} card-small mb-4`}>
                    <div className={`${classes.Card_header} card-header border-bottom`}>
                        <h6 className="m-0">Interviewers</h6>
                    </div>
                    <div className="card-body p-0 pb-3 text-center">
                        <InterviewersTable/>
                    </div>
                </div>
            </div>
        </div>
    </Hoc>
);

export default interviewersView;
