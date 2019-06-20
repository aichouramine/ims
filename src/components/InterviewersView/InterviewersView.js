import React from 'react';
import classes from './InterviewersView.module.css';
import InterviewersFilterControls from '../InterviewersView/InterviewersFilterControls/InterviewersFilterControls';
import Hoc from '../../hoc/Hoc';
import InterviewersTable from '../InterviewersView/InterviewersTable/InterviewersTable';
import TabButton from '../shared_components/TabButton/TabButton';
import Pagination from "../Navigation/Pagination/Pagination";
import EntriesDropdown from "../shared_components/EntriesDropdown/EntriesDropdown";
import PageHeader from '../Layout/PageHeader/PageHeader';

const interviewersView = (props) => (
    <Hoc>
        <div className="page-header no-gutters py-4 row mb-5">
            <PageHeader subtitle="People" title="Interviewers"/>
        </div>
        {/*<div className="d-flex justify-content-between w-100">*/}
            {/*<InterviewersFilterControls/>*/}
        {/*</div>*/}
        {/*<div className="d-flex justify-content-between w-100">*/}
            {/*<EntriesDropdown label="interviewers per page"/>*/}
            {/*/!*<TabButton label="New"/>*!/*/}
        {/*</div>*/}
        <div className="row">
            <div className="col">
                <div className={`${classes.Card} card-small mb-4`}>
                    <div className={`${classes.Card_header} card-header border-bottom`}>
                        <h6 className="m-0">Interviewers</h6>
                    </div>
                    <div className="card-body p-0 pb-3 text-center">
                        <InterviewersTable list={props.interviewers} onInterviewerEdit={props.editInterviewer}/>
                    </div>
                </div>
            </div>
        </div>
        <div className="d-flex justify-content-between w-100">
            <div className={`${classes.Table_pagination_info}`}>
                Showing 1 to 10 of 57 entries
            </div>
            <div className={`${classes.Table_pagination}`}>
                <Pagination/>
            </div>
        </div>
    </Hoc>
);

export default interviewersView;
