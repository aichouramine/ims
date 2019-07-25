import React from 'react';
import InterviewsTable from './InterviewsTable/InterviewsTable';
import classes from './InterviewsView.module.css';
import CandidatesFilterControls from './InterviewsFilterControls/InterviewsFilterControls';
import Hoc from '../../hoc/Hoc';
import TabButton from '../shared_components/TabButton/TabButton';
import Pagination from '../Navigation/Pagination/Pagination';
import EntriesDropdown from '../shared_components/EntriesDropdown/EntriesDropdown';
import PageHeader from '../Layout/PageHeader/PageHeader';

const interviewsView = (props) => (
    <Hoc>
        <div className="page-header no-gutters py-4 row mb-5 d-flex justify-content-between align-items-center ">
            <PageHeader subtitle="Statistic" title="Interviews"/>
            <div style={{width: '200px'}} className="d-flex justify-content-end">
                <button className="btn btn-primary d-flex align-items-center" style={{width: '30px', fontSize: '14px'}}
                        onClick={props.addNew}>
                    <i className="material-icons" style={{fontSize: '14px', paddingRight: '5px'}}>add_circle_outline</i>
                    Add new
                </button>
            </div>
        </div>
        {/*<CandidatesFilterControls/>*/}
        {/*<div className="d-flex justify-content-between w-100">*/}
            {/*/!*<EntriesDropdown label="interviews per page"/>*!/*/}
            {/**/}
        {/*</div>*/}
        <div className="row">
            <div className="col">
                <div className={`${classes.Card} card-small mb-4`}>
                    <div className={`${classes.Card_header} card-header border-bottom`}>
                        <h6 className="m-0 pt-2 pb-2">Interviews</h6>
                    </div>
                    <div className="card-body p-0 pb-3 text-center">
                        <InterviewsTable
                            list={props.interviews}
                            onInterviewRemove={props.removeInterview}
                            loadMoreItems={props.loadMoreItems}
                        />
                    </div>
                </div>
            </div>
        </div>
        <div className="d-flex justify-content-end w-100">
            {/*<div className={`${classes.Table_pagination_info}`}>*/}
                {/*Showing 1 to 10 of 57 entries*/}
            {/*</div>*/}
            <div className={`${classes.Table_pagination}`}>
            <Pagination total={props.interviews} totalNumber={props.interviewsNumber} loadItems={props.loadMoreItems}/>
        </div>
        </div>
    </Hoc>
);

export default interviewsView;
