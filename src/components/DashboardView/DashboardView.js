import React from 'react';
import classes from './DashboardView.module.css';
import Card from '../DashboardView/Card/Card';
import Hoc from '../../hoc/Hoc';
import CandidatesPieChart from '../DashboardView/CandidatesPieChart/CandidatesPieChart';
import InterviewsLineChart from './InterviewsLineChart/InterviewsLineChart';
import CandidatesDoughnutChart from './CandidatesDoughnutChart/CandidatesDoughnutChart';
import BenchPolarChart from './BenchPolarChart/BenchPolarChart';
import TopInterviewers from '../DashboardView/TopInterviewers/TopInterviewers';
import PageHeader from '../Layout/PageHeader/PageHeader';

const dashboardView = () => (
    <Hoc>
        <div className="page-header no-gutters py-4 row">
            <PageHeader subtitle="Overview" title="Dashboard"/>
        </div>
        <div className="row">
            <div className="col-lg mb-4 col-sm-6 col-md-6">
                <Card label="Interviews" count="500" styleClass={classes.Card}/>
            </div>
            <div className="col-lg mb-4 col-sm-6 col-md-6">
                <Card label="JO Made" count="250" styleClass={classes.Card}/>
            </div>
            <div className="col-lg mb-4 col-sm-6 col-md-6">
                <Card label="JO Accepted" count="249" styleClass={classes.Card}/>
            </div>
            <div className="col-lg mb-4 col-sm-6 col-md-6">
                <Card label="JO Rejected" count="1" styleClass={classes.Card}/>
            </div>
        </div>
        <div className="row">
            <div className="mb-4 col-sm-12 col-md-8 col-lg-8">
                <InterviewsLineChart styleClass={classes.Card}/>
            </div>
            <div className="mb-4 col-sm-12 col-md-4 col-lg-4">
                <CandidatesPieChart styleClass={classes.Card}/>
            </div>
        </div>
        <div className="row">
            <div className="mb-4 col-sm-12 col-md-4 col-lg-4">
                <CandidatesDoughnutChart styleClass={classes.Card}/>
            </div>
            <div className="mb-4 col-sm-12 col-md-4 col-lg-4">
                <TopInterviewers styleClass={classes.Card}/>
            </div>
            <div className="mb-4 col-sm-12 col-md-4 col-lg-4">
                <BenchPolarChart styleClass={classes.Card}/>
            </div>
        </div>
    </Hoc>
);

export default dashboardView;