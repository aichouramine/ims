import React from 'react';
import CandidatesTable from './CandidatesTable/CandidatesTable';
import classes from './CandidatesView.module.css';
import CandidatesFilterControls from './InterviewsFilterControls/InterviewsFilterControls';
import Hoc from '../../hoc/Hoc';
import TabButton from '../shared_components/TabButton/TabButton';
import Pagination from '../Navigation/Pagination/Pagination';
import EntriesDropdown from '../shared_components/EntriesDropdown/EntriesDropdown';
import PageHeader from '../Layout/PageHeader/PageHeader';

const candidatesView = (props) => (
    <Hoc>
        <div className="page-header no-gutters py-4 row mb-5">
            <PageHeader subtitle="Statistic" title="Interviews"/>
        </div>
        {/*<CandidatesFilterControls/>*/}
        <div className="d-flex justify-content-between w-100">
            <EntriesDropdown label="interviews per page"/>
            <TabButton label="New" onClicked={props.addNew}/>
        </div>
        <div className="row">
            <div className="col">
                <div className={`${classes.Card} card-small mb-4`}>
                    <div className={`${classes.Card_header} card-header border-bottom`}>
                        <h6 className="m-0">Interviews</h6>
                    </div>
                    <div className="card-body p-0 pb-3 text-center">
                        <CandidatesTable list={props.interviews}/>
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

export default candidatesView;
