import React from 'react';
import CandidatesTable from './CandidatesTable/CandidatesTable';
import classes from './CandidatesView.module.css';
import CandidatesFilterControls from './CandidatesFilterControls/CandidatesFilterControls';
import Hoc from '../../hoc/Hoc';
import TabButton from '../shared_components/TabButton/TabButton';
import Pagination from '../Navigation/Pagination/Pagination';
import EntriesDropdown from '../shared_components/EntriesDropdown/EntriesDropdown';

const candidatesView = () => (
    <Hoc>
        <CandidatesFilterControls/>
        <div className="d-flex justify-content-between w-100">
            <EntriesDropdown label="interviews per page"/>
            <TabButton label="New"/>
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
