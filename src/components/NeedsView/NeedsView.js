import React from 'react';
import classes from './NeedsView.module.css';
import BenchTable from './BenchTable/BenchTable';

const needsView = () => (
    <div className="row">
        <div className="mb-4 col-sm-12 col-md-8 col-lg-8">

        </div>
        <div className={`${classes.Card} card-small mb-4 col-sm-12 col-md-4 col-lg-4`}>
            <div className={`${classes.Card_header} card-header border-bottom`}>
                <h6 className="m-0">Bench</h6>
            </div>
            <div className="card-body p-0 pb-3 text-center">
                <BenchTable/>
            </div>
        </div>
    </div>
);

export default needsView;
