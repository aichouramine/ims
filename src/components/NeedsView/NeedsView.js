import React from 'react';
import classes from './NeedsView.module.css';
import BenchTable from './BenchTable/BenchTable';
import ProjectsTable from './ProjectsTable/ProjectsTable';
import MasteryTable from './MasteryTable/MasteryTable';
import Hoc from '../../hoc/Hoc';

const needsView = () => (
    <Hoc>
        <div className="row">
            <div className="mb-4 col-sm-12 col-md-12 col-lg-12 ">
                <div className={`${classes.Card} card-small `}>
                    <div className={`${classes.Card_header} card-header border-bottom`}>
                        <h6 className="m-0">Project Needs</h6>
                    </div>
                    <div className="card-body p-0 pb-3 text-center">
                        <ProjectsTable/>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="mb-4 col-sm-12 col-md-6 col-lg-6 ">
                <div className={`${classes.Card} card-small `}>
                    <div className={`${classes.Card_header} card-header border-bottom`}>
                        <h6 className="m-0">Bench</h6>
                    </div>
                    <div className="card-body p-0 pb-3 text-center">
                        <BenchTable/>
                    </div>
                </div>
            </div>
            <div className="mb-4 col-sm-12 col-md-6 col-lg-6 ">
                <div className={`${classes.Card} card-small `}>
                    <div className={`${classes.Card_header} card-header border-bottom`}>
                        <h6 className="m-0">Mastery</h6>
                    </div>
                    <div className="card-body p-0 pb-3 text-center">
                        <MasteryTable/>
                    </div>
                </div>
            </div>
        </div>
    </Hoc>
);

export default needsView;
