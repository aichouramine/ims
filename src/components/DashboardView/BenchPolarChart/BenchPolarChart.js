import React from 'react';
import {Polar} from 'react-chartjs-2';
import classes from './BenchPolarChart.module.css';

const data = {
    datasets: [{
        data: [
            11,
            16,
            7,
            3,
            14
        ],
        backgroundColor: [
            '#FF6384',
            '#4BC0C0',
            '#FFCE56',
            '#E7E9ED',
            '#36A2EB'
        ],
        label: 'My dataset' // for legend
    }],
    labels: [
        'Minsk',
        'Brest',
        'Grodno',
        'Gomel',
        'Mogilev'
    ]
};

const benchPolarChart = props => (
    <div className={`${props.styleClass} h-100 `}>
        <div className={`${classes.Card_header} ${classes.Border_bottom}`}>
            <h6 className="m-0">Bench by location</h6>
        </div>
        <div className="d-flex py-0 card-body">
            <Polar data={data} options={{ maintainAspectRatio: false }} width={442}
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

export default benchPolarChart;