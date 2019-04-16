import React from 'react';
import {Pie} from 'react-chartjs-2';
import classes from './CandidatesPieChart.module.css';

const data = {
    labels: [
        'Minsk',
        'Brest',
        'Grodno'
    ],
    datasets: [{
        data: [300, 100, 30],
        backgroundColor: [
            '#007bff',
            '#37abf5',
            '#75c8f5'
        ],
        hoverBackgroundColor: [
            '#007bff',
            '#37abf5',
            '#75c8f5'
        ]
    }]
};

const candidatesPieChart = props => (
    <div className={`${props.styleClass} h-100 `}>
        <div className={`${classes.Card_header} ${classes.Border_bottom}`}>
            <h6 className="m-0">Candidates by location</h6>
        </div>
        <div className="d-flex py-0 card-body">
            <Pie data={data} options={{ maintainAspectRatio: false }} width={442}
                 height={323}/>
        </div>
        <div className={`${classes.Card_footer} ${classes.Border_top}`}>
            <div className="row">
                <div className="col"><select className={`${classes.Custom_select} form-control custom-select form-control-sm custom-select-sm`}
                                             style={{maxWidth: "130px"}}>
                    <option value="last-week">Last Week</option>
                    <option value="today">Today</option>
                    <option value="last-month">Last Month</option>
                    <option value="last-year">Last Year</option>
                </select></div>
                <div className={`${classes.View_report} ${classes.Text_right} col`}><a href="#">View full report →</a></div>
            </div>
        </div>
    </div>
);

export default candidatesPieChart;