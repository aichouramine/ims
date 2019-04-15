import React from 'react';
import classes from './DashboardView.module.css';
import Card from '../DashboardView/Card/Card';

const dashboardView = () => (
    <div className="row">
        <div className="col-lg mb-4 col-sm-6 col-md-6">
            <Card label="Interviews" count="500" styleClass={classes.Card}/>
        </div>
        <div className="col-lg mb-4 col-sm-6 col-md-6">
            <Card label="JO Accepted" count="499" styleClass={classes.Card}/>
        </div>
        <div className="col-lg mb-4 col-sm-6 col-md-6">
            <Card label="JO Rejected" count="1" styleClass={classes.Card}/>
        </div>
    </div>
);

export default dashboardView;