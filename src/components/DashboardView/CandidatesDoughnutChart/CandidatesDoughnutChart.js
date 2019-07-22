import React from 'react';
import {Doughnut} from 'react-chartjs-2';
import classes from './CandidatesDoughnutChart.module.css';

const data = {
    labels: [
        'Red',
        'Green',
        'Yellow'
    ],
    datasets: [{
        data: [300, 50, 100],
        backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
        ],
        hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
        ]
    }]
};

const candidatesDoughnutChart = props => (
    <div className={`${props.styleClass} h-100 `}>
        <div className={`${classes.Card_header} ${classes.Border_bottom}`}>
            <h6 className="m-0">Candidates by level</h6>
        </div>
        <div className="d-flex py-0 card-body">
            <Doughnut data={data} options={{ maintainAspectRatio: false }} width={400}
                 height={300}/>
        </div>
        <div className={`${classes.Card_footer} ${classes.Border_top}`}>
            <div className="row">
                <div className="col"><select className={`${classes.Custom_select} form-control custom-select form-control-sm custom-select-sm`}
                                             style={{maxWidth: "130px"}}>
                    <option value="last-week">All times</option>
                    <option value="last-month">Last Month</option>
                    {/*<option value="last-year">Last Year</option>*/}
                </select></div>
                <div className={`${classes.View_report} ${classes.Text_right} col`}><a href="#">View full report →</a></div>
            </div>
        </div>
    </div>
);

export default candidatesDoughnutChart;